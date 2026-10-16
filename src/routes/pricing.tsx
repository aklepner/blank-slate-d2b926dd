import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Plans — DSO Pricing" },
      {
        name: "description",
        content:
          "Simple, flat-rate $297/month membership to unlock DSO-level purchasing discounts for your dental practice.",
      },
      { property: "og:title", content: "Pricing & Plans — DSO Pricing" },
      {
        property: "og:description",
        content:
          "Simple, flat-rate $297/month membership to unlock DSO-level purchasing discounts for your dental practice.",
      },
    ],
  }),
  component: PricingPage,
});

const ORANGE = "#DD042A";

const features = [
  "DSO Master Contract Pricing across 300+ Vendors",
  "Supplies, Dental Labs, Equipment, Software & Services",
  "No Contract & No Long-Term Commitments",
  "100% Practice Ownership Retained",
  "Dedicated Member Success Manager",
  "Includes Free Savings Audit & Analysis",
];

function PricingPage() {
  const orderUrl = useOrderUrl();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />

      <section className="pt-44 pb-20 px-6 max-w-5xl mx-auto w-full text-center">
        <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
          Transparent Membership
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">
          One Low Monthly Fee.
          <br />
          Unlimited Practice Savings.
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-16">
          Most dental practices save more on their very first supply order than the cost of an
          entire year of membership.
        </p>

        {/* PRICING CARD */}
        <div className="max-w-xl mx-auto rounded-3xl border-2 border-white/20 bg-white/5 p-8 md:p-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 text-white font-black text-xs uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
            Popular
          </div>

          <p className="text-sm font-black uppercase tracking-widest text-white/60 mb-2">
            Practice Membership
          </p>
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-5xl md:text-6xl font-black text-white">$297</span>
            <span className="text-xl text-white/60 font-bold">/ month</span>
          </div>

          <p className="text-white/80 text-sm mb-8 leading-relaxed">
            Full access to our entire GPO vendor roster, master pricing sheets, and member support
            team for a single dental practice location.
          </p>

          <div className="space-y-4 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: ORANGE }}
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-semibold text-white/90">{f}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="w-full font-black text-lg uppercase tracking-wider h-14 text-white"
            style={{ backgroundColor: ORANGE }}
          >
            <a href={orderUrl} target="_blank" rel="noopener noreferrer">
              Join DSO Pricing Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>

          <p className="text-center text-xs text-white/50 mt-4">
            Cancel anytime. No setup fees or hidden costs.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
