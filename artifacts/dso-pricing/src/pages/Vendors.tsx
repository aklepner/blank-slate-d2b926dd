import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Category } from "@/lib/supabase";

const NAVY2 = "#000000";
const NAVY = "#0F0F0F";
const ORANGE = "#DD042A";

export default function Vendors() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = "Vendor Categories | DSO Pricing";
    return () => { document.title = prev; };
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const { getSupabase } = await import("@/lib/supabase");
        const client = getSupabase();
        const { data, error: cErr } = await client
          .from("categories")
          .select("*")
          .order("name");
        if (cErr) throw cErr;
        setCategories(data || []);
      } catch (e: any) {
        setError(e.message || "Failed to load categories");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-12 px-6 text-center" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>
            Our Network
          </p>
          <h1
            className="text-[40px] sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-5"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            <span style={{ color: ORANGE }}>Vetted</span> Vendors at<br />DSO-Level Pricing
          </h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Every vendor has been vetted and negotiated for members. Pick a category to find savings across your entire practice.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="flex-1 px-6 pb-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto pt-10">
          {loading && (
            <div className="flex items-center justify-center py-32">
              <div className="w-10 h-10 rounded-full border-4 border-white/10 animate-spin" style={{ borderTopColor: ORANGE }} />
            </div>
          )}
          {error && <p className="text-center text-white/50 py-20">{error}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {categories.map((cat) => (
                <CategoryCard key={cat.id} category={cat} />
              ))}
              <AllVendorsCard />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/built-different/vendors/${category.id}`}
      className="group relative flex flex-row items-center gap-3 px-4 py-4 sm:flex-col sm:gap-0 sm:px-6 sm:pt-10 sm:pb-8 rounded-2xl border border-white/8 transition-all duration-200 hover:border-white/25 hover:scale-[1.02] overflow-hidden"
      style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      data-testid={`card-category-${category.id}`}
    >
      <div className="hidden sm:block absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: ORANGE }} />
      <div className="w-10 h-10 sm:w-24 sm:h-24 flex items-center justify-center shrink-0 sm:mb-6">
        {category.icon ? (
          <img
            src={category.icon}
            alt={category.name}
            className="w-full h-full object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(221,4,42,0.15)" }}>
            <span className="text-white font-black text-lg sm:text-2xl">{category.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <h3
        className="text-white text-sm sm:text-lg font-black text-left sm:text-center leading-snug sm:mb-2 sm:flex-1"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        {category.name}
      </h3>
      {category.description && (
        <p className="hidden sm:block text-white/50 text-sm text-center mb-2">{category.description}</p>
      )}
      <span className="hidden sm:block text-white/60 text-xs font-black uppercase tracking-widest border-t border-white/15 pt-3 mt-2 px-4 group-hover:text-white transition-colors">
        View Category
      </span>
    </Link>
  );
}

function AllVendorsCard() {
  return (
    <Link
      href="/built-different/vendors/all"
      className="group relative flex flex-row items-center gap-3 px-4 py-4 sm:flex-col sm:gap-0 sm:px-6 sm:pt-10 sm:pb-8 rounded-2xl border border-white/8 transition-all duration-200 hover:border-white/25 hover:scale-[1.02] overflow-hidden"
      style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
      data-testid="card-category-all"
    >
      <div className="hidden sm:block absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: ORANGE }} />
      <div className="w-10 h-10 sm:w-24 sm:h-24 flex items-center justify-center shrink-0 sm:mb-6">
        <img src="/dso-pricing-logo.png" alt="All Vendors" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-white text-sm sm:text-lg font-black text-left sm:text-center leading-snug sm:mb-2 sm:flex-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
        All Vendors
      </h3>
      <span className="hidden sm:block text-white/60 text-xs font-black uppercase tracking-widest border-t border-white/15 pt-3 mt-2 px-4 group-hover:text-white transition-colors">
        View All
      </span>
    </Link>
  );
}
