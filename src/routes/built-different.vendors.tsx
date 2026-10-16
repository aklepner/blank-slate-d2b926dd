import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { useState } from "react";
import { Search, ExternalLink, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/built-different/vendors")({
  head: () => ({
    meta: [
      { title: "Vendor Network — DSO Pricing" },
      {
        name: "description",
        content:
          "Browse DSO Pricing's vetted partner network across dental supplies, labs, equipment, software, and services.",
      },
      { property: "og:title", content: "Vendor Network — DSO Pricing" },
      {
        property: "og:description",
        content:
          "Browse DSO Pricing's vetted partner network across dental supplies, labs, equipment, software, and services.",
      },
    ],
  }),
  component: VendorsPage,
});

const ORANGE = "#DD042A";

interface VendorItem {
  id: string;
  name: string;
  category: string;
  description: string;
  highlight: string;
}

const VENDORS: VendorItem[] = [
  {
    id: "henry-schein",
    name: "Henry Schein Dental",
    category: "Dental Supplies",
    description: "Full-line dental merchandise, clinical supplies, and practice equipment.",
    highlight: "Tier 1 DSO pricing on all catalog consumables",
  },
  {
    id: "benco-dental",
    name: "Benco Dental",
    category: "Dental Supplies",
    description: "America's largest privately owned dental distributor with national distribution.",
    highlight: "Exclusive GPO bulk discounts & rapid delivery",
  },
  {
    id: "patterson-dental",
    name: "Patterson Dental",
    category: "Dental Supplies",
    description: "Comprehensive equipment, technology, and clinical consumables.",
    highlight: "Pre-negotiated core list pricing",
  },
  {
    id: "brasseler",
    name: "Brasseler USA",
    category: "Clinical Instrumentation",
    description: "Premium dental burs, endodontic files, handpieces, and polishers.",
    highlight: "Up to 25% off direct manufacturer rates",
  },
  {
    id: "align-tech",
    name: "Align Technology / Clear Aligners",
    category: "Orthodontics & Labs",
    description: "Clear aligner systems and intraoral scanning solutions.",
    highlight: "Significant per-case lab lab fee reductions",
  },
  {
    id: "straumann",
    name: "Straumann Group",
    category: "Implants & Biomaterials",
    description: "Global leaders in tooth replacement and orthodontic solutions.",
    highlight: "Volume-based implant & abutment discounts",
  },
  {
    id: "dentsply-sirona",
    name: "Dentsply Sirona",
    category: "Equipment & Consumables",
    description: "Restorative materials, endodontics, implants, and digital chairside CAD/CAM.",
    highlight: "Special equipment and consumable bundled rates",
  },
  {
    id: "envista",
    name: "Envista (KaVo Kerr, Nobel Biocare)",
    category: "Implants & Restorative",
    description: "Broad portfolio of dental consumables, implants, and digital imaging.",
    highlight: "DSO master schedule contract access",
  },
];

const CATEGORIES = [
  "All",
  "Dental Supplies",
  "Clinical Instrumentation",
  "Orthodontics & Labs",
  "Implants & Biomaterials",
  "Equipment & Consumables",
];

function VendorsPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = VENDORS.filter((v) => {
    const matchesCat = selectedCat === "All" || v.category === selectedCat;
    const matchesSearch =
      v.name.toLowerCase().includes(query.toLowerCase()) ||
      v.description.toLowerCase().includes(query.toLowerCase()) ||
      v.category.toLowerCase().includes(query.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <p
            className="text-xs font-black uppercase tracking-widest mb-3"
            style={{ color: ORANGE }}
          >
            Vendor Directory
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">
            Vetted Partner <span style={{ color: ORANGE }}>Network</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Browse our contracted dental suppliers, specialty labs, and equipment manufacturers.
            Members order direct using our master group account numbers.
          </p>
        </div>

        {/* SEARCH & FILTER */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-white/40" />
            <input
              type="text"
              placeholder="Search vendor or product..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-red-500"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  selectedCat === cat
                    ? "bg-red-600 text-white"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* VENDOR CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <div
              key={v.id}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs uppercase font-black tracking-wider text-red-500">
                    {v.category}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-white/40" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 text-white">{v.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{v.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs font-bold text-amber-400 mb-4">{v.highlight}</p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center text-xs font-black uppercase tracking-wider text-white hover:text-red-400 transition-colors"
                >
                  Unlock Member Rate <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
