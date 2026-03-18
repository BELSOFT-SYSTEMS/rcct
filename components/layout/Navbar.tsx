"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, company } from "@/data/content";

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  const active = (h: string) =>
    pathname === h || (h !== "/" && pathname.startsWith(h));

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background 0.3s, box-shadow 0.3s",
      background: scrolled ? "rgba(8,8,8,0.97)" : "rgba(8,8,8,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
    }}>

      {/* ── Top utility bar — hidden on mobile ── */}
      <div className="topbar" style={{ background: "#cc0000" }}>
        <div className="container" style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", height: "38px",
        }}>
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em" }}>
            RC1150194 · Incorporated 2013 · CAC Nigeria
          </span>
          <a href={`tel:${company.phones[0]}`} style={{
            display: "flex", alignItems: "center", gap: "8px",
            color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none",
          }}>
            <Phone size={14} />
            {company.phones[0]}
          </a>
        </div>
      </div>

      {/* ── Main nav row ── */}
      <div className="container" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "70px",
      }}>

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{
          display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", flexShrink: 0,
        }}>
          <div style={{ position: "relative", width: "42px", height: "42px" }}>
            <div style={{
              position: "absolute", inset: 0, background: "#cc0000",
              transform: "rotate(45deg)", transition: "transform 0.3s",
            }} />
            <span style={{
              position: "relative", zIndex: 1,
              display: "flex", alignItems: "center", justifyContent: "center",
              height: "100%", color: "#fff", fontWeight: 900, fontSize: "16px",
            }}>R</span>
          </div>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", color: "#fff",
              fontWeight: 900, fontSize: "22px", letterSpacing: "0.18em", lineHeight: 1,
            }}>RTCC</div>
            <div style={{
              color: "rgba(255,255,255,0.3)", fontSize: "11px",
              letterSpacing: "0.2em", textTransform: "uppercase",
              fontWeight: 600, marginTop: "3px",
            }}>Concepts Ltd</div>
          </div>
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <nav className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${active(l.href) ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA — hidden on mobile */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn btn-red btn-sm">
            Get in Touch
          </Link>
        </div>

        {/* Hamburger — hidden on desktop, shown on mobile */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden"
          aria-label="Toggle menu"
          style={{
            background: "none", border: "none", color: "#fff",
            cursor: "pointer", padding: "8px",
            lineHeight: 0,
          }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ── Mobile drawer — hidden on desktop ── */}
      <div
        className="lg:hidden"
        style={{
          overflow: "hidden",
          maxHeight: open ? "520px" : "0",
          opacity: open ? 1 : 0,
          transition: "max-height 0.35s ease, opacity 0.28s ease",
          background: "#0d0d0d",
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="container" style={{
          paddingTop: "24px", paddingBottom: "36px",
          display: "flex", flexDirection: "column", gap: "2px",
        }}>
          {navLinks.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                fontSize: "16px", fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "18px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                color: active(l.href) ? "#cc0000" : "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-red"
            style={{ marginTop: "24px", width: "100%", justifyContent: "center" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
