import { company } from "@/data/content";

const items = [
  company.tagline,
  "Civil Engineering · Telecommunications · Oil & Gas",
  company.tagline,
  "Est. 2008 · RC1150194 · Abuja, Nigeria",
];

export default function TickerBanner() {
  return (
    <div className="bg-[#cc0000] py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-12 text-white text-xs font-semibold tracking-[0.2em] uppercase flex-shrink-0">
            {item}
            <span className="mx-12 opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
