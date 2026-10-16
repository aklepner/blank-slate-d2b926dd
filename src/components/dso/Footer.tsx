import { Link } from "wouter";
const logo = `${import.meta.env.BASE_URL}dso-pricing-logo.png`;

const NAVY = "#000000";
const ORANGE = "#DD042A";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/dsopricing/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dsopricing/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/dso-pricing/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 24 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@dso.pricing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "http://www.youtube.com/@DSOPricing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="text-white/70 border-t border-white/10" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <img src={logo} alt="DSO Pricing" className="h-20 w-auto" />
            </div>
            <p className="text-base leading-relaxed text-white/50">
              DSO Pricing is a group purchasing organization for dental practices. Members get DSO-level pricing from a vetted network of product and service vendors, and sign in here to reach their member benefits and ordering platform.
            </p>
          </div>
          <div>
            <p className="text-white/90 font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-base">
              {[
                { href: "/", label: "Home" },
                { href: "/built-different", label: "How It Works" },
                { href: "/built-different/vendors", label: "Vendors" },
                { href: "/blog", label: "Blog" },
                { href: "/pricing", label: "Pricing" },
                { href: "https://uniodental.com/gpo/dso_pricing/diagnostic", label: "Savings Calculator" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("https://") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-white/50 hover:text-white transition-colors" data-testid={`footer-link-${link.label.toLowerCase().replace(" ", "-")}`}>
                    {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white/90 font-semibold text-sm mb-4 uppercase tracking-wider">Contact</p>
            <p className="text-base mb-4">
              <a href="mailto:hello@dsopricing.com" className="text-white/50 hover:text-white transition-colors" data-testid="footer-email">
                hello@dsopricing.com
              </a>
            </p>
            <div className="flex items-center gap-4 mb-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="https://app.dsopricing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-lg text-white text-sm font-black uppercase tracking-wide transition-opacity hover:opacity-80"
              style={{ backgroundColor: ORANGE }}
            >
              Member Login
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} DSO Pricing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors" data-testid="link-footer-terms">Terms &amp; Conditions</Link>
          </div>
          <p>Build a Stronger, More Scalable Dental Business — On Your Terms.</p>
        </div>
      </div>
    </footer>
  );
}
