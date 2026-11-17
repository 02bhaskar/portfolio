import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Brain, 
  Cpu, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  BookOpen,
  Award
} from 'lucide-react';
import { personalInfo, education } from '../../data/portfolioData';

export default function AboutSection({ setActiveTab }) {
  return (
    <div className="py-8 md:py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-10">
      {/* Markdown Style Header */}
      <div className="border-b border-editor-border pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
          <span>About.md</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Academic & Technical Biography</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          About Me & My Engineering Journey
        </h1>
      </div>

      {/* Profile & Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column: Academic Card */}
        <div className="bg-editor-card border border-editor-border rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2 text-gold-400 font-mono text-xs font-semibold">
            <GraduationCap size={16} />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">{education.degree}</h3>
            <p className="text-gold-300 text-xs font-medium">{education.institution}</p>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs pt-1">
              <MapPin size={13} className="text-slate-500" />
              <span>{education.location}</span>
            </div>
            <div className="inline-block mt-2 px-2 py-0.5 rounded bg-editor-terminal text-cyan-400 text-[11px] font-mono border border-editor-bordersubtle">
              {education.status} • {education.duration}
            </div>
          </div>

          <div className="border-t border-editor-bordersubtle pt-3 space-y-2 text-xs text-slate-300">
            <div className="font-semibold text-slate-400 font-mono text-[11px]">KEY HIGHLIGHTS:</div>
            {education.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-[12px] leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right 2 Columns: Bio & Philosophy */}
        <div className="md:col-span-2 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            I am a Pre-final Year student pursuing my <strong className="text-white">B.Tech in Artificial Intelligence & Data Science</strong> at <strong className="text-white">Dr. N.G.P. Institute of Technology, Coimbatore</strong>, Tamil Nadu.
          </p>

          <p>
            My engineering philosophy centers around <strong className="text-gold-300">practical innovation</strong>. Rather than confining code to theoretical exercises, I build solutions that tackle physical and algorithmic challenges—from predictive agricultural advisory systems (<em className="text-white">AgroSmart</em>) and route logistics in rugged terrains (<em className="text-white">RoutingVanguard</em>), to embedded hardware solutions like <em className="text-white">EchoShield ANC</em>, an active acoustic cancellation device leveraging DSP LMS algorithms on an ESP32.
          </p>

          {/* Three Pillars Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-lg bg-editor-card/70 border border-editor-bordersubtle hover:border-gold-500/40 transition-colors">
              <Brain size={20} className="text-gold-400 mb-2" />
              <h4 className="font-bold text-white text-xs font-mono">AI & Data Science</h4>
              <p className="text-slate-400 text-[11px] mt-1 leading-normal">
                Machine Learning, Generative AI models, and Agentic autonomous pipelines.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-editor-card/70 border border-editor-bordersubtle hover:border-gold-500/40 transition-colors">
              <Cpu size={20} className="text-cyan-400 mb-2" />
              <h4 className="font-bold text-white text-xs font-mono">Hardware & Systems</h4>
              <p className="text-slate-400 text-[11px] mt-1 leading-normal">
                ESP32, digital signal processing (FFT/LMS), sensors, and low-latency C++.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-editor-card/70 border border-editor-bordersubtle hover:border-gold-500/40 transition-colors">
              <Compass size={20} className="text-emerald-400 mb-2" />
              <h4 className="font-bold text-white text-xs font-mono">Full-Stack & Mobile</h4>
              <p className="text-slate-400 text-[11px] mt-1 leading-normal">
                Scalable React & Node.js web platforms alongside cross-platform Flutter apps.
              </p>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('skills')}
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-editor-card hover:bg-editor-hover border border-editor-border text-gold-300 text-xs font-mono transition-colors"
            >
              <span>Explore Technical Skills (Skills.json)</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className="flex items-center gap-1.5 px-4 py-2 rounded bg-gold-500 hover:bg-gold-400 text-editor-deep font-semibold text-xs font-mono transition-colors"
            >
              <span>Review Featured Projects</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

