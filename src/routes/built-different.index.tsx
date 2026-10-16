import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Shield, Target, ArrowRight, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/built-different/")({
  head: () => ({
    meta: [
      { title: "Why DSO Pricing Is Different — DSO Pricing" },
      {
        name: "description",
        content:
          "Most groups give you discounts. We help you increase profit, grow your practice, and access curated continuing education.",
      },
      { property: "og:title", content: "Why DSO Pricing Is Different — DSO Pricing" },
      {
        property: "og:description",
        content:
          "Most groups give you discounts. We help you increase profit, grow your practice, and access curated continuing education.",
      },
    ],
  }),
  component: BuiltDifferentPage,
});

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";

const values = [
  { label: "Kindness", icon: HeartHandshake },
  { label: "Abundance", icon: TrendingUp },
  { label: "Discipline", icon: Shield },
  { label: "Integrity", icon: Target },
];

function BuiltDifferentPage() {
  const orderUrl = useOrderUrl();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />

      {/* HERO */}
      <section
        className="relative overflow-hidden pt-44 pb-24 px-6 border-b border-white/10"
        style={{
          backgroundImage: `url(https://vibe.filesafe.space/1792153353040923508/assets/66ee1d92-24e5-45cb-aecc-0896ba5ee383.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,10,10,0.85)" }} />
        <div className="relative z-10 max-w-5xl mx-auto text-left">
          <p
            className="text-sm font-black uppercase tracking-widest mb-4"
            style={{ color: ORANGE }}
          >
            How It Works
          </p>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why DSO Pricing <br />
            <span style={{ color: ORANGE }}>Is Different</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">
            Most groups give you discounts. We help you increase profit and grow your dental
            practice — on your terms, with zero equity dilution.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="text-white font-bold text-base uppercase tracking-wide h-14 px-8"
              style={{ backgroundColor: ORANGE }}
            >
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                Claim Member Rates <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 font-bold uppercase h-14 px-8"
            >
              <Link to="/profitability-call">Schedule A Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 border-b border-white/10" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <p
            className="text-xs font-black uppercase tracking-widest mb-3 text-center"
            style={{ color: ORANGE }}
          >
            Our Foundational Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-16">
            Built On Four Unshakable Pillars
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-8 border border-white/10 bg-white/5 text-center flex flex-col items-center"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white mb-2">{v.label}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Always putting independent dentistry first through open transparency and
                    collective bargaining.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black uppercase mb-4">
              More Than Just A Buying Group
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base">
              A comprehensive platform designed to elevate your EBITDA and streamline clinical
              procurement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
              <p
                className="text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: ORANGE }}
              >
                Procurement
              </p>
              <h3 className="text-xl font-bold uppercase mb-4">300+ Pre-Negotiated Contracts</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Direct vendor accounts with top suppliers, clear aligner labs, CAD/CAM milling
                centers, and practice equipment manufacturers.
              </p>
            </div>
            <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
              <p
                className="text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: ORANGE }}
              >
                Education
              </p>
              <h3 className="text-xl font-bold uppercase mb-4">Masterminds & Mentorship</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Access video sessions and keynotes from operators who have built multi-million
                dollar practice groups and independent DSO models.
              </p>
            </div>
            <div className="rounded-2xl p-8 border border-white/10 bg-white/5">
              <p
                className="text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: ORANGE }}
              >
                Simplicity
              </p>
              <h3 className="text-xl font-bold uppercase mb-4">Centralized Procurement</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Manage vendor relationships, access contract discount codes, and submit procurement
                orders through one unified member portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
