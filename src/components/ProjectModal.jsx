import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Tag
} from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in select-text">
      <div 
        className="w-full max-w-2xl bg-editor-card border border-gold-500/40 rounded-xl shadow-ide overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-editor-border bg-editor-deep">
          <div className="flex items-center gap-2">
            <span className="text-gold-400 font-mono text-xs">{project.fileBadge}</span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-slate-300 font-mono">{project.category}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-editor-hover transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono bg-gold-500/15 text-gold-300 border border-gold-500/30 mb-2">
              {project.status}
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">{project.title}</h2>
            <p className="text-gold-400 text-sm font-medium mt-0.5">{project.subtitle}</p>
          </div>

          <div className="text-slate-300 text-sm leading-relaxed space-y-3">
            <p>{project.longDescription}</p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-2 border-t border-editor-bordersubtle pt-4">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} className="text-gold-400" />
              <span>Architectural & Functional Highlights</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="border-t border-editor-bordersubtle pt-4 space-y-2">
            <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-editor-deep text-slate-200 border border-editor-border text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-editor-border bg-editor-deep">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-editor-hover hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-mono transition-colors border border-editor-border"
            >
              <GithubIcon size={14} />
              <span>View Repository</span>
            </a>
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded bg-gold-500 hover:bg-gold-400 text-editor-deep font-semibold text-xs font-mono transition-colors"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-slate-400 hover:text-white text-xs font-mono"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
