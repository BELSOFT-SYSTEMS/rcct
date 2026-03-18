import { company } from "@/data/content";
const items = [
  company.tagline,
  "Civil Engineering · Telecommunications · Oil & Gas",
  `Est. ${company.established} · ${company.rc} · Abuja, Nigeria`,
  "Architecture · Estate Management · Procurement · Logistics",
];
export default function TickerBanner() {
  const track = [...items, ...items, ...items, ...items];
  return (
    <div style={{ background: "#cc0000", overflow: "hidden", borderTop: "1px solid rgba(0,0,0,0.1)", borderBottom: "1px solid rgba(0,0,0,0.1)", padding: "16px 0" }}>
      <div className="ticker" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {track.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "40px", padding: "0 48px", color: "rgba(255,255,255,0.9)", fontSize: "14px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", flexShrink: 0 }}>
            {t}
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "8px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
