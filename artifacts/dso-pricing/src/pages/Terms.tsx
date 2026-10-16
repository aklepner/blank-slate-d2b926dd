import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY2 = "#000000";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-white text-xl md:text-2xl font-black uppercase mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
        {title}
      </h2>
      <div className="text-white/70 text-base leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function Terms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: NAVY2 }}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1
          className="text-[40px] sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-4"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          data-testid="text-terms-title"
        >
          Terms &amp; Conditions
        </h1>
        <p className="text-white/50 font-bold mb-12">Effective Date: August 10, 2026</p>

        <div className="text-white/70 text-base leading-relaxed space-y-4 mb-10">
          <p>Welcome to dsopricing.com. These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website operated by DSO PRICING LLC (&ldquo;DSO PRICING,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>
          <p>By accessing or using dsopricing.com, you acknowledge and agree to these Terms. If you do not agree with these Terms, please discontinue use of the website.</p>
        </div>

        <Section title="1. Website Use">
          <p>DSO PRICING LLC provides dsopricing.com for legitimate business and informational purposes and for access to services or features that may be offered through the website.</p>
          <p>You agree to use the website only for lawful purposes and in accordance with these Terms.</p>
        </Section>

        <Section title="2. Eligibility">
          <p>By using this website, you represent that you have the legal capacity to agree to these Terms or that your use is appropriately authorized by a parent, guardian, or other person where required by applicable law.</p>
        </Section>

        <Section title="3. Accounts">
          <p>Certain features may require users to create an account. If an account is offered, users are responsible for providing accurate information, maintaining the confidentiality of their login credentials, and promptly notifying DSO PRICING LLC of suspected unauthorized access.</p>
          <p>Users are responsible for activity occurring through their accounts to the extent permitted by applicable law.</p>
          <p>DSO PRICING LLC may restrict or terminate access to an account when reasonably necessary to protect the website, enforce these Terms, prevent misuse, or comply with applicable requirements.</p>
        </Section>

        <Section title="4. Acceptable Use">
          <p>You may not use dsopricing.com to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate applicable laws or regulations;</li>
            <li>Attempt to gain unauthorized access to systems, accounts, or information;</li>
            <li>Introduce malicious software, viruses, or harmful code;</li>
            <li>Interfere with the security, functionality, or availability of the website;</li>
            <li>Impersonate another person or misrepresent your identity;</li>
            <li>Engage in fraudulent, deceptive, abusive, or unlawful conduct; or</li>
            <li>Use automated methods to access or extract website content where prohibited by applicable law or these Terms.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p>Unless otherwise stated, the website and its original content, branding, text, graphics, designs, logos, software, and other materials are owned by or licensed to DSO PRICING LLC and may be protected by intellectual property laws.</p>
          <p>Nothing in these Terms transfers ownership of DSO PRICING LLC's intellectual property to a website user.</p>
          <p>You may not reproduce, distribute, modify, publish, commercially exploit, or create derivative works from protected website materials without appropriate authorization, except where such activity is permitted by applicable law.</p>
        </Section>

        <Section title="6. Privacy">
          <p>Use of dsopricing.com is also subject to the DSO PRICING LLC Privacy Policy. Users should review the Privacy Policy to understand how information may be collected and handled.</p>
        </Section>

        <Section title="7. Electronic and Text Communications">
          <p>If you voluntarily provide contact information or enroll in a communication program, DSO PRICING LLC may communicate with you in accordance with the consent and disclosures provided at enrollment.</p>
          <p>Where text messaging is offered, message frequency may vary and message and data rates may apply. Where applicable, users may reply <strong className="text-white">STOP</strong> to discontinue text messages and <strong className="text-white">HELP</strong> for assistance.</p>
        </Section>

        <Section title="8. Website Availability and Accuracy">
          <p>DSO PRICING LLC strives to provide useful and accurate website information but does not warrant that all website content will always be complete, accurate, current, uninterrupted, or error-free.</p>
          <p>We may modify, suspend, update, or discontinue website features when reasonably necessary.</p>
        </Section>

        <Section title="9. External Websites and Services">
          <p>dsopricing.com may contain links to independently operated websites or services. DSO PRICING LLC does not control those services and is not responsible for their content, availability, security, or practices.</p>
          <p>Access to an external website or service is subject to the terms and policies applicable to that service.</p>
        </Section>

        <Section title="10. Disclaimer of Warranties">
          <p>To the maximum extent permitted by applicable law, dsopricing.com and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.</p>
          <p>DSO PRICING LLC disclaims warranties to the extent such warranties may lawfully be disclaimed. Nothing in these Terms excludes warranties or rights that cannot legally be excluded.</p>
        </Section>

        <Section title="11. Limitation of Liability">
          <p>To the maximum extent permitted by applicable law, DSO PRICING LLC will not be liable for indirect, incidental, special, consequential, or punitive damages resulting from access to or use of, or inability to access or use, the website.</p>
          <p>Nothing in these Terms is intended to exclude or limit liability where doing so would be prohibited by applicable law.</p>
        </Section>

        <Section title="12. Indemnification">
          <p>To the extent permitted by applicable law, you agree to indemnify and hold harmless DSO PRICING LLC from claims, losses, liabilities, and reasonable expenses arising from your unlawful misuse of the website or material violation of these Terms.</p>
        </Section>

        <Section title="13. Governing Law">
          <p>These Terms will be governed by applicable law and, to the extent legally permissible, the laws of the State of Florida, without regard to conflict-of-law principles.</p>
        </Section>

        <Section title="14. Dispute Resolution">
          <p>Before initiating formal proceedings, users and DSO PRICING LLC are encouraged to attempt in good faith to resolve disputes through direct communication.</p>
          <p>Unless applicable law requires otherwise, disputes relating to these Terms or use of dsopricing.com will be handled by courts having appropriate jurisdiction in Florida.</p>
          <p>Nothing in this section prevents either party from exercising rights or remedies that cannot legally be waived.</p>
        </Section>

        <Section title="15. Changes to These Terms">
          <p>DSO PRICING LLC may update these Terms periodically to reflect changes to its website, services, business practices, or applicable requirements.</p>
          <p>Updated Terms may be posted on dsopricing.com with a revised effective date. Continued use of the website after updated Terms become effective may constitute acceptance to the extent permitted by applicable law.</p>
        </Section>

        <Section title="16. Severability">
          <p>If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will remain in effect to the extent permitted by applicable law.</p>
        </Section>

        <Section title="17. Entire Agreement">
          <p>These Terms, together with any additional terms or policies expressly incorporated into them, constitute the agreement governing use of dsopricing.com with respect to the matters addressed here.</p>
        </Section>

        <Section title="18. Contact Information">
          <p>Questions concerning these Terms may be directed to:</p>
          <p>
            <strong className="text-white">DSO PRICING LLC</strong>
            <br />
            11767 Osprey Point Circle
            <br />
            Wellington, FL 33449
            <br />
            United States
          </p>
          <p>
            <strong className="text-white">Phone:</strong> +1 808-348-6024
            <br />
            <strong className="text-white">Website:</strong> dsopricing.com
          </p>
        </Section>
      </div>
      <Footer />
    </div>
  );
}
