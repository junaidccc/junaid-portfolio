import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { personalData } from '../data/personal';
import { ArrowDown, ArrowUpRight, Compass } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const imageCardRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for entrance animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.1 } });

      tl.from('.hero-huge-text', {
        y: 80,
        opacity: 0,
        duration: 1.4,
      })
      .from(metaRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      }, '-=1.0')
      .from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.7')
      .from(nameRef.current, {
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 1.0,
      }, '-=0.7')
      .from(roleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.7')
      .from(imageCardRef.current, {
        scale: 0.94,
        opacity: 0,
        y: 40,
        duration: 1.2,
      }, '-=0.9')
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.7');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle interactive parallax movement on mouse move over the image card
  const handleMouseMove = (e) => {
    if (!imageCardRef.current || !imageRef.current) return;
    const rect = imageCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(imageRef.current, {
      x: x * 0.04,
      y: y * 0.04,
      rotateX: -y * 0.02,
      rotateY: x * 0.02,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-[#050505]"
    >
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Gigantic Background Typography: PORTFOLIO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="hero-huge-text block font-editorial font-extrabold text-[17vw] lg:text-[19vw] leading-none tracking-tighter text-white/[0.03] uppercase">
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Top Status Bar */}
        <div
          ref={metaRef}
          className="flex flex-wrap items-center justify-between gap-4 py-4 mb-8 border-b border-white/10 font-mono-accent text-[11px] text-neutral-400"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="uppercase tracking-widest text-neutral-300">
              AVAILABLE FOR NEW INITIATIVES
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-block tracking-widest uppercase">
              LOC // {personalData.location.toUpperCase()}
            </span>
            <span className="tracking-widest uppercase">EDITION // 2024–2026</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2 pb-8">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Salutation */}
            <div ref={titleRef} className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-neutral-500"></span>
              <p className="font-mono-accent text-xs sm:text-sm uppercase tracking-[0.25em] text-neutral-400">
                HELLO, I'M
              </p>
            </div>

            {/* Prominent Name */}
            <h1
              ref={nameRef}
              className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-editorial font-extrabold tracking-tight text-white uppercase leading-[0.9] mb-4"
            >
              {personalData.name}
            </h1>

            {/* Role / Discipline */}
            <div ref={roleRef} className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-editorial font-medium tracking-wide text-neutral-300 uppercase">
                {personalData.role}
              </h2>

              <p className="max-w-xl text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                {personalData.shortBio}
              </p>

              {/* Editorial Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2 pb-4">
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-mono-accent uppercase tracking-wider">
                  React Architecture
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-mono-accent uppercase tracking-wider">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-mono-accent uppercase tracking-wider">
                  GSAP Motion
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-mono-accent uppercase tracking-wider">
                  Minimal Grayscale
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-7 py-4 font-mono-accent text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-white/20 text-neutral-300 px-6 py-4 font-mono-accent text-xs uppercase tracking-widest hover:border-white hover:text-white transition-all duration-300"
              >
                <span>CONTACT ME</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Monochrome Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={imageCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] p-3 border border-white/15 bg-neutral-950/60 backdrop-blur-sm group"
            >
              {/* Corner crosshairs for technical editorial style */}
              <div className="absolute -top-1.5 -left-1.5 text-white/40 text-xs font-mono-accent select-none">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-white/40 text-xs font-mono-accent select-none">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-white/40 text-xs font-mono-accent select-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-white/40 text-xs font-mono-accent select-none">+</div>

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden border border-white/10 bg-neutral-900">
                <img
                  ref={imageRef}
                  src={personalData.profileImage}
                  onError={(e) => {
                    e.currentTarget.src = personalData.fallbackProfileImage;
                  }}
                  alt={`${personalData.name} - ${personalData.role}`}
                  className="w-full h-full object-cover object-center filter grayscale contrast-[115%] brightness-95 group-hover:scale-105 group-hover:contrast-125 transition-all duration-700 ease-out"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Editorial Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono-accent">
                  <div>
                    <span className="text-white font-bold tracking-wider block">
                       {personalData.name.toUpperCase()}
                    </span>
                    <span className="text-neutral-400 text-[10px]">
                      {personalData.location}
                    </span>
                  </div>
                  <span className="text-neutral-400 text-[10px] uppercase border border-white/10 px-2 py-0.5">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Side Spec Label */}
              <div className="absolute -right-7 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden md:block">
                <span className="text-[9px] font-mono-accent uppercase tracking-[0.3em] text-neutral-400 whitespace-nowrap">
                  ARCHIVE // 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator Bar */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between font-mono-accent text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-neutral-400" />
            <span className="uppercase tracking-widest">SCROLL TO EXPLORE ARCHIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-neutral-400 uppercase">
            <span>[01] SELECTED WORK</span>
            <span className="mx-2 text-white/20">•</span>
            <span>[02] EXPERIENCE</span>
            <span className="mx-2 text-white/20">•</span>
            <span>[03] PROCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
