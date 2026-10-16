import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Savings Calculator — DSO Pricing" },
      { name: "description", content: "Calculate your practice's estimated annual savings with DSO Pricing GPO rates." },
      { property: "og:title", content: "Savings Calculator — DSO Pricing" },
      { property: "og:description", content: "Calculate your practice's estimated annual savings with DSO Pricing GPO rates." },
    ],
  }),
  component: CalculatorPage,
});

const ORANGE = "#DD042A";

function CalculatorPage() {
  const [supplySpend, setSupplySpend] = useState<number>(120000);
  const [labSpend, setLabSpend] = useState<number>(80000);

  const supplySavings = Math.round(supplySpend * 0.22);
  const labSavings = Math.round(labSpend * 0.15);
  const totalSavings = supplySavings + labSavings;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />

      <section className="pt-44 pb-20 px-6 max-w-4xl mx-auto w-full text-center">
        <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Practice Profitability</p>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">Estimate Your Savings</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12">
          Adjust your practice's annual spend below to see how much overhead you can save each year.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left space-y-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-white/80">
              Annual Dental Supply Spend: ${supplySpend.toLocaleString()}
            </label>
            <input
              type="range"
              min="20000"
              max="500000"
              step="5000"
              value={supplySpend}
              onChange={(e) => setSupplySpend(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-white/80">
              Annual Lab Expense: ${labSpend.toLocaleString()}
            </label>
            <input
              type="range"
              min="10000"
              max="300000"
              step="5000"
              value={labSpend}
              onChange={(e) => setLabSpend(Number(e.target.value))}
              className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
          </div>

          <div className="pt-6 border-t border-white/10 text-center bg-white/5 p-6 rounded-2xl">
            <p className="text-sm uppercase tracking-widest text-white/60 font-bold mb-1">Estimated Annual Practice Savings</p>
            <p className="text-5xl font-black text-red-500 mb-2">${totalSavings.toLocaleString()}</p>
            <p className="text-xs text-white/50">Based on average member savings of 22% on supplies and 15% on lab fees.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
