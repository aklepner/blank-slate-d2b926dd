import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost } from "@/lib/supabase";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { getSupabase } = await import("@/lib/supabase");
        const client = getSupabase();
        const { data, error: err } = await client
          .from("posts")
          .select("id,title,slug,excerpt,cover_image,author,published_at")
          .eq("published", true)
          .lte("published_at", new Date().toISOString())
          .order("published_at", { ascending: false });
        if (err) throw err;
        setPosts((data || []) as BlogPost[]);
      } catch (e: any) {
        setError(e.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6 text-center" style={{ backgroundColor: NAVY2 }}>
        <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Insights & Strategy</p>
        <h1 className="text-[40px] sm:text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          The DSO Pricing Blog
        </h1>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Practical insights to help independent dental practices reduce overhead, increase profitability, and scale smarter.
        </p>
      </section>

      {/* POSTS */}
      <section className="flex-1 px-6 pb-24" style={{ backgroundColor: NAVY }}>
        <div className="max-w-5xl mx-auto pt-10">
          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            </div>
          )}

          {error && (
            <p className="text-center text-white/50 py-20">{error}</p>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-center text-white/40 py-20 text-lg">No posts published yet. Check back soon.</p>
          )}

          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, i) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article
                    className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    {post.cover_image ? (
                      <div className="w-full h-48 overflow-hidden">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: "rgba(221,4,42,0.08)" }}>
                        <span className="text-5xl font-black uppercase" style={{ color: ORANGE, fontFamily: "'Outfit', sans-serif" }}>
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-black uppercase tracking-widest" style={{ color: ORANGE }}>
                          {formatDate(post.published_at)}
                        </span>
                        {post.author && (
                          <>
                            <span className="text-white/20">·</span>
                            <span className="text-xs text-white/40 font-semibold">{post.author}</span>
                          </>
                        )}
                      </div>
                      <h2 className="text-xl font-black text-white uppercase mb-2 leading-tight group-hover:text-white/90 transition-colors" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-white/50 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      )}
                      <div className="mt-4 flex items-center gap-1 text-xs font-black uppercase tracking-widest" style={{ color: ORANGE }}>
                        Read Article <span className="ml-1">→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
