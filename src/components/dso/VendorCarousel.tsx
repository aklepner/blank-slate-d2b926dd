import { useEffect, useState } from "react";

export function VendorCarousel() {
  const [vendors, setVendors] = useState<string[]>([]);

  useEffect(() => {
    setVendors([
      "Henry Schein",
      "Patterson Dental",
      "Benco Dental",
      "Brasseler USA",
      "Dentsply Sirona",
      "Envista",
      "Align Technology",
      "Straumann",
    ]);
  }, []);

  if (vendors.length === 0) return null;

  const track = [...vendors, ...vendors, ...vendors];

  return (
    <div className="w-full overflow-hidden py-6 bg-black border-y border-white/10">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {track.map((title, i) => (
          <div
            key={`${title}-${i}`}
            className="shrink-0 mx-3 rounded-xl flex items-center justify-center px-6 py-3 bg-white/5 border border-white/10"
            style={{ height: "50px" }}
          >
            <span className="text-sm font-black tracking-wider text-white uppercase">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
