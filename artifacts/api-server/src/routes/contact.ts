import { Router } from "express";
import { logger } from "../lib/logger";

const router = Router();

const GHL_API_BASE = "https://services.leadconnectorhq.com";

router.post("/contact", async (req, res) => {
  const limits: Record<string, [number, number]> = {
    name: [2, 200], email: [3, 254], practiceName: [1, 200],
    phone: [7, 50], locations: [1, 20], message: [10, 10000],
  };
  const input = req.body;
  if (!input || Object.entries(limits).some(([key, [min, max]]) =>
    typeof input[key] !== "string" || input[key].trim().length < min || input[key].length > max,
  ) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    res.status(400).json({ error: "Please check your contact details and message." });
    return;
  }
  const { name, email, practiceName, phone, locations, message } =
    Object.fromEntries(Object.keys(limits).map(key => [key, input[key].trim()])) as Record<string, string>;

  const apiToken = process.env["GHL_API_TOKEN"];
  const locationId = process.env["GHL_LOCATION_ID"];

  if (!apiToken || !locationId) {
    logger.error("GHL_API_TOKEN or GHL_LOCATION_ID is not set");
    res.status(500).json({ error: "Server misconfiguration" });
    return;
  }

  const headers = {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json",
    Version: "2021-07-28",
  };

  try {
    const contactRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        locationId,
        firstName: name.split(" ")[0] ?? name,
        lastName: name.split(" ").slice(1).join(" ") || undefined,
        email,
        phone,
        companyName: practiceName,
        source: "DSO Pricing Website",
      }),
    });

    const contactData = (await contactRes.json()) as { contact?: { id?: string }; id?: string };

    if (!contactRes.ok) {
      logger.error({ status: contactRes.status }, "GHL upsert contact failed");
      res.status(502).json({ error: "We couldn't send your inquiry. Please try again shortly." });
      return;
    }

    const contactId = contactData?.contact?.id ?? (contactData as { id?: string })?.id;

    if (!contactId) {
      logger.error("GHL response did not include a contact ID");
      res.status(502).json({ error: "We couldn't confirm your inquiry was received. Please try again." });
      return;
    }
    {
      const noteBody = [
        "DSO Pricing Website Inquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Practice Name: ${practiceName}`,
        `Phone: ${phone}`,
        `Locations: ${locations}`,
        ``,
        `Message:`,
        message,
      ].join("\n");

      const noteRes = await fetch(`${GHL_API_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        signal: AbortSignal.timeout(15000),
        body: JSON.stringify({
          body: noteBody,
        }),
      });

      if (!noteRes.ok) {
        logger.error({ status: noteRes.status }, "GHL create note failed");
        res.status(502).json({ error: "Your contact details were saved, but your message wasn't delivered. Please try again." });
        return;
      }
    }

    // Add rather than replace tags, preserving existing CRM segmentation.
    const tagRes = await fetch(`${GHL_API_BASE}/contacts/${contactId}/tags`, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({ tags: ["dso-pricing-inquiry"] }),
    });
    if (!tagRes.ok) {
      logger.error({ status: tagRes.status }, "GHL inquiry tagging failed");
      res.status(502).json({ error: "Your message was saved, but we couldn't finish routing your inquiry. Please try again." });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    logger.error({ err }, "GHL request threw an error");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
