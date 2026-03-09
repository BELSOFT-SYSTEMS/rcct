import { MapPin, Phone, Building2 } from "lucide-react";
import { company } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 bg-[#cc0000] transform rotate-45" />
              <span className="relative text-white font-black text-sm z-10">R</span>
            </div>
            <div>
              <p className="text-white font-black tracking-[0.2em] text-xl" style={{ fontFamily: "var(--font-display)" }}>
                RTCC
              </p>
              <p className="text-[#555] text-[10px] tracking-[0.15em] uppercase">Concepts Ltd · {company.rc}</p>
            </div>
          </div>
          <p className="text-[#555] text-sm leading-relaxed max-w-xs">
            {company.tagline}
          </p>
          <div className="mt-6 h-px bg-gradient-to-r from-[#cc0000]/50 to-transparent w-24" />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#888] text-xs tracking-[0.2em] uppercase font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["#about", "#services", "#experience", "#partners", "#contact"].map((href) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#555] hover:text-[#cc0000] text-sm capitalize tracking-wide transition-colors animated-underline"
                >
                  {href.replace("#", "")}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#888] text-xs tracking-[0.2em] uppercase font-semibold mb-6">Contact</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={16} className="text-[#cc0000] mt-0.5 flex-shrink-0" />
              <p className="text-[#555] text-sm leading-relaxed">{company.address}</p>
            </div>
            {company.phones.map((phone) => (
              <div key={phone} className="flex gap-3 items-center">
                <Phone size={16} className="text-[#cc0000] flex-shrink-0" />
                <a href={`tel:${phone}`} className="text-[#555] hover:text-[#c9a84c] text-sm font-mono transition-colors">
                  {phone}
                </a>
              </div>
            ))}
            <div className="flex gap-3 items-start">
              <Building2 size={16} className="text-[#cc0000] mt-0.5 flex-shrink-0" />
              <p className="text-[#555] text-sm">Established {company.established} · Incorporated {company.incorporated}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#333] text-xs tracking-wider">
            © {new Date().getFullYear()} RTCC Concepts Ltd · {company.rc} · All rights reserved.
          </p>
          <p className="text-[#333] text-xs tracking-wider">
            FCT Abuja, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
