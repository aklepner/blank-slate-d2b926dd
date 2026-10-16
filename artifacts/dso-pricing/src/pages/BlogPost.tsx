import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogPost as BlogPostType } from "@/lib/supabase";
import { ArrowLeft } from "lucide-react";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const { getSupabase } = await import("@/lib/supabase");
        const client = getSupabase();
        const { data, error } = await client
          .from("posts")
          .select("*")
          .eq("slug", slug)
          .eq("published", true)
          .lte("published_at", new Date().toISOString())
          .single();
        if (error || !data) { setNotFound(true); return; }
        setPost(data);
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchPost();
  }, [slug]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: NAVY2 }}>
      <Navbar />

      <main className="flex-1 pt-36 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {loading && (
            <div className="flex justify-center py-32">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
            </div>
          )}

          {!loading && notFound && (
            <div className="text-center py-32">
              <p className="text-white/40 text-xl mb-6">Article not found.</p>
              <Link href="/blog" className="text-sm font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: ORANGE }}>
                ← Back to Blog
              </Link>
            </div>
          )}

          {!loading && post && (
            <>
              {/* BACK */}
              <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-10 hover:opacity-70 transition-opacity" style={{ color: ORANGE }}>
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
              </Link>

              {/* COVER */}
              {post.cover_image && (
                <div className="w-full h-72 rounded-2xl overflow-hidden mb-10">
                  <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* META */}
              <div className="flex items-center gap-3 mb-4">
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

              {/* TITLE */}
              <h1 className="text-[40px] sm:text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {post.title}
              </h1>

              {/* EXCERPT */}
              {post.excerpt && (
                <p className="text-white/60 text-xl leading-relaxed mb-10 border-l-4 pl-5" style={{ borderColor: ORANGE }}>
                  {post.excerpt}
                </p>
              )}

              {/* DIVIDER */}
              <div className="border-t border-white/10 mb-10" />

              {/* CONTENT */}
              {post.content && (
                <div className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-black prose-headings:uppercase prose-headings:text-white
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-5
                  prose-strong:text-white prose-strong:font-bold
                  prose-ul:text-white/70 prose-li:mb-1
                  prose-a:text-red-500 prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-4 prose-blockquote:border-red-600 prose-blockquote:text-white/60 prose-blockquote:pl-5 prose-blockquote:italic
                ">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              )}

              {/* BOTTOM NAV */}
              <div className="border-t border-white/10 mt-16 pt-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: ORANGE }}>
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
                </Link>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
