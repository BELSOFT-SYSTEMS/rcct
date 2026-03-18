import type { Metadata } from "next";
import { company, policies, businessAreas, orgChart, partners, banks } from "@/data/content";
import CTABanner from "@/components/sections/CTABanner";
import TickerBanner from "@/components/ui/TickerBanner";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About RTCC Concepts Ltd",
  description: "17+ years of engineering excellence across Nigeria and West Africa.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div style={{ width: "40px", height: "3px", background: "#cc0000", flexShrink: 0 }} />
            <span style={{ color: "#cc0000", fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Who We Are</span>
          </div>
          <h1 className="h-display h1" style={{ color: "#fff", marginBottom: "28px" }}>
            ABOUT <span style={{ color: "#cc0000" }}>RTCC</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "19px", lineHeight: "1.8", maxWidth: "520px" }}>
            Over 17 years of engineering excellence across Nigeria and West Africa.
          </p>
        </div>
      </div>
      <AboutPageClient company={company} policies={policies} businessAreas={businessAreas} orgChart={orgChart} partners={partners} banks={banks} />
      <TickerBanner />
      <CTABanner />
    </>
  );
}
