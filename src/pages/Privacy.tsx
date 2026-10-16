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

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: NAVY2 }}>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1
          className="text-[40px] sm:text-5xl md:text-6xl font-black text-white uppercase leading-[1.05] mb-4"
          style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
          data-testid="text-privacy-title"
        >
          Privacy Policy
        </h1>
        <p className="text-white/50 font-bold mb-12">Effective Date: August 10, 2026</p>

        <p className="text-white/70 text-base leading-relaxed mb-10">
          DSO PRICING LLC (&ldquo;DSO PRICING,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects the privacy of visitors and users of dsopricing.com. This Privacy Policy explains how information may be collected, used, protected, and otherwise handled when you visit or interact with our website.
        </p>

        <Section title="1. Information We Collect">
          <p>When you use dsopricing.com, we may collect information that you voluntarily provide, including your name, email address, telephone number, contact information, and information submitted through forms or other website features.</p>
          <p>We may also automatically collect certain technical information when you access the website, such as your IP address, browser type, device information, pages visited, referring pages, approximate location derived from technical information, and information collected through cookies or similar technologies.</p>
          <p>We seek to collect only information reasonably necessary to operate our website, communicate with users, provide requested services, and improve the user experience.</p>
        </Section>

        <Section title="2. How We Use Information">
          <p>Information collected through dsopricing.com may be used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to inquiries and requests;</li>
            <li>Provide information, products, or services requested by users;</li>
            <li>Operate, maintain, secure, and improve the website;</li>
            <li>Communicate with users about their inquiries or relationship with DSO PRICING LLC;</li>
            <li>Send communications that users have requested or consented to receive;</li>
            <li>Detect or prevent fraud, abuse, security incidents, or other harmful activity; and</li>
            <li>Meet applicable legal and regulatory requirements.</li>
          </ul>
        </Section>

        <Section title="3. Protection of Information">
          <p>DSO PRICING LLC takes reasonable administrative, technical, and organizational measures designed to protect information against unauthorized access, loss, misuse, alteration, or destruction.</p>
          <p>No internet transmission or electronic storage system can be guaranteed to be completely secure. Accordingly, we cannot guarantee absolute security.</p>
        </Section>

        <Section title="4. Cookies and Similar Technologies">
          <p>DSO PRICING LLC may use cookies and similar technologies to support website functionality, understand website usage, remember preferences, and improve the website.</p>
          <p>Users may be able to control cookies through their browser settings. Disabling certain cookies may affect the functionality of portions of the website.</p>
        </Section>

        <Section title="5. Mobile Information and Text Messaging Privacy">
          <p>No mobile information will be provided to outside organizations for marketing or promotional purposes.</p>
          <p>Text messaging originator opt-in data and consent will be used only as necessary to provide the requested messaging service. Such information may be provided to aggregators and service providers that facilitate delivery and operation of the text messaging service.</p>
          <p>Opt-in information and consent associated with text messaging will not be used for unrelated marketing or promotional purposes by those service providers.</p>
        </Section>

        <Section title="6. Text Message Consent">
          <p>If DSO PRICING LLC offers text messaging and you voluntarily opt in, you consent to receive messages in accordance with the disclosures presented when you enroll.</p>
          <p>Consent to receive text messages is not a condition of purchasing goods or services unless specifically permitted by applicable law. Message frequency may vary. Message and data rates may apply depending on your mobile carrier and plan.</p>
          <p>Where applicable, users may reply <strong className="text-white">STOP</strong> to discontinue text messages or <strong className="text-white">HELP</strong> for assistance.</p>
        </Section>

        <Section title="7. Information Retention">
          <p>We may retain information for as long as reasonably necessary for the purposes described in this Privacy Policy, to provide requested services, maintain appropriate business records, resolve disputes, protect our rights, and satisfy applicable legal obligations.</p>
        </Section>

        <Section title="8. Privacy Rights">
          <p>Depending on where you reside, applicable law may provide certain rights concerning your personal information. These rights may include requesting access to, correction of, or deletion of certain personal information.</p>
          <p>Requests concerning personal information may be submitted using the contact information below. We may need to verify a request before processing it.</p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>DSO PRICING LLC does not knowingly intend to collect personal information from children in violation of applicable law. If we become aware that information has been collected from a child in circumstances requiring parental or guardian consent, we will take appropriate steps consistent with applicable law.</p>
        </Section>

        <Section title="10. External Services and Links">
          <p>Our website may contain links to websites or online services that we do not operate. DSO PRICING LLC is not responsible for the privacy practices, content, or security of independently operated websites or services. Users should review the applicable privacy notices before providing personal information.</p>
        </Section>

        <Section title="11. Changes to This Privacy Policy">
          <p>DSO PRICING LLC may update this Privacy Policy periodically to reflect changes to our website, business practices, technologies, or applicable requirements.</p>
          <p>When this Privacy Policy is updated, the revised version may be posted on dsopricing.com with an updated effective date. Users are encouraged to review this page periodically.</p>
        </Section>

        <Section title="12. Contact Us">
          <p>Questions, concerns, or requests regarding this Privacy Policy may be directed to:</p>
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
