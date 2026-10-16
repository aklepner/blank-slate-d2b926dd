import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DSO Pricing" },
      { name: "description", content: "Privacy Policy for DSO Pricing services and member portal." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <div className="pt-44 pb-20 px-6 max-w-4xl mx-auto w-full leading-relaxed">
        <h1 className="text-4xl font-black uppercase mb-6">Privacy Policy</h1>
        <p className="text-white/70 mb-4">Effective Date: August 10, 2026</p>
        <div className="space-y-6 text-white/80 text-sm">
          <p>
            DSO Pricing ("we", "us", or "our") respects your privacy and is committed to protecting the personal data of our dental practice members, website visitors, and vendor partners.
          </p>
          <h2 className="text-xl font-bold uppercase text-white">Information We Collect</h2>
          <p>
            We collect practice contact details, authorized purchasing information, and account credentials when you register for DSO Pricing membership or request a savings analysis.
          </p>
          <h2 className="text-xl font-bold uppercase text-white">How We Use Your Information</h2>
          <p>
            Your information is used strictly to negotiate supplier contract rates, administer your membership, verify eligibility with GPO vendor partners, and communicate updates.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
