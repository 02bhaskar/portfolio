import React from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Sparkles, 
  Cpu, 
  Award, 
  Layers, 
  ExternalLink,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { personalInfo } from '../../data/portfolioData';

export default function HeroSection({ setActiveTab }) {
  return (
    <div className="min-h-full py-8 md:py-14 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-center">
      {/* Top Status Pill */}
      <div className="flex items-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-editor-card border border-editor-border text-xs text-slate-300 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] text-emerald-400 font-medium">status:</span>
          <span>{personalInfo.status}</span>
        </div>
      </div>

      {/* Main Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Intro & Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="font-mono text-sm text-gold-400 font-semibold tracking-wide flex items-center gap-2">
              <Sparkles size={16} />
              <span>Hello, World! I am</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              {personalInfo.name}
            </h1>

            <p className="text-lg sm:text-xl font-medium gold-gradient-text">
              {personalInfo.tagline}
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Pre-final Year B.Tech student in <span className="text-white font-semibold">Artificial Intelligence & Data Science</span> at <span className="text-white font-semibold">Dr. N.G.P. Institute of Technology</span>. Passionate about architecting intelligent solutions across Agentic AI, modern Full-Stack engineering, and real-world embedded acoustic systems.
          </p>

          {/* Quick Meta Indicators */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
            <div className="flex items-center gap-1.5 bg-editor-card px-2.5 py-1 rounded border border-editor-border">
              <MapPin size={13} className="text-gold-400" />
              <span>Hosur & Coimbatore, TN</span>
            </div>
            <div className="flex items-center gap-1.5 bg-editor-card px-2.5 py-1 rounded border border-editor-border">
              <GraduationCap size={13} className="text-cyan-400" />
              <span>B.Tech AI & DS (2023–2027)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-editor-card px-2.5 py-1 rounded border border-editor-border">
              <Award size={13} className="text-emerald-400" />
              <span>SIH Finalist & Vishwakarma '25</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('projects')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold-500 hover:bg-gold-400 text-editor-deep font-semibold text-sm transition-all shadow-gold-sm hover:shadow-gold-glow group"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('resume')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-editor-card hover:bg-editor-hover text-slate-200 hover:text-gold-300 border border-editor-border hover:border-gold-500/50 font-medium text-sm transition-all"
            >
              <Download size={15} />
              <span>Resume PDF</span>
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-md bg-transparent hover:bg-editor-hover text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              <Mail size={15} />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Social Profiles Row */}
          <div className="flex items-center gap-4 pt-3 text-slate-400 text-xs">
            <span className="font-mono text-slate-500">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#0077b5] transition-colors"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Mail size={15} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Card & Terminal Snippet */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm bg-editor-card border border-editor-border rounded-xl p-5 shadow-ide relative group hover:border-gold-500/50 transition-all">
            {/* Ambient Gold Glow Behind Card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500/20 to-cyan-500/10 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Profile Image with Gold Ring */}
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-gold-500 via-amber-300 to-editor-border shadow-gold-sm">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full bg-editor-deep"
                    onError={(e) => {
                      // Fallback if image fails
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full rounded-full bg-editor-deep text-gold-300 items-center justify-center font-bold text-2xl font-mono">
                    BG
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 bg-editor-card p-1 rounded-full border border-editor-border text-emerald-400" title="Active">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
              </div>

              <h2 className="text-xl font-bold text-white font-mono">{personalInfo.name}</h2>
              <p className="text-xs text-gold-400 font-mono mb-3">@02bhaskar</p>
              
              <div className="w-full text-left bg-editor-terminal border border-editor-bordersubtle rounded-md p-3 font-mono text-xs text-slate-300 space-y-1">
                <div className="text-slate-500 text-[10px] pb-1 border-b border-editor-bordersubtle flex justify-between">
                  <span>developer_spec.json</span>
                  <span className="text-gold-400">active</span>
                </div>
                <div className="pt-1">
                  <span className="text-purple-400">role</span>: <span className="text-emerald-300">"AI & Data Science"</span>
                </div>
                <div>
                  <span className="text-purple-400">college</span>: <span className="text-cyan-300">"Dr. N.G.P. iTech"</span>
                </div>
                <div>
                  <span className="text-purple-400">hardware</span>: <span className="text-amber-300">"ESP32 • LMS DSP"</span>
                </div>
                <div>
                  <span className="text-purple-400">stack</span>: <span className="text-slate-200">"React, Node, Flutter"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Key Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-editor-border">
        {personalInfo.stats.map((stat, idx) => (
          <div key={idx} className="bg-editor-card/60 border border-editor-bordersubtle rounded-lg p-4 hover:border-gold-500/40 transition-colors">
            <div className="text-slate-400 text-xs font-mono">{stat.label}</div>
            <div className="text-xl sm:text-2xl font-extrabold text-white mt-1 font-mono text-gold-300">{stat.value}</div>
            <div className="text-slate-500 text-[11px] mt-0.5">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
