import { personalData } from '../data/personal';
import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  const { quote } = personalData;

  return (
    <section className="py-20 sm:py-28 border-t border-white/10 bg-[#070709] relative overflow-hidden">
      {/* Editorial Decorative Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Quote Icon */}
        <div className="inline-flex p-3 bg-white/5 border border-white/15 mb-8 text-white">
          <QuoteIcon className="w-5 h-5 text-white" />
        </div>

        {/* Quote Blockquote */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-editorial font-light text-white leading-tight tracking-tight uppercase mb-8">
          "{quote.text}"
        </blockquote>

        {/* Citation */}
        <div className="inline-flex items-center gap-3 font-mono-accent text-xs tracking-widest uppercase text-neutral-400">
          <span className="w-6 h-[1px] bg-neutral-600"></span>
          <span className="text-white font-bold">{quote.author}</span>
          <span>//</span>
          <span>{quote.context}</span>
          <span className="w-6 h-[1px] bg-neutral-600"></span>
        </div>
      </div>
    </section>
  );
}
