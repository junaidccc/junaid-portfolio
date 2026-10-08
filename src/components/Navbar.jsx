import { useState, useEffect } from 'react';
import { personalData } from '../data/personal';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white tracking-widest font-editorial text-lg font-bold"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white group-hover:scale-125 transition-transform duration-300"></span>
          <span>{personalData.name.toUpperCase()}</span>
          
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono-accent uppercase tracking-wider text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 text-xs font-mono-accent uppercase tracking-wider px-4 py-2 border border-white/30 text-white rounded-none hover:bg-white hover:text-black transition-all duration-300"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-neutral-300 hover:text-white border border-white/10 rounded focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bg-black/95 backdrop-blur-xl border-b border-white/15 px-6 py-8 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-6">
            <div className="text-[10px] font-mono-accent text-neutral-400 uppercase tracking-widest border-b border-white/10 pb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-editorial text-neutral-200 hover:text-white flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-white text-black font-mono-accent text-xs uppercase tracking-widest font-semibold"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
