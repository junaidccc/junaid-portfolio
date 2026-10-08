import { personalData } from '../data/personal';
import { ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-black text-neutral-400 font-mono-accent text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="text-white font-bold font-editorial text-sm uppercase tracking-wider">
            {personalData.name}
          </span>
          <span className="text-neutral-500">/</span>
          <span className="text-neutral-400 uppercase tracking-widest text-[11px]">
            {personalData.role}
          </span>
        </div>

        {/* Center: Location & Copyright */}
        <div className="text-center md:text-left text-neutral-500 text-[11px]">
          © {CURRENT_YEAR} {personalData.name.toUpperCase()}. ALL RIGHTS RESERVED. // {personalData.location.toUpperCase()}
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="uppercase tracking-widest text-[11px]">BACK TO TOP</span>
          <div className="p-1.5 border border-white/10 group-hover:border-white transition-colors">
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}
