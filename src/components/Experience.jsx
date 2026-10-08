import { personalData } from '../data/personal';
import { skillsData } from '../data/skills';
import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from 'lucide-react';

export default function Experience() {
  const exp = personalData.experience[0];

  return (
    <section id="experience" className="py-24 sm:py-32 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-3">
              <span className="text-white font-bold">02</span>
              <span>//</span>
              <span>EXPERIENCE &amp; CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-extrabold text-white uppercase tracking-tight">
              WORK &amp; EXPERTISE
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            Focused on crafting high-standard frontend applications and editorial design systems with authentic project delivery.
          </p>
        </div>

        {/* Experience & Skills Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Experience Card */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-white" />
              <span>CAREER TIMELINE</span>
            </h3>

            <div className="relative flex-1 p-8 bg-[#0a0a0c] border border-white/15 hover:border-white/30 transition-all duration-300">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/40"></div>

              {/* Status Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 bg-white text-black font-mono-accent text-xs uppercase font-bold tracking-wider">
                  {exp.period}
                </span>
                <span className="font-mono-accent text-xs text-neutral-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </span>
              </div>

              {/* Role Title */}
              <h4 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase mb-2">
                {exp.role}
              </h4>

              <div className="flex items-center gap-3 text-xs font-mono-accent text-neutral-400 mb-6 pb-4 border-b border-white/10">
                <span className="text-white">{exp.type}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {personalData.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                <span className="block font-mono-accent text-[11px] uppercase tracking-wider text-neutral-400">
                  Focus Areas:
                </span>
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Technologies Matrix */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-4 flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-white" />
              <span>TECHNICAL STACK &amp; METHODOLOGY</span>
            </h3>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {skillsData.categories.map((cat, idx) => (
                <div
                  key={cat.title}
                  className="p-6 bg-[#0a0a0c] border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-sm font-bold text-white uppercase tracking-wider">
                      {cat.title}
                    </span>
                    <span className="font-mono-accent text-[10px] text-neutral-400 uppercase">
                      CAT 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-3 py-1.5 bg-white/[0.04] border border-white/10 hover:border-white/40 text-xs font-mono-accent text-neutral-200 transition-colors"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
