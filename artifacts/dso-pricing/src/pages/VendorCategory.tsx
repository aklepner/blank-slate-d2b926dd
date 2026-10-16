import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Vendor, Category } from "@/lib/supabase";

const NAVY2 = "#000000";
const NAVY = "#0F0F0F";
const ORANGE = "#DD042A";
type PublicVendor = Pick<Vendor, "id" | "title" | "description" | "logo" | "categoryIds">;

export default function VendorCategory() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const isAll = categoryId === "all";
  const [vendors, setVendors] = useState<PublicVendor[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Vendors | DSO Pricing";
  }, []);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const { getSupabase } = await import("@/lib/supabase");
        const client = getSupabase();
        const [{ data: vendorData, error: vErr }, { data: catData, error: cErr }] = await Promise.all([
          client.from("businesses").select("id,title,description,logo,categoryIds").order("title"),
          client.from("categories").select("*"),
        ]);
        if (vErr) throw vErr;
        if (cErr) throw cErr;
        if (cancelled) return;

        const seenTitles = new Set<string>();
        const seenLogos = new Set<string>();
        const unique = (vendorData || []).filter((v: any) => {
          const titleKey = v.title.trim().toLowerCase();
          const logoKey = v.logo?.trim() || "";
          if (seenTitles.has(titleKey)) return false;
          if (logoKey && seenLogos.has(logoKey)) return false;
          seenTitles.add(titleKey);
          if (logoKey) seenLogos.add(logoKey);
          return true;
        });
        setVendors(isAll ? unique : unique.filter((v: PublicVendor) => v.categoryIds?.includes(categoryId)));
        setCategories((catData as Category[]) || []);
        if (!isAll) {
          const cat = (catData as Category[] | null)?.find((c) => c.id === categoryId);
          if (cat) document.title = `${cat.name} | DSO Pricing`;
        }
      } catch (e: any) {
        if (!cancelled) setError(e.message || "Failed to load vendors");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, [categoryId, isAll]);

  const categoryById = new Map(categories.map((c) => [c.id, c]));
  const category = isAll ? null : categoryById.get(categoryId) || null;
  const title = isAll ? "All Vendors" : category?.name || "Vendors";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-12 px-6 text-center" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-4xl mx-auto">
          <Link
            href="/built-different/vendors"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-black uppercase tracking-widest mb-6 transition-colors"
            data-testid="link-back-categories"
          >
            <ArrowLeft className="w-4 h-4" /> All Categories
          </Link>
          <h1
            className="text-[40px] sm:text-4xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-5"
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>
          {category?.description && (
            <p className="text-white/60 text-xl leading-relaxed">{category.description}</p>
          )}
        </div>
      </section>

      {/* VENDOR GRID */}
      <section className="flex-1 px-6 pb-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-7xl mx-auto pt-10">
          {loading && (
            <div className="flex items-center justify-center py-32">
              <div className="w-10 h-10 rounded-full border-4 border-white/10 animate-spin" style={{ borderTopColor: ORANGE }} />
            </div>
          )}
          {error && <p className="text-center text-white/50 py-20">{error}</p>}
          {!loading && !error && vendors.length === 0 && (
            <p className="text-center text-white/40 py-20">No vendors in this category yet.</p>
          )}
          {!loading && !error && vendors.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vendors.map((vendor) => (
                <VendorCard
                  key={vendor.id}
                  vendor={vendor}
                  categoryLabel={
                    (!isAll && category?.name) ||
                    (vendor.categoryIds || []).map((id) => categoryById.get(id)?.name).filter(Boolean).join(", ")
                  }
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

function VendorCard({ vendor, categoryLabel }: { vendor: PublicVendor; categoryLabel: string }) {
  return (
    <div
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 transition-all duration-200 hover:border-white/25 hover:scale-[1.02]"
      style={{ backgroundColor: "#161616" }}
      data-testid={`card-vendor-${vendor.id}`}
    >
      {/* LOGO AREA */}
      <div className="h-48 flex items-center justify-center p-8" style={{ backgroundColor: "#ffffff" }}>
        {vendor.logo ? (
          <img
            src={vendor.logo}
            alt={vendor.title.trim()}
            className="max-w-full max-h-full object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <span className="font-black text-5xl" style={{ color: NAVY }}>{vendor.title.trim().charAt(0)}</span>
        )}
      </div>

      {/* INFO AREA */}
      <div className="flex flex-col flex-1 p-6">
        {categoryLabel && (
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>
            {categoryLabel}
          </p>
        )}
        <h3 className="text-white text-xl font-black leading-snug mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {vendor.title.trim()}
        </h3>
        {vendor.description && (
          <p
            className="text-white/60 text-sm leading-relaxed"
            style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {stripHtml(vendor.description)}
          </p>
        )}
      </div>
    </div>
  );
}
