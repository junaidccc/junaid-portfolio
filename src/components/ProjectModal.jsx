import { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#0d0d0f] border border-white/20 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 font-mono-accent text-xs text-neutral-400 uppercase tracking-widest mb-3">
          <span>PROJECT {project.number}</span>
          <span>•</span>
          <span>{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase mb-4">
          {project.title} {project.subtitle ? `// ${project.subtitle}` : ''}
        </h3>

        {/* Preview Image Frame */}
        <div className="w-full h-64 sm:h-80 border border-white/10 bg-neutral-950 overflow-hidden mb-6 relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter grayscale contrast-110"
          />
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 font-mono-accent text-[10px] text-neutral-400 border border-white/10">
            UI ARCHIVE MOCKUP
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h4 className="font-mono-accent text-xs uppercase tracking-wider text-neutral-400 mb-3 border-b border-white/10 pb-1">
              Key Features &amp; Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-mono-accent text-xs uppercase tracking-wider text-neutral-400 mb-2 border-b border-white/10 pb-1">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/5 border border-white/15 text-white text-xs font-mono-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black px-5 py-2.5 font-mono-accent text-xs uppercase font-bold tracking-wider hover:bg-neutral-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-white/20 text-neutral-300 font-mono-accent text-xs uppercase tracking-wider hover:border-white hover:text-white transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
