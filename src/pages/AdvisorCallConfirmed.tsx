import { useEffect } from "react";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY2 = "#000000";
const ORANGE = "#DD042A";

export default function AdvisorCallConfirmed() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Call Booked! | DSO Pricing";
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      <section className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="max-w-xl mx-auto text-center">

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(221,4,42,0.15)", border: "2px solid rgba(221,4,42,0.3)" }}
            >
              <CalendarCheck className="w-12 h-12" style={{ color: ORANGE }} />
            </div>
          </div>

          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
            You're Confirmed
          </p>
          <h1
            className="text-[40px] sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-6"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Your Call Is <span style={{ color: ORANGE }}>Booked</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-10">
            A confirmation has been sent to your email. Get ready to see exactly where your practice can save.
          </p>

          <div className="rounded-2xl p-6 border border-white/10 text-left mb-10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            <p className="text-white font-black text-lg uppercase mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What to Expect on the Call
            </p>
            <ul className="space-y-2 text-white/55 text-base">
              <li className="flex items-start gap-2"><span style={{ color: ORANGE }} className="font-bold mt-0.5">→</span> A profitability review of your practice's biggest overhead costs</li>
              <li className="flex items-start gap-2"><span style={{ color: ORANGE }} className="font-bold mt-0.5">→</span> A look at how DSO-level pricing applies to your practice</li>
              <li className="flex items-start gap-2"><span style={{ color: ORANGE }} className="font-bold mt-0.5">→</span> Answers to any questions about membership and fit</li>
            </ul>
          </div>

          <Button asChild size="lg" className="text-white font-bold uppercase tracking-wide h-12 px-8 text-sm" style={{ backgroundColor: ORANGE }}>
            <Link href="/">
              Back to Home <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <p className="text-white/30 text-sm mt-8">
            Need to reschedule? Email us at{" "}
            <a href="mailto:support@dsopricing.com" className="underline underline-offset-2 hover:text-white/50 transition-colors">
              support@dsopricing.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
