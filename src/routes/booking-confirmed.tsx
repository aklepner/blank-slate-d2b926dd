import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/booking-confirmed")({
  head: () => ({
    meta: [
      { title: "Booking Confirmed — DSO Pricing" },
      { name: "description", content: "Your profitability advisory call is confirmed." },
    ],
  }),
  component: BookingConfirmedPage,
});

function BookingConfirmedPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <div className="pt-44 pb-20 px-6 max-w-2xl mx-auto w-full text-center my-auto">
        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-black uppercase mb-4">You're All Set!</h1>
        <p className="text-white/80 text-lg leading-relaxed mb-6">
          Your profitability consultation call with a DSO Pricing advisor has been scheduled. A confirmation email and calendar invite have been sent to your inbox.
        </p>
      </div>
      <Footer />
    </div>
  );
}
