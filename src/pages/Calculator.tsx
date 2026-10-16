import { useState, useEffect } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0F0F0F";
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
  { id: "alginate", name: "Alginate Substitute", unit: "Per unit", dsoPrice: 42.14, defaultQty: 3, defaultPrice: 98 },
  { id: "collagen", name: "Surgical Esthetics Collagen Plugs", unit: "Per unit", dsoPrice: 94.30, defaultQty: 3, defaultPrice: 129 },
  { id: "pouches", name: 'Sterilization Pouches 3.5"x9"', unit: "Per box", dsoPrice: 4.81, defaultQty: 5, defaultPrice: 13 },
  { id: "coldsterile", name: "Cold Sterile Gallon", unit: "Per gallon", dsoPrice: 17.60, defaultQty: 2, defaultPrice: 40 },
  { id: "tartar", name: "Tartar & Stain Remover", unit: "Per unit", dsoPrice: 12.42, defaultQty: 2, defaultPrice: 23 },
  { id: "luxatemp", name: "DMG Luxatemp", unit: "Per unit", dsoPrice: 250.80, defaultQty: 2, defaultPrice: 330 },
  { id: "mixingtips", name: "Hexa Aqua Mixing Tips", unit: "Per box", dsoPrice: 22.50, defaultQty: 4, defaultPrice: 45 },
  { id: "omnichroma", name: "Tokuyama Omni Chroma PLTs", unit: "Per unit", dsoPrice: 97.15, defaultQty: 2, defaultPrice: 145 },
  { id: "syringetips", name: "House Brand Syringe Tips", unit: "Per box", dsoPrice: 7.70, defaultQty: 5, defaultPrice: 35 },
  { id: "gloves", name: "3D Dental Nitrile Gloves (300ct)", unit: "Per box", dsoPrice: 11.66, defaultQty: 4, defaultPrice: 22 },
];

interface RowState { qty: string; price: string; }

function getDefaults(): Record<string, RowState> {
  const d: Record<string, RowState> = {};
  PRODUCTS.forEach((p) => { d[p.id] = { qty: String(p.defaultQty), price: String(p.defaultPrice) }; });
  return d;
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Calculator() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Cost Savings Calculator | DSO Pricing";
    return () => { document.title = prev; };
  }, []);

  const [rows, setRows] = useState<Record<string, RowState>>(getDefaults());

  function update(id: string, field: "qty" | "price", value: string) {
    setRows((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  }

  function reset() { setRows(getDefaults()); }

  function rowFor(p: Product): RowState {
    return rows[p.id] ?? { qty: String(p.defaultQty), price: String(p.defaultPrice) };
  }

  const calcs = PRODUCTS.map((p) => {
    const row = rowFor(p);
    const qty = Math.max(0, parseFloat(row.qty) || 0);
    const price = Math.max(0, parseFloat(row.price) || 0);
    const savingsPerUnit = Math.max(0, price - p.dsoPrice);
    const pctSavings = price > 0 ? savingsPerUnit / price : 0;
    const annualized = savingsPerUnit * qty * 12;
    return { qty, price, savingsPerUnit, pctSavings, annualized };
  });

  const totalMonthly = calcs.reduce((sum, c) => sum + c.savingsPerUnit * c.qty, 0);
  const totalAnnual = calcs.reduce((sum, c) => sum + c.annualized, 0);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-44 pb-10 px-6" style={{ backgroundColor: "#000000" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>See Your Savings</p>
          <h1 className="text-[40px] sm:text-5xl md:text-7xl font-black text-white uppercase leading-none mb-4" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Cost Savings<br /><span style={{ color: ORANGE }}>Calculator</span>
          </h1>
          <p className="text-white/50 text-base max-w-xl">
            Enter your monthly quantities and what you currently pay. See your savings instantly.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="flex-1 py-10 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col xl:flex-row gap-8 items-start">

            {/* PRODUCT CARDS */}
            <div className="flex-1 w-full space-y-3">
              {/* Column headers */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 pb-2">
                <div className="col-span-4">
                  <p className="text-xs font-black uppercase tracking-widest text-white/30">Product</p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-white/30">Qty / Month</p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-white/30">Your Price</p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-white/30">Monthly Savings</p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-xs font-black uppercase tracking-widest text-white/30">Annual Savings</p>
                </div>
              </div>

              {PRODUCTS.map((product, i) => {
                const c = calcs[i];
                const hasSavings = c.savingsPerUnit > 0;
                return (
                  <div
                    key={product.id}
                    className="rounded-xl border transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      borderColor: hasSavings ? "rgba(221,4,42,0.25)" : "rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* DESKTOP layout */}
                    <div className="hidden md:grid md:grid-cols-12 gap-4 items-center px-6 py-5">
                      <div className="col-span-4">
                        <p className="font-black text-white text-sm uppercase tracking-wide leading-snug">{product.name}</p>
                        <p className="text-white/35 text-xs mt-0.5 font-medium">{product.unit}</p>
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <input
                          type="number" min="0"
                          value={rowFor(product).qty}
                          onChange={(e) => update(product.id, "qty", e.target.value)}
                          className="w-20 h-11 text-center rounded-lg text-white font-black text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                          style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.12)" }}
                        />
                      </div>
                      <div className="col-span-2 flex justify-center items-center gap-1">
                        <span className="text-white/40 text-sm font-bold">$</span>
                        <input
                          type="number" min="0" step="0.01"
                          value={rowFor(product).price}
                          onChange={(e) => update(product.id, "price", e.target.value)}
                          className="w-24 h-11 text-center rounded-lg text-white font-black text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                          style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.12)" }}
                        />
                      </div>
                      <div className="col-span-2 text-center">
                        <p className={`font-black text-lg ${hasSavings ? "text-white" : "text-white/25"}`}>{fmt(c.savingsPerUnit * c.qty)}</p>
                        <p className="text-xs font-bold mt-0.5" style={hasSavings ? { color: ORANGE } : { color: "rgba(255,255,255,0.2)" }}>{Math.round(c.pctSavings * 100)}% savings</p>
                      </div>
                      <div className="col-span-2 text-center">
                        <p className={`font-black text-lg ${hasSavings ? "" : "text-white/20"}`} style={hasSavings ? { color: ORANGE } : {}}>{fmt(c.annualized)}</p>
                      </div>
                    </div>

                    {/* MOBILE layout */}
                    <div className="md:hidden px-4 py-4">
                      <div className="mb-3">
                        <p className="font-black text-white text-sm uppercase tracking-wide leading-snug">{product.name}</p>
                        <p className="text-white/35 text-xs mt-0.5">{product.unit}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1.5">Qty / Mo</p>
                          <input
                            type="number" min="0"
                            value={rowFor(product).qty}
                            onChange={(e) => update(product.id, "qty", e.target.value)}
                            className="w-20 h-10 text-center rounded-lg text-white font-black text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                            style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.12)" }}
                          />
                        </div>
                        <div>
                          <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1.5">Your Price</p>
                          <div className="flex items-center gap-1">
                            <span className="text-white/40 text-sm font-bold">$</span>
                            <input
                              type="number" min="0" step="0.01"
                              value={rowFor(product).price}
                              onChange={(e) => update(product.id, "price", e.target.value)}
                              className="w-20 h-10 text-center rounded-lg text-white font-black text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                              style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.12)" }}
                            />
                          </div>
                        </div>
                        <div className="rounded-lg px-3 py-2" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                          <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">Monthly</p>
                          <p className={`font-black text-base ${hasSavings ? "text-white" : "text-white/25"}`}>{fmt(c.savingsPerUnit * c.qty)}</p>
                          <p className="text-xs font-bold" style={hasSavings ? { color: ORANGE } : { color: "rgba(255,255,255,0.2)" }}>{Math.round(c.pctSavings * 100)}% off</p>
                        </div>
                        <div className="rounded-lg px-3 py-2" style={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                          <p className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">Annual</p>
                          <p className={`font-black text-base ${hasSavings ? "" : "text-white/20"}`} style={hasSavings ? { color: ORANGE } : {}}>{fmt(c.annualized)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Reset */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={reset}
                  className="text-white/40 hover:text-white/70 text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  ↺ Reset to defaults
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-white/25 text-xs leading-relaxed italic pt-4 border-t border-white/10">
                * This estimate represents a limited sample of potential savings and is provided for illustrative purposes only. Actual savings will vary and are not guaranteed. Results depend on vendor usage, purchasing volume, participation, and other factors. Pricing and discounts are subject to change and may vary by vendor.
              </p>
            </div>

            {/* SAVINGS SUMMARY */}
            <div className="xl:w-64 w-full shrink-0">
              <div className="rounded-2xl p-7 sticky top-36" style={{ backgroundColor: "#000000", border: `2px solid ${ORANGE}` }}>
                <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-6">Savings Summary</p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: ORANGE }}>Total Monthly Savings</p>
                  <p className="font-black text-white leading-none" style={{ fontSize: "2.25rem" }}>
                    {fmt(totalMonthly)}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: ORANGE }}>Total Annual Savings</p>
                  <p className="font-black text-white leading-none" style={{ fontSize: "2.25rem" }}>
                    {fmt(totalAnnual)}
                  </p>
                </div>

                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Imagine the savings across your entire supply list.
                </p>

                <Link
                  href="/profitability-call"
                  className="block w-full text-center text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl transition-opacity hover:opacity-80"
                  style={{ backgroundColor: ORANGE }}
                >
                  Book a Call
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
