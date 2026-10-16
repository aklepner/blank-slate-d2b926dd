import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, HeartHandshake, TrendingUp, Shield, Target } from "lucide-react";

export const Route = createFileRoute("/built-different/")({
  head: () => ({
    meta: [
      { title: "How It Works — DSO Pricing" },
      { name: "description", content: "Learn why DSO Pricing is different: lowering overhead, improving practice profitability, and maintaining full independence." },
      { property: "og:title", content: "How It Works — DSO Pricing" },
      { property: "og:description", content: "Learn why DSO Pricing is different: lowering overhead, improving practice profitability, and maintaining full independence." },
    ],
  }),
  component: BuiltDifferent,
});

const ORANGE = "#DD042A";

const values = [
  { label: "Kindness", icon: HeartHandshake },
  { label: "Abundance", icon: TrendingUp },
  { label: "Discipline", icon: Shield },
  { label: "Integrity", icon: Target },
];

function BuiltDifferent() {
  const orderUrl = useOrderUrl();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-44 pb-20 px-6 max-w-6xl mx-auto w-full">
        <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>How It Works</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
          Why DSO Pricing<br />
          <span style={{ color: ORANGE }}>Is Built Different</span>
        </h1>
        <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
          Most buying groups only give you tiny supply discounts. We provide true DSO-level master contracts across supplies, equipment, software, labs, and merchant services.
        </p>
      </section>

      {/* OVERHEAD SECTION */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Real Opportunity</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
              Lower your expenses while growing your revenue
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Dental overhead keeps rising while insurance reimbursements shrink. DSO Pricing gives independent practices the exact purchasing power that mega-chains use to squeeze out higher profit margins.
            </p>
            <div className="space-y-3 font-bold text-gray-900">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600 w-5 h-5 shrink-0" />
                <span>Save 15% to 30%+ on daily clinical supplies</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600 w-5 h-5 shrink-0" />
                <span>Negotiated laboratory rates with premier partners</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-600 w-5 h-5 shrink-0" />
                <span>Reduced credit card processing and merchant fees</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-black uppercase mb-4">Independent &amp; In Control</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              You retain 100% equity in your practice. You order directly from your existing vendors—no mandated formulary or third-party middleman portal required.
            </p>
            <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 text-base uppercase tracking-wider">
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">Get Started Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Our Foundation</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">Core Principles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: ORANGE }}>
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-black text-lg uppercase tracking-wider">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6">Start Saving &amp; Growing</h2>
          <p className="text-white/80 text-xl mb-8">Join the group purchasing network designed exclusively for independent dentists.</p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-black text-lg uppercase tracking-wide px-10 h-14">
            <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up $297/mo <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
