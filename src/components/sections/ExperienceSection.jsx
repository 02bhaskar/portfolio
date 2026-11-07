import React from 'react';
import { 
  Briefcase, 
  Award, 
  GitCommit, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Calendar, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { experienceData, achievementsData } from '../../data/portfolioData';

export default function ExperienceSection() {
  return (
    <div className="py-8 md:py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-editor-border pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
          <span>Experience.yml</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Internship Experience & Competitive Recognition</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Experience & Achievements
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Industry software internship workflows, national hackathons, and certified academic distinctions.
        </p>
      </div>

      {/* Part 1: Internship Experience */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-mono text-gold-300 font-semibold">
          <Briefcase size={17} />
          <span>INDUSTRY WORK EXPERIENCE</span>
        </div>

        <div className="space-y-4">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="bg-editor-card border border-editor-border rounded-xl p-6 relative hover:border-gold-500/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-editor-bordersubtle pb-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-medium mt-0.5">
                    <Building2 size={14} />
                    <span>{exp.company}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-editor-deep text-cyan-400 text-xs font-mono border border-editor-bordersubtle self-start sm:self-auto">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono font-semibold text-slate-400">KEY CONTRIBUTIONS:</div>
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Honors & Achievements (Git-Commit Timeline) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm font-mono text-gold-300 font-semibold">
          <Award size={17} />
          <span>COMPETITIONS & DISTINCTIONS</span>
        </div>

        <div className="relative border-l-2 border-editor-border ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {achievementsData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Git commit node icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-6 h-6 rounded-full bg-editor-deep border-2 border-gold-500 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                <GitCommit size={14} />
              </div>

              {/* Achievement Card */}
              <div className="bg-editor-card border border-editor-bordersubtle rounded-xl p-5 hover:border-gold-500/40 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-gold-500/15 text-gold-300 border border-gold-500/30">
                    <Sparkles size={11} />
                    <span>{item.badge}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{item.year}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs text-slate-400 font-mono">
                    {item.organization}
                  </span>
                  {item.score && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-editor-deep text-cyan-400 border border-editor-bordersubtle">
                      {item.score}
                    </span>
                  )}
                </div>

                {item.problemStatement && (
                  <div className="mb-2.5 p-2.5 rounded bg-editor-deep/90 border border-editor-bordersubtle font-mono text-[11px] text-gold-300">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5">Problem Statement:</span>
                    "{item.problemStatement}"
                  </div>
                )}

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

