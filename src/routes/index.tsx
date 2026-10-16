import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Star, ChevronDown, ChevronUp, Shield, Zap, BarChart3, Package, Network, Lightbulb, HeartHandshake, Award, Target } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { VendorCarousel } from "@/components/dso/VendorCarousel";
import { useOrderUrl } from "@/contexts/AffiliateContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DSO Pricing — Group Purchasing Power for Dental Practices" },
      { name: "description", content: "Leverage DSO-level pricing, lower overhead, and access premier dental supplier networks without selling your practice." },
      { property: "og:title", content: "DSO Pricing — Group Purchasing Power for Dental Practices" },
      { property: "og:description", content: "Leverage DSO-level pricing, lower overhead, and access premier dental supplier networks without selling your practice." },
    ],
  }),
  component: Index,
});

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";

const stats = [
  { value: "$20K–$80K+", label: "Average Annual Savings Per Practice" },
  { value: "300+", label: "Vetted Vendor Partners Across Supplies, Labs, Equipment & Services" },
  { value: "Instant", label: "Access to Member-Only DSO Pricing Rates" },
  { value: "100%", label: "Practice Ownership Kept — No Equity Shared" },
];

const pillars = [
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: "Maximum Purchasing Power",
    desc: "We combine purchasing power across hundreds of independent practices to negotiate rates previously reserved only for top-tier DSOs.",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "100% Independent",
    desc: "You retain total control and ownership of your practice. No equity dilution, no corporate mandates, no brand changes.",
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Zero Operational Friction",
    desc: "Keep ordering directly from vendors you already trust, but at our pre-negotiated DSO-level discount rates.",
  },
];

const faqs = [
  {
    q: "How does DSO Pricing get these discounts?",
    a: "We aggregate purchasing volume across hundreds of independent practices, creating a collective leverage footprint equal to major DSO networks.",
  },
  {
    q: "Do I have to switch vendors?",
    a: "No! You can keep your existing supply chain and vendor relationships while applying our negotiated contract discounts.",
  },
  {
    q: "Is there a long-term commitment?",
    a: "No long-term locks. Our membership is month-to-month or discounted annually. Cancel anytime if you're not saving money.",
  },
  {
    q: "How quickly do savings start?",
    a: "Immediately upon onboarding. As soon as your accounts are linked to our master pricing tiers, you see the discounted prices.",
  },
];

function StarRating({ count = 5, size = 18 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-white hover:text-white/90 transition-colors"
      >
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 text-white/50" /> : <ChevronDown className="w-5 h-5 shrink-0 text-white/50" />}
      </button>
      {open && <div className="px-6 pb-5 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-3">{a}</div>}
    </div>
  );
}

function Index() {
  const orderUrl = useOrderUrl();

  return (
    <div className="min-h-screen text-white flex flex-col font-sans" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden border-b border-white/10" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <StarRating count={5} size={14} />
            <span className="text-xs font-black uppercase tracking-wider text-white/80">Group Purchasing Power for Independent Dentistry</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
            Get <span style={{ color: ORANGE }}>DSO Pricing</span><br />Without Selling Out
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Join hundreds of independent dental practice owners who save tens of thousands annually on dental supplies, labs, equipment, and practice services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="font-bold text-lg uppercase tracking-wide px-8 h-14 text-white hover:opacity-90 w-full sm:w-auto" style={{ backgroundColor: ORANGE }}>
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                Claim Your Member Rates <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-bold text-lg uppercase tracking-wide px-8 h-14 w-full sm:w-auto">
              <Link to="/calculator">Calculate Your Savings</Link>
            </Button>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
            {stats.map((s, i) => (
              <div key={i} className="p-4 text-center">
                <p className="text-3xl md:text-4xl font-black text-white mb-2" style={{ color: ORANGE }}>{s.value}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE CAROUSEL */}
      <VendorCarousel />

      {/* THREE PILLARS */}
      <section className="py-20 px-6 border-b border-white/10" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>The Advantage</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase">Why Independent Practices Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: ORANGE }}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold uppercase mb-3">{p.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
            Build A Stronger, More Scalable Dental Business.
          </h2>
          <p className="text-white/80 text-xl mb-10">On your terms. Independent. Strategic. Leveraged.</p>
          <Button asChild size="lg" className="bg-white font-bold text-lg uppercase tracking-wide px-10 h-14 text-black hover:bg-white/90">
            <a href={orderUrl} target="_blank" rel="noopener noreferrer">Sign Up $297/Mo <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Got Questions?</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
