import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
const logo = `${import.meta.env.BASE_URL}dso-pricing-logo.png`;

const ORANGE = "#DD042A";

const leftLinks = [
  { href: "/", label: "Home" },
  {
    href: "/built-different",
    label: "How It Works",
    children: [
      { href: "/built-different/vendors", label: "Vendors" },
      { href: "/blog", label: "Blog" },
    ],
  },
];

const rightLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const allLinks = [
  { href: "/", label: "Home" },
  { href: "/built-different", label: "How It Works" },
  { href: "/built-different/vendors", label: "Vendors" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isHowItWorksActive = location === "/built-different" || location.startsWith("/built-different/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "#000000", borderBottom: `2px solid ${ORANGE}` }}>
      {/* DESKTOP */}
      <div className="hidden md:grid max-w-6xl mx-auto px-6 h-28" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
        {/* LEFT LINKS */}
        <nav className="flex items-center justify-end gap-8" data-testid="nav-left">
          {leftLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  data-testid="link-nav-how-it-works"
                  className="flex items-center gap-1 text-sm font-black uppercase tracking-widest transition-colors"
                  style={{ color: isHowItWorksActive ? ORANGE : "rgba(255,255,255,0.75)" }}
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 rounded-xl overflow-hidden shadow-2xl border border-white/10 min-w-[160px]" style={{ backgroundColor: "#111" }}>
                    <Link
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-5 py-3 text-xs font-black uppercase tracking-widest transition-colors border-b border-white/10"
                      style={{ color: location === link.href ? ORANGE : "rgba(255,255,255,0.7)" }}
                    >
                      Overview
                    </Link>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-3 text-xs font-black uppercase tracking-widest transition-colors"
                        style={{ color: location === child.href ? ORANGE : "rgba(255,255,255,0.7)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-black uppercase tracking-widest transition-colors"
                style={{ color: location === link.href ? ORANGE : "rgba(255,255,255,0.75)" }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CENTERED LOGO */}
        <Link href="/" className="flex items-center justify-center px-10" data-testid="link-logo">
          <img src={logo} alt="DSO Pricing" className="h-24 w-auto" style={{ paddingTop: "10px" }} />
        </Link>

        {/* RIGHT LINKS */}
        <nav className="flex items-center justify-start gap-8" data-testid="nav-right">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-black uppercase tracking-widest transition-colors"
              style={{ color: location === link.href ? ORANGE : "rgba(255,255,255,0.75)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.dsopricing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-white text-xs font-black uppercase tracking-wide transition-opacity hover:opacity-80"
            style={{ backgroundColor: ORANGE }}
          >
            Member Login
          </a>
        </nav>
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col items-center justify-center py-3 gap-2">
        <Link href="/" className="flex items-center justify-center" data-testid="link-logo-mobile">
          <img src={logo} alt="DSO Pricing" className="h-16 w-auto" />
        </Link>
        <button
          className="text-white p-1"
          onClick={() => setOpen(!open)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-white/10 px-6 py-4 flex flex-col gap-1" style={{ backgroundColor: "#000000" }} data-testid="nav-mobile">
          {allLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-3 text-sm font-black uppercase tracking-widest rounded-lg transition-colors"
              style={{
                color: location === link.href ? ORANGE : "rgba(255,255,255,0.7)",
                paddingLeft: link.href.includes("/built-different/") ? "2rem" : undefined,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://app.dsopricing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 mt-2 block text-center py-3 rounded-lg text-white text-sm font-black uppercase tracking-wide transition-opacity hover:opacity-80"
            style={{ backgroundColor: ORANGE }}
          >
            Member Login
          </a>
        </div>
      )}
    </header>
  );
}
