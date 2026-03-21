"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:flex items-center justify-between text-xs"
        style={{ background: "#0A0A0A", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
          <span style={{ fontFamily: "var(--font-mono)", color: "#666", letterSpacing: "0.1em" }}>
            RC1150194 &mdash; Suite 6, Shema Complex, Asokoro Extension, FCT Abuja
          </span>
          <a href="tel:+2348022200927"
            style={{ fontFamily: "var(--font-mono)", color: "#CC0000", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", transition: "opacity 0.2s" }}>
            <Phone size={12} /> +234 802 220 0927
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.98)" : "white",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid #E8E8E5",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s ease, backdrop-filter 0.3s ease",
      }}>
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between" style={{ height: "72px" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: "42px", height: "42px", background: "#0A0A0A", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "18px", height: "18px", background: "#CC0000" }} />
              <span style={{ position: "relative", zIndex: 1, fontFamily: "var(--font-display)", color: "white", fontWeight: 700, fontSize: "18px" }}>R</span>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", lineHeight: 1, color: "#0A0A0A", letterSpacing: "0.01em" }}>
                RT<span style={{ color: "#CC0000" }}>CC</span>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#999", marginTop: "3px" }}>
                Concepts Ltd
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center" style={{ gap: "36px" }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary" style={{ padding: "12px 28px", fontSize: "12px" }}>
              <span>Get a Quote</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", color: "#0A0A0A", lineHeight: 0 }}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div className="md:hidden" style={{
          overflow: "hidden",
          maxHeight: open ? "420px" : "0",
          opacity: open ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.28s ease",
          background: "white",
          borderTop: "1px solid #E8E8E5",
        }}>
          <div style={{ padding: "20px 32px 32px" }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                style={{
                  display: "block", padding: "16px 0",
                  borderBottom: "1px solid #F0F0F0",
                  fontSize: "15px", fontWeight: 500,
                  color: pathname === l.href ? "#CC0000" : "#0A0A0A",
                  textDecoration: "none", letterSpacing: "0.02em",
                  transition: "color 0.2s",
                }}>
                {l.label}
              </Link>
            ))}
            <div style={{ marginTop: "24px" }}>
              <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer — accounts for fixed nav + top bar */}
      <div style={{ height: "72px" }} />
    </>
  );
}
