import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";

export const Route = createFileRoute("/built-different/vendors")({
  head: () => ({
    meta: [
      { title: "Vendor Network — DSO Pricing" },
      {
        name: "description",
        content:
          "Explore our vetted network of premier dental supply, lab, equipment, and service partners.",
      },
    ],
  }),
  component: VendorsPage,
});

const vendors = [
  { name: "Henry Schein", category: "Dental Supplies" },
  { name: "Patterson Dental", category: "Equipment & Supplies" },
  { name: "Benco Dental", category: "Supplies & Technology" },
  { name: "Brasseler USA", category: "Burs & Endodontics" },
  { name: "Straumann", category: "Implants & Restoration" },
  { name: "Dentsply Sirona", category: "Equipment & Consumables" },
];

function VendorsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <div className="pt-44 pb-20 px-6 max-w-5xl mx-auto w-full">
        <p className="text-sm font-black uppercase tracking-widest mb-3 text-red-600">
          Our Network
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">Partner Vendors</h1>
        <p className="text-white/70 text-lg mb-12 max-w-2xl">
          We partner with industry-leading manufacturers and distributors so you keep buying
          top-quality products at maximum volume discounts.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {vendors.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-xs uppercase font-bold text-red-500 mb-1">{v.category}</p>
              <h2 className="text-xl font-black uppercase text-white">{v.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
