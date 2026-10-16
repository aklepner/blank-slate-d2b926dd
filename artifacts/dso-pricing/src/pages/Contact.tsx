import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0F0F0F";
const NAVY2 = "#000000";
const ORANGE = "#DD042A";
const ORANGE_LIGHT = "#FF1A3D";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  practiceName: z.string().min(1, "Practice name is required"),
  phone: z.string().min(7, "Phone number is required"),
  locations: z.string().min(1, "Please enter number of locations"),
  message: z.string().min(10, "Please tell us how we can help"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      practiceName: "",
      phone: "",
      locations: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactForm) {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}../api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden" style={{ backgroundColor: NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(221,4,42,0.10) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: ORANGE }}>Contact</p>
          <h1 className="text-[40px] sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Let's Connect.
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you have a question or want to see how DSO Pricing fits your practice, we'll point you in the right direction.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left: Info */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Concierge Team</p>
              <h2 className="text-3xl font-extrabold text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>Talk to Our Concierge Team</h2>
              <p className="text-white/60 mb-6 text-lg leading-relaxed">Have a question about:</p>
              <div className="space-y-3 mb-8">
                {["Membership", "Pricing and partners", "Whether DSO Pricing is the right fit"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} data-testid={`item-question-${i}`}>
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: ORANGE_LIGHT }} />
                    <p className="text-white/80 font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/50 mb-10 text-base">We're here to help. Fill out the form and our team will get back to you shortly.</p>

              {/* Fast Path */}
              <div className="rounded-2xl p-7 border" style={{ backgroundColor: "rgba(221,4,42,0.08)", borderColor: "rgba(221,4,42,0.25)" }} data-testid="card-fast-path">
                <p className="font-extrabold text-white text-xl mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Want clarity faster?</p>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  If you're actively growing and want to understand how DSO Pricing fits your next stage:
                </p>
                <Button asChild size="lg" className="w-full text-white font-bold" style={{ backgroundColor: ORANGE }} data-testid="button-book-fast">
                  <Link href="/profitability-call">
                    Click here to speak to our friendly AI agent Ava. <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl p-12 text-center border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid="card-success">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(221,4,42,0.15)" }}>
                    <CheckCircle2 className="w-10 h-10" style={{ color: ORANGE_LIGHT }} />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Inquiry Submitted</h3>
                  <p className="text-white/60 text-lg mb-8">
                    Thank you for reaching out. Our concierge team will respond within 1–2 business days.
                  </p>
                  <Button asChild size="lg" className="text-white font-bold" style={{ backgroundColor: ORANGE }}>
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              ) : (
                <div className="rounded-2xl p-8 md:p-10 border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} data-testid="card-form">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Name</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-red-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                placeholder="Your full name"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Email</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-red-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                type="email"
                                placeholder="you@practice.com"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="practiceName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Practice Name</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-red-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                placeholder="Your practice name"
                                data-testid="input-practice"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-red-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                type="tel"
                                placeholder="Your phone number"
                                data-testid="input-phone"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="locations"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">Number of Locations</FormLabel>
                            <FormControl>
                              <Input
                                className="h-12 text-white placeholder:text-white/30 border-white/15 focus-visible:ring-red-500"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                placeholder="e.g. 1, 2–3, 4+"
                                data-testid="input-locations"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/70 font-medium text-sm">What can we help you with?</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your practice and what you're looking to achieve..."
                                className="resize-none text-white placeholder:text-white/30 border-white/15 focus-visible:ring-red-500 p-4"
                                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
                                rows={4}
                                data-testid="textarea-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      {submitError && (
                        <p className="text-red-400 text-sm text-center">{submitError}</p>
                      )}
                      <Button type="submit" size="lg" className="w-full h-14 text-lg text-white font-bold" style={{ backgroundColor: ORANGE }} disabled={submitting} data-testid="button-submit">
                        {submitting ? "Submitting..." : <><span>Submit Inquiry</span><ArrowRight className="ml-2 w-5 h-5" /></>}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK BEST WITH */}
      <section className="py-20 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: ORANGE }}>Alignment</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Who We Work Best With
          </h2>
          <div className="space-y-4 text-left mb-12">
            {[
              "Growth-focused operators",
              "Private practices doing $1M+",
              "Growing groups building with intention",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-xl border border-white/10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} data-testid={`item-align-${i}`}>
                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ORANGE_LIGHT }} />
                <p className="text-white/80 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-lg italic mb-3">We're not built for everyone — and that's intentional.</p>
          <p className="text-white/80 text-lg">If you're serious about building a stronger, more scalable business, you'll fit right in.</p>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="py-16 px-6" style={{ backgroundColor: ORANGE }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4">Prefer to reach out directly?</p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <Mail className="w-6 h-6 text-white" />
            <a href="mailto:hello@dsopricing.com" className="text-2xl font-extrabold text-white hover:opacity-80 transition-opacity" style={{ fontFamily: "'Outfit', sans-serif" }} data-testid="link-email-direct">
              hello@dsopricing.com
            </a>
          </div>
          <p className="text-white/70 text-sm mt-4">We typically respond within 1–2 business days.</p>
        </div>
      </section>

      {/* CLOSE */}
      <section className="py-12 px-6" style={{ backgroundColor: NAVY2 }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/40 text-sm font-semibold uppercase tracking-widest">Independent. Strategic. Leveraged.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
