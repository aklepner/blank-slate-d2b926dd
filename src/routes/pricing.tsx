import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  DollarSign,
  Users,
  Package,
  Network,
  HeartHandshake,
} from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Members Pricing — DSO Pricing" },
      {
        name: "description",
        content:
          "Unlock group purchasing power for $297/mo. DSO master contract pricing across supplies, labs, equipment, and practice services.",
      },
      { property: "og:title", content: "Members Pricing — DSO Pricing" },
      {
        property: "og:description",
        content:
          "Unlock group purchasing power for $297/mo. DSO master contract pricing across supplies, labs, equipment, and practice services.",
      },
    ],
  }),
  component: PricingPage,
});

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";

function StarRating({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} fill="#fbbf24" color="#fbbf24" width={size} height={size} />
      ))}
    </div>
  );
}

const membershipBenefits = [
  { label: "Big group buying power with savings of up to 20%", icon: DollarSign },
  { label: "Exclusive offers, bonuses, and reduced fees", icon: HeartHandshake },
  { label: "Access to trusted service providers, consultants, and coaches", icon: Users },
  { label: "Consolidate all your procurement processes and vendors in one place", icon: Package },
  { label: "A centralized way to source products, services, and growth support", icon: Network },
];

function PricingPage() {
  const orderUrl = useOrderUrl();

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />

      {/* HERO */}
      <section
        className="pt-40 pb-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="flex justify-center mb-6">
            <StarRating count={5} size={20} />
          </div>
          <h1
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Members
            <br />
            <span style={{ color: ORANGE }}>Pricing</span>
          </h1>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="text-white font-bold text-base uppercase tracking-wide h-14 px-10 hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                Lock In Your Savings
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRICE CARD */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-xl mx-auto">
          <div
            className="rounded-2xl border-2 border-white/15 p-8 sm:p-12 text-center mb-8"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-2">
              Monthly Membership
            </p>
            <div className="flex items-center justify-center gap-1 mb-6">
              <span className="text-5xl sm:text-7xl font-black text-white">$297</span>
              <span className="text-lg text-white/50 font-bold self-end mb-2">/month</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Full access to DSO-level pricing across 300+ suppliers, labs, equipment manufacturers,
              and dental practice services.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full text-white font-black text-lg uppercase tracking-wider h-14 mb-4 hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                Sign Up Now <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="text-xs text-white/40">No long-term contracts. Cancel anytime.</p>
          </div>

          {/* REAL WORLD MATH CARD */}
          <div
            className="rounded-2xl border-2 border-white/15 p-8 sm:p-10 mb-8"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="space-y-4 mb-8">
              {[
                {
                  label: "Save $300 on Every Clear Aligner Case",
                  detail: "At 4 aligners/month = $1,200/month saved",
                },
                { label: "Save $50 per crown", detail: "At 30 crowns/month = $1,500/month saved" },
                { label: "Subtract your Membership: $297/mo", detail: null },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl border border-white/10"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                >
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: ORANGE }} />
                  <div>
                    <p className="text-white font-bold text-lg">{row.label}</p>
                    {row.detail && <p className="text-white/50 text-sm mt-0.5">{row.detail}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-6 border-t border-white/10">
              <p className="text-white/50 text-base mb-2">That's</p>
              <p
                className="font-black text-[38px] sm:text-[56px] leading-none whitespace-nowrap mb-4"
                style={{ fontFamily: "'Outfit', sans-serif", color: ORANGE }}
              >
                $2,400/month
              </p>
              <p className="font-black text-white uppercase text-2xl tracking-wide">
                BACK IN YOUR PRACTICE
              </p>
            </div>

            <div
              className="mt-6 rounded-xl p-6 text-center border border-white/10"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <p className="text-white font-black text-lg sm:text-xl uppercase mb-1">
                If two decisions save you an extra $2,400/month
              </p>
              <p className="text-xl font-bold text-amber-400">
                What happens when you optimize the rest?
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="text-white font-black uppercase tracking-widest h-14 px-12 hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                Unlock your savings <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 border-t border-white/10" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12">
            Everything Included With Membership
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {membershipBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/5"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white/80 text-sm font-semibold leading-relaxed pt-2">
                    {b.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
