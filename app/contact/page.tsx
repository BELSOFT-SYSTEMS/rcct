import type { Metadata } from "next";
import { company } from "@/data/content";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = { title: "Contact — RTCC Concepts Ltd" };

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "40px", height: "3px", background: "#cc0000", flexShrink: 0 }} />
            <span style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Reach Us</span>
          </div>
          <h1 className="h-display h1" style={{ color: "#fff", marginBottom: "28px" }}>
            GET IN <span style={{ color: "#cc0000" }}>TOUCH</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "19px", lineHeight: "1.8", maxWidth: "520px" }}>
            Ready to discuss your project? Our team is available to help.
          </p>
        </div>
      </div>
      <ContactPageClient company={company} />
    </>
  );
}
