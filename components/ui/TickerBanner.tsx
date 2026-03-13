import { company } from "@/data/content";

const items = [
  company.tagline,
  "Civil Engineering · Telecommunications · Oil & Gas",
  `Est. ${company.established} · ${company.rc} · Abuja, Nigeria`,
  "Architecture · Estate Management · Procurement & Logistics",
];

export default function TickerBanner() {
  const track = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden bg-[#cc0000] py-3.5 border-y border-[#aa0000]">
      <div className="flex whitespace-nowrap mq">
        {track.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-8 px-10 flex-shrink-0
                                   text-white/85 text-[0.58rem] font-semibold tracking-[0.3em] uppercase">
            {t}
            <span className="text-white/25 text-[0.45rem]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
