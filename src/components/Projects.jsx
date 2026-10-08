import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const sectionRef = useRef(null);

  const categories = ['ALL', 'Web Application', 'React + Tailwind'];

  const filteredProjects = activeFilter === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-item-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 border-t border-white/10 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-accent text-xs uppercase tracking-widest text-neutral-400 mb-3">
              <span className="text-white font-bold">01</span>
              <span>//</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-extrabold text-white uppercase tracking-tight">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 font-mono-accent text-xs uppercase tracking-wider transition-all duration-200 border ${
                    activeFilter === cat
                      ? 'bg-white text-black border-white font-semibold'
                      : 'bg-transparent text-neutral-400 border-white/10 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="font-mono-accent text-xs text-neutral-400 hidden lg:block">
              [{filteredProjects.length.toString().padStart(2, '0')} / {projectsData.length.toString().padStart(2, '0')}]
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-item-card">
              <ProjectCard
                project={project}
                onOpenModal={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* Section Note */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-accent text-xs text-neutral-400">
          <p>
            * ALL PROJECT CARDS ARE DATA-DRIVEN VIA <code className="text-neutral-300">src/data/projects.js</code>
          </p>
          <a
            href="https://github.com/junaidccc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white hover:text-neutral-300 transition-colors uppercase tracking-wider"
          >
            <span>EXPLORE GITHUB ARCHIVE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
