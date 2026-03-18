import type { Metadata } from "next";
import { services } from "@/data/content";
import CTABanner from "@/components/sections/CTABanner";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = { title: "Services — RTCC Concepts Ltd" };

export default function ServicesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "40px", height: "3px", background: "#cc0000", flexShrink: 0 }} />
            <span style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>What We Do</span>
          </div>
          <h1 className="h-display h1" style={{ color: "#fff", marginBottom: "28px" }}>
            OUR <span style={{ color: "#cc0000" }}>SERVICES</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "19px", lineHeight: "1.8", maxWidth: "520px" }}>
            Eight integrated service areas delivering engineering solutions across West Africa.
          </p>
        </div>
      </div>
      <ServicesPageClient services={services} />
      <CTABanner />
    </>
  );
}
