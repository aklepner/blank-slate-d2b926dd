import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Shield, Target, ArrowRight, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";
const ORANGE_LIGHT = "#FF1A3D";

const values = [
  { label: "Kindness", icon: HeartHandshake },
  { label: "Abundance", icon: TrendingUp },
  { label: "Discipline", icon: Shield },
  { label: "Integrity", icon: Target },
];

export default function BuiltDifferent() {
  const orderUrl = useOrderUrl();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}built-different-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.78)" }} />
        <div className="relative z-10 pt-52 pb-20 px-6 max-w-6xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: ORANGE }}>How It Works</p>
          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Why DSO Pricing<br />
            <span style={{ color: ORANGE }}>Is Different</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
            Most groups give you discounts. We help you increase profit and grow your practice — including CE.
          </p>
        </div>
      </section>

      {/* CUT OVERHEAD COSTS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>The Real Opportunity</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Lower your expenses while growing your revenue
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Most dentists focus on saving $10 here and there. That's not what grows your practice.
              </p>
              <p className="text-gray-700 font-bold text-lg border-l-4 pl-5" style={{ borderColor: ORANGE }}>
                The real opportunity is choosing the right vendors, improving efficiency, and making better growth decisions.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 text-sm font-black uppercase tracking-widest mb-5">DSO Pricing helps you:</p>
              {[
                { label: "Choose the right vendors", icon: Target, desc: "Stop guessing. We've already vetted the vendors that actually move the needle." },
                { label: "Improve efficiency", icon: Shield, desc: "Better systems and smarter decisions — not just cheaper products." },
                { label: "Optimize your growth", icon: TrendingUp, desc: "Make confident growth decisions with guidance from industry experts" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-6 border-2 border-gray-100 flex items-start gap-4 bg-white hover:border-gray-200 transition-colors">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: ORANGE }}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base uppercase">{item.label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-gray-400 text-sm italic pl-2">…without having to figure it out yourself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Our Values</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-tight mb-14" style={{ fontFamily: "'Outfit', sans-serif" }}>
            What We Stand For
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div key={i} className="rounded-2xl p-8 border-2 border-white/15 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: ORANGE }}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-black text-white text-lg uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white text-xl font-black uppercase tracking-widest mb-4">Member Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Start Saving &amp;
            <br />
            Growing Now
          </h2>
          <div className="flex items-center justify-center gap-6 mb-4">
            <p className="font-black text-white" style={{ fontSize: "3rem", fontFamily: "'Outfit', sans-serif" }}>$297<span className="text-2xl font-normal opacity-70">/mo</span></p>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="font-bold text-lg uppercase tracking-wide px-10 h-14 hover:opacity-90" style={{ backgroundColor: "#FFD700", color: "#000000" }} data-testid="button-join-cta">
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up <ArrowRight className="ml-2 w-5 h-5" /></a>
            </Button>
          </div>
          <p className="text-white/90 text-lg mt-5 italic">Most members cover the cost with one change.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
