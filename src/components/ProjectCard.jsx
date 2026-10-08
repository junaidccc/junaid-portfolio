import { ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <article className="group relative bg-[#09090b] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Top Card Meta */}
      <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between font-mono-accent text-xs">
        <div className="flex items-center gap-2 text-neutral-400">
          <span className="font-bold text-white text-sm">[{project.number}]</span>
          <span>//</span>
          <span className="uppercase tracking-wider">{project.category}</span>
        </div>
        <span className="text-neutral-400">{project.year}</span>
      </div>

      {/* Visual Image Preview Frame */}
      <div
        onClick={() => onOpenModal(project)}
        className="cursor-pointer relative w-full aspect-[16/10] overflow-hidden bg-neutral-950 border-b border-white/10 group-hover:bg-neutral-900 transition-colors"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center filter grayscale contrast-[110%] group-hover:scale-105 group-hover:contrast-125 transition-all duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="px-4 py-2 bg-black/85 backdrop-blur-sm border border-white/20 font-mono-accent text-xs uppercase tracking-widest text-white flex items-center gap-2">
            <span>INSPECT SPECIFICATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-editorial font-bold text-white uppercase group-hover:text-neutral-100 transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <span className="text-xs font-mono-accent text-neutral-400 uppercase tracking-wider">
                {project.subtitle}
              </span>
            )}
          </div>

          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          {/* Key Features Quick List */}
          {project.highlights && (
            <ul className="space-y-1.5 mb-6 text-[11px] sm:text-xs text-neutral-400 font-mono-accent">
              {project.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors shrink-0"></span>
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Footer: Tech Stack and Actions */}
        <div className="pt-4 border-t border-white/10 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-white/[0.04] border border-white/10 text-neutral-300 text-[11px] font-mono-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => onOpenModal(project)}
              className="text-xs font-mono-accent uppercase tracking-wider text-white hover:text-neutral-300 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Full Details</span>
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="p-2 border border-white/15 text-neutral-300 hover:text-white hover:border-white transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
