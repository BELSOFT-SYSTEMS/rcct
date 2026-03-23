import Link from "next/link";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

const services = [
  "Civil Engineering","Telecommunications","Mechanical & Electrical",
  "Oil & Gas","Procurement & Supply","Transportation & Logistics",
];
const quickLinks = [
  { label: "Home",        href: "/" },
  { label: "About Us",    href: "/about" },
  { label: "Services",    href: "/services" },
  { label: "Projects",    href: "/projects" },
  { label: "Contact",     href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", color: "white" }}>
      {/* Top red bar */}
      <div style={{ height: "4px", background: "#CC0000" }} />

      <div className="container" style={{ paddingTop: "88px", paddingBottom: "72px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none", marginBottom: "28px" }}>
              <img src="/logo-3.png" alt="RTCC Logo" style={{ width: "42px", height: "42px" }} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", lineHeight: 1, color: "white" }}>
                  RT<span style={{ color: "#CC0000" }}>CC</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", marginTop: "3px" }}>Concepts Ltd</div>
              </div>
            </Link>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.85", marginBottom: "28px", maxWidth: "240px" }}>
              Delivering excellence in civil engineering, telecommunications, and integrated services since 2008.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "32px", height: "2px", background: "#CC0000" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#CC0000" }}>RC1150194</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#666", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "16px", height: "2px", background: "#CC0000", display: "inline-block" }} />
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    <ArrowRight size={12} style={{ color: "#CC0000", flexShrink: 0 }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#666", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "16px", height: "2px", background: "#CC0000", display: "inline-block" }} />
              Our Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" className="footer-link">
                    <ArrowRight size={12} style={{ color: "#CC0000", flexShrink: 0 }} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#666", marginBottom: "28px", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "16px", height: "2px", background: "#CC0000", display: "inline-block" }} />
              Contact Us
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px" }}>
              <li style={{ display: "flex", gap: "14px" }}>
                <MapPin size={15} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.75" }}>
                  Suite 6, Second Floor, Shema Complex,<br />
                  Asokoro Extension, FCT Abuja, Nigeria
                </p>
              </li>
              <li style={{ display: "flex", gap: "14px" }}>
                <Phone size={14} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <a href="tel:+2348022200927" className="footer-contact-link">+234 802 220 0927</a>
                  <a href="tel:+2348133198124" className="footer-contact-link">+234 813 319 8124</a>
                </div>
              </li>
              <li style={{ display: "flex", gap: "14px" }}>
                <Mail size={14} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                <a href="mailto:info@rtccconcepts.com" className="footer-contact-link">
                  info@rtccconcepts.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#444", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} RTCC Concepts Limited. RC1150194. All rights reserved.
          </p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#444", letterSpacing: "0.06em", display: "flex", alignItems: "center", gap: "8px" }}>
            <span>Quality Is Ensured</span>
            <span style={{ color: "#CC0000" }}>✦</span>
            <span>Passion For Business Is Our Pride</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
