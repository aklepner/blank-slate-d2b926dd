import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — DSO Pricing" },
      { name: "description", content: "Get in touch with DSO Pricing. Speak with a practice advisor or ask questions about our GPO network." },
      { property: "og:title", content: "Contact Us — DSO Pricing" },
      { property: "og:description", content: "Get in touch with DSO Pricing. Speak with a practice advisor or ask questions about our GPO network." },
    ],
  }),
  component: ContactPage,
});

const ORANGE = "#DD042A";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! A practice advisor will reach out shortly.");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />

      <section className="pt-44 pb-20 px-6 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <p className="text-sm font-black uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4">Contact Our Team</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Have questions about our vendor catalog, pricing tiers, or membership? We're here to help.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-black uppercase mb-3 text-red-500">Thank You!</h2>
            <p className="text-white/80">Your message has been received. Our team will respond within 1 business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-xl mx-auto space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-white/80">Full Name</label>
              <input required type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" placeholder="Dr. Jane Smith" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-white/80">Email Address</label>
              <input required type="email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" placeholder="jane@dentalsmile.com" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-white/80">Practice Name</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" placeholder="Smile Dental Care" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-white/80">Message</label>
              <textarea required rows={4} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500" placeholder="How can we help your practice?"></textarea>
            </div>

            <Button type="submit" size="lg" className="w-full font-bold uppercase tracking-wider h-12 text-white" style={{ backgroundColor: ORANGE }}>
              Send Message
            </Button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}
