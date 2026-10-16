import { useEffect, useState } from "react";

export default function VendorCarousel() {
  const [logos, setLogos] = useState<{ id: string; title: string; logo: string }[]>([]);

  useEffect(() => {
    async function fetch() {
      try {
        const { getSupabase } = await import("@/lib/supabase");
        const client = getSupabase();
        const { data } = await client.from("businesses").select("id,title,logo").not("logo", "is", null);
        if (!data) return;

        const seenTitles = new Set<string>();
        const seenLogos = new Set<string>();
        const unique = data.filter((v: any) => {
          const tk = (v.title as string).trim().toLowerCase();
          const lk = (v.logo as string | null)?.trim() || "";
          if (!lk) return false;
          if (seenTitles.has(tk) || seenLogos.has(lk)) return false;
          seenTitles.add(tk);
          seenLogos.add(lk);
          return true;
        });

        setLogos(unique.map((v: any) => ({ id: v.id, title: (v.title as string).trim(), logo: v.logo as string })));
      } catch {
        // Supabase not configured or fetch failed — silently skip
      }
    }
    fetch();
  }, []);

  if (logos.length === 0) return null;

  const track = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-6" style={{ backgroundColor: "#000000" }}>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 80s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {track.map((v, i) => (
          <div
            key={`${v.id}-${i}`}
            className="flex-shrink-0 mx-3 rounded-xl flex items-center justify-center p-2"
            style={{ width: "120px", height: "60px", backgroundColor: "#ffffff" }}
          >
            <img
              src={v.logo}
              alt={v.title}
              className="w-full h-full object-contain"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.display = "none"; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
