import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Cpu,
  Layers
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from '../ProjectModal';

export default function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & Systems', 'Hardware & Edge DSP', 'Web & AI', 'Mobile'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.includes(selectedFilter) || selectedFilter.includes(p.category));

  return (
    <div className="py-8 md:py-12 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="border-b border-editor-border pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
          <span>Projects.ts</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Engineering Work & Flagship Prototypes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Featured Projects & Prototypes
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Production systems, research platforms, hardware acoustic DSP prototypes, and cross-platform applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs font-mono">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-3 py-1.5 rounded border transition-colors ${
              selectedFilter === cat
                ? 'bg-gold-500/20 text-gold-300 border-gold-500/50 font-bold'
                : 'bg-editor-card text-slate-400 border-editor-border hover:bg-editor-hover hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`bg-editor-card border rounded-xl p-5 sm:p-6 flex flex-col justify-between transition-all hover:border-gold-500/50 hover:bg-editor-cardhover group relative ${
              project.featured ? 'border-gold-500/30' : 'border-editor-bordersubtle'
            }`}
          >
            {/* Top Bar inside card */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gold-400 bg-editor-deep px-2 py-0.5 rounded border border-editor-bordersubtle">
                    {project.fileBadge}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      <Sparkles size={11} />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-mono text-slate-500">
                  {project.category}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-gold-400/90 font-mono mt-0.5 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-editor-deep text-slate-300 border border-editor-bordersubtle/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-editor-bordersubtle flex items-center justify-between mt-auto">
              <button
                onClick={() => setActiveModalProject(project)}
                className="flex items-center gap-1.5 text-xs font-mono text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>Architecture Details</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded hover:bg-editor-deep text-slate-400 hover:text-white transition-colors"
                  title="GitHub Repository"
                >
                  <GithubIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}
