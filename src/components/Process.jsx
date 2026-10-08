import { personalData } from '../data/personal';
import { Search, Compass, Palette, Code, Rocket, ArrowRight } from 'lucide-react';

export default function Process() {
  const icons = [Search, Compass, Palette, Code, Rocket];

  return (
    <section id="process" className="py-24 sm:py-32 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-3">
              <span className="text-white font-bold">04</span>
              <span>//</span>
              <span>METHODOLOGY &amp; WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-extrabold text-white uppercase tracking-tight">
              DESIGN PROCESS
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            A structured 5-phase engineering methodology guaranteeing clarity, architectural integrity, and deliberate execution.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {personalData.process.map((step, idx) => {
            const Icon = icons[idx] || Code;
            return (
              <div
                key={step.number}
                className="group relative p-6 bg-[#08080a] border border-white/10 hover:border-white/40 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <span className="text-2xl font-mono-accent font-bold text-white/50 group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <div className="p-2 bg-white/5 border border-white/10 text-neutral-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-editorial font-bold text-white uppercase mb-3 tracking-wide">
                    {step.title}
                  </h3>

                  <p className="text-neutral-300 text-xs leading-relaxed mb-4 font-light">
                    {step.summary}
                  </p>
                </div>

                {/* Step Details */}
                <div className="pt-4 border-t border-white/5">
                  <p className="text-neutral-400 text-[11px] leading-relaxed font-mono-accent">
                    {step.details}
                  </p>
                </div>

                {/* Arrow connector indicator (hidden on last) */}
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-neutral-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
