import { MapPin, Phone, Building2 } from "lucide-react";
import { company } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.05]">
      <div className="cw py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="relative w-9 h-9 flex-shrink-0">
              <div className="absolute inset-0 bg-[#cc0000] rotate-45"/>
              <span className="relative z-10 flex h-full items-center justify-center
                               text-white font-black text-xs">R</span>
            </div>
            <div>
              <p className="text-white font-black tracking-[0.22em] text-lg leading-none"
                 style={{fontFamily:"var(--font-display)"}}>RTCC</p>
              <p className="text-[#2a2a2a] text-[0.55rem] tracking-[0.2em] uppercase mt-0.5">
                Concepts Ltd · {company.rc}
              </p>
            </div>
          </div>
          <p className="text-[#2e2e2e] text-[0.85rem] leading-[1.9] max-w-xs">{company.tagline}</p>
          <div className="mt-7 w-16 h-px bg-gradient-to-r from-[#cc0000]/50 to-transparent"/>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-[#282828] text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-7">
            Quick Links
          </p>
          <ul className="space-y-4 list-none">
            {["#about","#services","#experience","#partners","#contact"].map(h => (
              <li key={h}>
                <a href={h}
                   className="text-[#2e2e2e] hover:text-[#cc0000] text-[0.85rem]
                              capitalize tracking-wide transition-colors">
                  {h.replace("#","")}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[#282828] text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-7">
            Contact
          </p>
          <div className="space-y-5">
            <div className="flex gap-3">
              <MapPin size={15} className="text-[#cc0000] mt-0.5 flex-shrink-0"/>
              <p className="text-[#2e2e2e] text-[0.85rem] leading-[1.85]">{company.address}</p>
            </div>
            {company.phones.map(ph => (
              <div key={ph} className="flex gap-3 items-center">
                <Phone size={15} className="text-[#cc0000] flex-shrink-0"/>
                <a href={`tel:${ph}`}
                   className="text-[#2e2e2e] hover:text-[#c9a84c] font-mono
                              text-[0.82rem] transition-colors">
                  {ph}
                </a>
              </div>
            ))}
            <div className="flex gap-3 items-start">
              <Building2 size={15} className="text-[#cc0000] mt-0.5 flex-shrink-0"/>
              <p className="text-[#2e2e2e] text-[0.85rem]">
                Est. {company.established} · Inc. {company.incorporated}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/[0.04] py-7">
        <div className="cw flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#1e1e1e] text-[0.72rem] tracking-wider">
            © {new Date().getFullYear()} RTCC Concepts Ltd · {company.rc} · All rights reserved.
          </p>
          <p className="text-[#1e1e1e] text-[0.72rem] tracking-wider">FCT Abuja, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
