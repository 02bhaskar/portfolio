import React, { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Award,
  Eye,
  Mail,
  Phone
} from 'lucide-react';
import { personalInfo, education, experienceData, achievementsData, projectsData } from '../../data/portfolioData';

export default function ResumeSection() {
  const [showIframe, setShowIframe] = useState(true);

  return (
    <div className="py-8 md:py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-editor-border pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
            <span>Resume.pdf</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Resume & Professional Profile
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.resumeUrl}
            download="Bhaskar_G_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold-500 hover:bg-gold-400 text-editor-deep font-bold text-sm transition-all shadow-gold-sm hover:shadow-gold-glow"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-md bg-editor-card hover:bg-editor-hover border border-editor-border text-slate-300 text-sm font-medium transition-colors"
            title="Open raw PDF in new browser tab"
          >
            <ExternalLink size={15} />
            <span className="hidden sm:inline">Open in Tab</span>
          </a>
        </div>
      </div>

      {/* Structured CV View */}
      <div className="bg-editor-card border border-editor-border rounded-xl p-6 sm:p-8 space-y-8 shadow-ide">
        {/* CV Header */}
        <div className="border-b border-editor-bordersubtle pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{personalInfo.name}</h2>
            <p className="text-gold-400 font-medium text-sm mt-0.5">{personalInfo.tagline}</p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-2 font-mono">
              <span className="flex items-center gap-1">
                <Mail size={12} className="text-gold-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone size={12} className="text-cyan-400" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <span className="inline-block px-3 py-1 rounded bg-editor-deep border border-gold-500/30 text-gold-300 text-xs font-mono">
              Class of 2027
            </span>
          </div>
        </div>

        {/* Education Block */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-2">
            <GraduationCap size={15} />
            <span>Education</span>
          </h3>
          <div className="bg-editor-deep/60 rounded-lg p-4 border border-editor-bordersubtle/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <span className="font-bold text-white text-sm">{education.degree}</span>
              <span className="text-xs font-mono text-cyan-400">{education.duration}</span>
            </div>
            <div className="text-xs text-gold-300 mt-0.5">{education.institution}, {education.location}</div>
            <div className="text-xs text-slate-400 mt-1 font-mono">Status: {education.status}</div>
          </div>
        </div>

        {/* Experience Block */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-2">
            <Briefcase size={15} />
            <span>Internship & Industry Exposure</span>
          </h3>
          {experienceData.map((exp, idx) => (
            <div key={idx} className="bg-editor-deep/60 rounded-lg p-4 border border-editor-bordersubtle/60 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-white text-sm">{exp.role}</span>
                <span className="text-xs font-mono text-slate-400">{exp.period}</span>
              </div>
              <div className="text-xs text-slate-300">{exp.company} • {exp.location}</div>
              <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-1">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Projects Block */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-2">
            <Sparkles size={15} />
            <span>Highlighted Systems & Prototypes</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projectsData.map((p) => (
              <div key={p.id} className="bg-editor-deep/60 rounded-lg p-3.5 border border-editor-bordersubtle/60 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs font-mono">{p.title}</span>
                  <span className="text-[10px] text-gold-400 font-mono">{p.category}</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">{p.description}</p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">
                  Stack: {p.technologies.slice(0, 4).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold flex items-center gap-2">
            <Award size={15} />
            <span>Honors & Certifications</span>
          </h3>
          <div className="space-y-2">
            {achievementsData.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-editor-deep/40 p-2.5 rounded border border-editor-bordersubtle/40">
                <CheckCircle2 size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold text-white">{item.title}</span>
                  <span className="text-slate-400"> — {item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded PDF Viewer Frame */}
      <div className="bg-editor-card border border-editor-border rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Eye size={14} className="text-gold-400" />
            <span>Direct PDF Canvas Viewer (Bhaskar resume.pdf)</span>
          </span>
          <button
            onClick={() => setShowIframe(!showIframe)}
            className="hover:text-gold-300 transition-colors"
          >
            {showIframe ? 'Collapse Preview' : 'Expand Preview'}
          </button>
        </div>

        {showIframe && (
          <div className="w-full h-[600px] rounded-lg overflow-hidden border border-editor-bordersubtle bg-editor-deep">
            <iframe
              src="/resume.pdf"
              title="Bhaskar G Resume PDF"
              className="w-full h-full border-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}

