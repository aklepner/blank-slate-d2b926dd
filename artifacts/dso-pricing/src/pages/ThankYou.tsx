import { useEffect } from "react";
import { CheckCircle2, Mail, CalendarCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";

export default function ThankYou() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Thank You | DSO Pricing";
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="flex-1 flex items-center justify-center py-32 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-2xl mx-auto text-center">

          {/* Check icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(221,4,42,0.15)", border: "2px solid rgba(221,4,42,0.3)" }}>
              <CheckCircle2 className="w-12 h-12" style={{ color: ORANGE }} />
            </div>
          </div>

          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>You're In</p>
          <h1 className="text-[40px] sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-6" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Thank You For<br />
            <span style={{ color: ORANGE }}>Signing Up</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-12">
            Welcome to DSO Pricing. You've taken the first step toward getting DSO-level pricing — without becoming a DSO.
          </p>

          {/* Steps */}
          <div className="space-y-4 mb-12 text-left">
            <div className="flex items-start gap-5 rounded-2xl p-6 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: ORANGE }}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-black text-lg uppercase mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Check Your Inbox</p>
                <p className="text-white/55 text-base leading-relaxed">
                  You'll receive a welcome email shortly with your next steps and everything you need to get started. If you do not see the email within the next ten minutes, please check your SPAM folder.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 rounded-2xl p-6 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: ORANGE }}>
                <CalendarCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-black text-lg uppercase mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>Book Your Onboarding Call</p>
                <p className="text-white/55 text-base leading-relaxed mb-4">
                  Schedule your onboarding call to get set up, meet your team, and start unlocking savings right away.
                </p>
                <Button asChild size="lg" className="text-white font-bold uppercase tracking-wide h-12 px-8 text-sm" style={{ backgroundColor: ORANGE }}>
                  <Link href="/onboarding-call">
                    Book Your Onboarding Call <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <p className="text-white/30 text-sm">
            Questions? Reach us anytime at{" "}
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
