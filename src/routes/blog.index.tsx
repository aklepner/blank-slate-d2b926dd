import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — DSO Pricing Insights" },
      {
        name: "description",
        content:
          "Articles, insights, and strategies for lowering dental practice overhead and scaling independently.",
      },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    slug: "5-ways-dental-practices-overpay-on-supplies",
    title: "5 Ways Independent Dental Practices Silently Overpay on Supplies",
    date: "October 12, 2026",
    excerpt:
      "Discover the hidden formulary markups and tier traps that keep independent dentists from getting DSO-level pricing.",
  },
  {
    slug: "how-group-purchasing-level-the-playing-field",
    title: "How Group Purchasing Organizations Level the Field for Private Practice",
    date: "September 28, 2026",
    excerpt:
      "Learn how GPOs pool purchasing volume across independent practices to command massive vendor discounts.",
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <div className="pt-44 pb-20 px-6 max-w-5xl mx-auto w-full">
        <p className="text-sm font-black uppercase tracking-widest mb-3 text-red-600">
          Practice Insights
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-12">DSO Pricing Blog</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <div
              key={p.slug}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col"
            >
              <p className="text-xs text-white/50 mb-2 font-semibold">{p.date}</p>
              <h2 className="text-xl font-bold uppercase mb-4 text-white leading-snug">
                {p.title}
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6 flex-1">{p.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
