import { personalData } from '../data/personal';
import { GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const edu = personalData.education[0];
  const cert = personalData.certificates[0];

  return (
    <section id="education" className="py-24 sm:py-32 border-t border-white/10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-3">
              <span className="text-white font-bold">03</span>
              <span>//</span>
              <span>EDUCATION &amp; CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-extrabold text-white uppercase tracking-tight">
              BACKGROUND &amp; CREDENTIALS
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
            Formal foundations and certified technical competencies in web development and software principles.
          </p>
        </div>

        {/* 2-Column Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Education */}
          <div className="relative p-8 bg-[#09090c] border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="p-3 bg-white/5 border border-white/10 text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-mono-accent text-xs uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/10 text-neutral-300">
                EDUCATION
              </span>
            </div>

            <div>
              <span className="block font-mono-accent text-[11px] text-neutral-400 uppercase tracking-widest mb-1">
                ACADEMIC QUALIFICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase mb-3">
                {edu.degree}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 font-light">
                {edu.institution}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono-accent text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-white" />
                {edu.location}
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                {edu.status}
              </span>
            </div>
          </div>

          {/* Card 2: Certificate */}
          <div className="relative p-8 bg-[#09090c] border border-white/15 hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="p-3 bg-white/5 border border-white/10 text-white">
                <Award className="w-6 h-6" />
              </div>
              <span className="font-mono-accent text-xs uppercase tracking-wider px-3 py-1 bg-white text-black font-semibold">
                CERTIFIED
              </span>
            </div>

            <div>
              <span className="block font-mono-accent text-[11px] text-neutral-400 uppercase tracking-widest mb-1">
                INDUSTRY CERTIFICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase mb-3">
                {cert.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-6 font-light">
                Issued by <span className="text-white font-medium">{cert.issuer}</span>
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono-accent text-xs text-neutral-400">
              <span className="text-neutral-300">
                {cert.highlight}
              </span>
              <span className="flex items-center gap-1.5 text-white">
                <Calendar className="w-3.5 h-3.5" />
                {cert.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
