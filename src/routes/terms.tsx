import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/dso/Navbar";
import { Footer } from "@/components/dso/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — DSO Pricing" },
      {
        name: "description",
        content: "Terms and conditions for DSO Pricing membership and services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      <Navbar />
      <div className="pt-44 pb-20 px-6 max-w-4xl mx-auto w-full leading-relaxed">
        <h1 className="text-4xl font-black uppercase mb-6">Terms &amp; Conditions</h1>
        <p className="text-white/70 mb-4">Effective Date: August 10, 2026</p>
        <div className="space-y-6 text-white/80 text-sm">
          <p>
            Welcome to DSO Pricing. By accessing our platform or enrolling in membership, you agree
            to these Terms and Conditions.
          </p>
          <h2 className="text-xl font-bold uppercase text-white">Membership &amp; Eligibility</h2>
          <p>
            Membership is open exclusively to licensed dental practices and dental professionals.
            Members agree to keep GPO master contract rates confidential.
          </p>
          <h2 className="text-xl font-bold uppercase text-white">Billing &amp; Cancellation</h2>
          <p>
            Memberships are billed monthly at $297/month. You may cancel your membership at any time
            with no penalty or early termination fees.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
