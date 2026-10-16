import { useEffect } from "react";
import { CalendarCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY2 = "#000000";
const ORANGE = "#DD042A";

export default function OnboardingCallConfirmed() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Onboarding Call Booked! | DSO Pricing";
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />
      <section className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">

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
            You're All Set
          </p>
          <h1
            className="md:text-6xl font-black text-white uppercase mb-6 text-[40px]"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Thank You for Booking<br />Your <span style={{ color: ORANGE }}>Onboarding Call</span>
          </h1>
          <p className="text-white/60 mb-12 text-[16px]">A confirmation email with your appointment details is on its way. You'll also receive a calendar invite you can add directly to your calendar.

          Can't find the confirmation email? 

          Check your spam or junk folder and look for an email from DSO Pricing. If it's not there, reach out to us and we'll get it sorted.

          support@dsopricing.com</p>

          {/* What to expect */}
          <div className="rounded-2xl p-8 border border-white/10 text-left mb-10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            <p className="text-white font-black text-lg uppercase mb-5 tracking-wide" style={{ fontFamily: "'Outfit', sans-serif" }}>
              What Happens on Your Call
            </p>
            <ul className="space-y-4">
              {[
                "A full walkthrough of your member benefits and how to use the platform",
                "Introduction to your top vendors — already negotiated at DSO-level pricing",
                "A look at where your practice can start saving right away",
                "Answers to any questions you have before you start ordering",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: ORANGE }} />
                  <span className="text-white/60 text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Button asChild size="lg" className="text-white font-black uppercase tracking-widest h-14 px-10 text-sm" style={{ backgroundColor: ORANGE }}>
            <Link href="/">
              Back to Home <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <p className="text-white/30 text-sm mt-8">
            Need to reschedule? Email us at{" "}
            <a href="mailto:hello@dsopricing.com" className="underline underline-offset-2 hover:text-white/50 transition-colors">
              hello@dsopricing.com
            </a>
          </p>

        </div>
      </section>
      <Footer />
    </div>
  );
}
