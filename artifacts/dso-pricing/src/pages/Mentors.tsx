import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrderUrl } from "@/contexts/AffiliateContext";

const ORANGE = "#DD042A";

const videos = [
  { id: "h0-2sw_YhZE", title: "Meet The Mentors: Matt Ornstein" },
  { id: "vGA9dSi353Y", title: "Meet The Mentors: Neil Zemba" },
  { id: "msAR2R8j-Gc", title: "Meet The Mentors: Eric Morin" },
  { id: "Kiy68eQBIA8", title: "The 9% Organic Growth Blueprint: Mike Huffaker on Decoding the New Patient Pipeline" },
  { id: "iL79mQ4GEYg", title: "The Single-Location Empire: Colin Ambler & Dr. Sharon Bleiler on Why a Second Office is a Trap" },
  { id: "XdrRpLgPijg", title: "Eric Leaver: How To Best Position Your Practice Or Group For Acquisition" },
  { id: "sVix4Jahhv8", title: "Mark Lakis: What's Your Freedom Number and How Much EBITDA Do You Need to Hit It?" },
  { id: "51uNH1ipHF4", title: "The 27x Return: How One Major DSO Uses AI to Scale feat. Amol Nirgudkar" },
  { id: "bcwArFL4HOg", title: "The Business of Dentistry: M&A, AI, and Valuation Traps ft. Brian Colao" },
  { id: "GoQ2JiI_8bU", title: "Pat Bauer | How Heartland Dental Scaled to 1,900+ Practices & Why Data Fixes Everything" }
];

export default function Mentors() {
  const orderUrl = useOrderUrl();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Meet the Mentors | DSO Pricing";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-20 px-6 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <p className="text-sm font-black uppercase tracking-widest mb-5" style={{ color: ORANGE }}>
            Built Different
          </p>
          <h1 
            className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase" 
            style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          >
            Meet The <span style={{ color: ORANGE }}>Mentors</span>
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Gain exclusive access to dentistry’s leading experts and the strategies you need to scale profitably
          </p>
        </div>
      </section>

      {/* VIDEOS GRID */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {videos.map((video, index) => (
              <div 
                key={video.id} 
                className="group flex flex-col gap-5"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border-2 border-white/5 group-hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(221,4,42,0.15)]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-[#DD042A]/20 transition-colors duration-300">
                      <Play className="w-4 h-4 text-white/50 group-hover:text-[#DD042A] transition-colors duration-300 ml-0.5" />
                    </div>
                    <h3 
                      className="text-xl md:text-2xl font-black text-white/90 group-hover:text-white transition-colors duration-300 uppercase leading-snug" 
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: ORANGE }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-white/90 text-sm font-black uppercase tracking-widest mb-5">
            Ready to scale?
          </p>
          <h2 
            className="text-4xl md:text-6xl font-black text-white mb-8 uppercase leading-tight" 
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Learn From The Best
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Join a community of practice owners driving real margin expansion and practice growth. The insights you need are waiting inside.
          </p>
          <div className="flex justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-black text-white hover:bg-zinc-900 hover:scale-105 transition-all duration-300 font-black text-lg uppercase tracking-wider px-10 h-16 rounded-xl shadow-2xl" 
              data-testid="button-join-cta-mentors"
            >
              <a href={orderUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Join DSO Pricing <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
