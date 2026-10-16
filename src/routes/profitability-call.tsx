import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/profitability-call")({
  head: () => ({
    meta: [
      { title: "Book an Advisory Call — DSO Pricing" },
      {
        name: "description",
        content: "Schedule a profitability consultation call with a DSO Pricing practice advisor.",
      },
    ],
  }),
  component: AdvisorCallPage,
});

const LOCATION_ID = "nhdBR29f9lJlDspKHlcz";
const CALENDAR_ID = "nhiroB1yPqYywgQ327BH";
const ORANGE = "#DD042A";

function AdvisorCallPage() {
  const navigate = useNavigate();
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSlots() {
      try {
        const startMs = Date.now();
        const endMs = startMs + 14 * 24 * 60 * 60 * 1000;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const res = await fetch(
          `https://backend.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots?startDate=${startMs}&endDate=${endMs}&timezone=${tz}`,
        );
        if (!res.ok) return;
        const data = await res.json();
        const dates = Object.keys(data);
        const allSlots: string[] = [];
        for (const date of dates) {
          if (data[date]?.slots) {
            allSlots.push(...data[date].slots);
          }
        }
        setSlots(allSlots.slice(0, 10));
      } catch {
        // use fallback display slots if offline
      }
    }
    loadSlots();
  }, []);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      toast.error("Please select an available time slot");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://backend.leadconnectorhq.com/vibe-ai/booking/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locationId: LOCATION_ID,
          calendarId: CALENDAR_ID,
          firstName,
          lastName,
          email,
          phone,
          selectedSlot,
          selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          sessionId: crypto.randomUUID(),
        }),
      });
      if (res.ok) {
        toast.success("Call booked successfully!");
        navigate({ to: "/booking-confirmed" as any });
      } else {
        toast.error("Failed to submit booking. Please try again.");
      }
    } catch {
      toast.error("Network error submitting booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <div className="pt-44 pb-20 px-6 max-w-3xl mx-auto w-full">
        <div className="text-center mb-10">
          <p className="text-sm font-black uppercase tracking-widest mb-3 text-red-600">
            Free Consultation
          </p>
          <h1 className="text-4xl font-black uppercase mb-4">
            Book A Business Advisor Profitability Call
          </h1>
          <p className="text-white/70">
            Select a time to speak with our dental practice advisor and analyze your practice's
            overhead savings.
          </p>
        </div>

        <form
          onSubmit={handleBooking}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-2">First Name</label>
              <input
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Last Name</label>
              <input
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Email</label>
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase mb-2">Phone</label>
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase mb-2">
              Select Available Time Slot
            </label>
            <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto">
              {slots.length > 0 ? (
                slots.map((slot) => {
                  const d = new Date(slot);
                  return (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 text-xs font-bold rounded-lg border text-left cursor-pointer ${
                        selectedSlot === slot
                          ? "bg-red-600 border-red-500 text-white"
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10"
                      }`}
                    >
                      {d.toLocaleDateString()}{" "}
                      {d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </button>
                  );
                })
              ) : (
                <p className="text-xs text-white/50 col-span-2">
                  Loading available calendar slots...
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full font-bold uppercase h-12 text-white"
            style={{ backgroundColor: ORANGE }}
          >
            {loading ? "Confirming..." : "Confirm Advisory Call"}
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
