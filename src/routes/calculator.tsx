import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Cost Savings Calculator — DSO Pricing" },
      {
        name: "description",
        content:
          "Calculate your dental practice's estimated annual and monthly savings with DSO Pricing member pricing.",
      },
      { property: "og:title", content: "Cost Savings Calculator — DSO Pricing" },
      {
        property: "og:description",
        content:
          "Calculate your dental practice's estimated annual and monthly savings with DSO Pricing member pricing.",
      },
    ],
  }),
  component: CalculatorPage,
});

const ORANGE = "#DD042A";

interface Product {
  id: string;
  name: string;
  unit: string;
  dsoPrice: number;
  defaultQty: number;
  defaultPrice: number;
}

const PRODUCTS: Product[] = [
  {
    id: "alginate",
    name: "Alginate Substitute",
    unit: "Per unit",
    dsoPrice: 42.14,
    defaultQty: 3,
    defaultPrice: 98,
  },
  {
    id: "collagen",
    name: "Surgical Esthetics Collagen Plugs",
    unit: "Per unit",
    dsoPrice: 94.3,
    defaultQty: 3,
    defaultPrice: 129,
  },
  {
    id: "pouches",
    name: 'Sterilization Pouches 3.5"x9"',
    unit: "Per box",
    dsoPrice: 4.81,
    defaultQty: 5,
    defaultPrice: 13,
  },
  {
    id: "coldsterile",
    name: "Cold Sterile Gallon",
    unit: "Per gallon",
    dsoPrice: 17.6,
    defaultQty: 2,
    defaultPrice: 40,
  },
  {
    id: "tartar",
    name: "Tartar & Stain Remover",
    unit: "Per unit",
    dsoPrice: 12.42,
    defaultQty: 2,
    defaultPrice: 23,
  },
  {
    id: "luxatemp",
    name: "DMG Luxatemp",
    unit: "Per unit",
    dsoPrice: 250.8,
    defaultQty: 2,
    defaultPrice: 330,
  },
  {
    id: "mixingtips",
    name: "Hexa Aqua Mixing Tips",
    unit: "Per box",
    dsoPrice: 22.5,
    defaultQty: 4,
    defaultPrice: 45,
  },
  {
    id: "omnichroma",
    name: "Tokuyama Omni Chroma PLTs",
    unit: "Per unit",
    dsoPrice: 97.15,
    defaultQty: 2,
    defaultPrice: 145,
  },
  {
    id: "syringetips",
    name: "House Brand Syringe Tips",
    unit: "Per box",
    dsoPrice: 7.7,
    defaultQty: 5,
    defaultPrice: 35,
  },
  {
    id: "gloves",
    name: "3D Dental Nitrile Gloves (300ct)",
    unit: "Per box",
    dsoPrice: 11.66,
    defaultQty: 4,
    defaultPrice: 22,
  },
];

interface RowState {
  qty: string;
  price: string;
}

function getDefaults(): Record<string, RowState> {
  const d: Record<string, RowState> = {};
  PRODUCTS.forEach((p) => {
    d[p.id] = { qty: String(p.defaultQty), price: String(p.defaultPrice) };
  });
  return d;
}

function fmt(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function CalculatorPage() {
  const [rows, setRows] = useState<Record<string, RowState>>(getDefaults());

  function update(id: string, field: "qty" | "price", value: string) {
    setRows((prev) => {
      const current = prev[id] || { qty: "0", price: "0" };
      return {
        ...prev,
        [id]: {
          qty: field === "qty" ? value : current.qty,
          price: field === "price" ? value : current.price,
        },
      };
    });
  }

  function reset() {
    setRows(getDefaults());
  }

  function rowFor(p: Product) {
    const r = rows[p.id] || { qty: "0", price: "0" };
    const q = Math.max(0, parseFloat(r.qty) || 0);
    const pr = Math.max(0, parseFloat(r.price) || 0);
    const retailTotal = q * pr;
    const dsoTotal = q * p.dsoPrice;
    const monthlySav = Math.max(0, retailTotal - dsoTotal);
    const annualSav = monthlySav * 12;
    return { q, pr, retailTotal, dsoTotal, monthlySav, annualSav };
  }

  let totalMonthly = 0;
  PRODUCTS.forEach((p) => {
    totalMonthly += rowFor(p).monthlySav;
  });
  const totalAnnual = totalMonthly * 12;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <p
            className="text-xs font-black uppercase tracking-widest mb-3"
            style={{ color: ORANGE }}
          >
            Interactive Comparison
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">
            Cost Savings <span style={{ color: ORANGE }}>Calculator</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Compare your current supply prices against DSO Pricing contracted rates and see your
            instant estimated savings.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* CALCULATOR TABLE */}
          <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-white/10 text-white/50 uppercase text-xs font-black tracking-wider">
                  <th className="pb-4">Product Name</th>
                  <th className="pb-4 w-24">Monthly Qty</th>
                  <th className="pb-4 w-28">Current Price</th>
                  <th className="pb-4 w-28">DSO Price</th>
                  <th className="pb-4 w-32 text-right">Monthly Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {PRODUCTS.map((p) => {
                  const r = rowFor(p);
                  const state = rows[p.id] || { qty: "", price: "" };
                  return (
                    <tr key={p.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 pr-4">
                        <div className="font-bold text-white">{p.name}</div>
                        <div className="text-xs text-white/40">{p.unit}</div>
                      </td>
                      <td className="py-4 pr-4">
                        <input
                          type="number"
                          value={state.qty}
                          onChange={(e) => update(p.id, "qty", e.target.value)}
                          className="w-16 bg-white/10 border border-white/20 rounded px-2 py-1 text-white font-bold text-center focus:outline-none focus:border-red-500"
                        />
                      </td>
                      <td className="py-4 pr-4">
                        <div className="relative flex items-center">
                          <span className="text-white/40 text-xs mr-1">$</span>
                          <input
                            type="number"
                            step="0.01"
                            value={state.price}
                            onChange={(e) => update(p.id, "price", e.target.value)}
                            className="w-20 bg-white/10 border border-white/20 rounded px-2 py-1 text-white font-bold focus:outline-none focus:border-red-500"
                          />
                        </div>
                      </td>
                      <td className="py-4 pr-4 font-bold text-white/80">{fmt(p.dsoPrice)}</td>
                      <td className="py-4 text-right font-black text-red-500">
                        {fmt(r.monthlySav)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={reset}
                className="text-white/40 hover:text-white/80 text-xs font-black uppercase tracking-widest transition-colors cursor-pointer"
              >
                ↺ Reset to defaults
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4 italic">
              * Sample of potential member savings. Actual practice savings vary by volume and
              vendor choices.
            </p>
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="xl:w-80 w-full shrink-0">
            <div
              className="rounded-2xl p-8 sticky top-36"
              style={{ backgroundColor: "#000000", border: `2px solid ${ORANGE}` }}
            >
              <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-6">
                Savings Summary
              </p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <p
                  className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: ORANGE }}
                >
                  Total Monthly Savings
                </p>
                <p className="text-4xl font-black text-white">{fmt(totalMonthly)}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-white/10">
                <p
                  className="text-xs font-black uppercase tracking-widest mb-2"
                  style={{ color: ORANGE }}
                >
                  Total Annual Savings
                </p>
                <p className="text-4xl font-black text-white">{fmt(totalAnnual)}</p>
              </div>

              <p className="text-white/50 text-sm mb-6">
                Ready to review your practice's full supply catalog for hidden savings?
              </p>

              <Link
                to="/profitability-call"
                className="block w-full text-center text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl transition-opacity hover:opacity-90"
                style={{ backgroundColor: ORANGE }}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
