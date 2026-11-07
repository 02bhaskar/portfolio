import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  ArrowUp, 
  Mail, 
  Sparkles, 
  Download, 
  Code2 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import ExperienceSection from '../sections/ExperienceSection';
import ResumeSection from '../sections/ResumeSection';
import ContactSection from '../sections/ContactSection';
import { personalInfo } from '../../data/portfolioData';

export default function FullPageView({ setViewMode, setActiveTab }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', id: 'about-sec' },
    { label: 'Skills', id: 'skills-sec' },
    { label: 'Projects', id: 'projects-sec' },
    { label: 'Experience', id: 'exp-sec' },
    { label: 'Resume', id: 'resume-sec' },
    { label: 'Contact', id: 'contact-sec' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-editor-deep text-slate-200">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-editor-deep/90 backdrop-blur-md border-b border-editor-border px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 text-gold-300 font-mono font-bold flex items-center justify-center text-sm shadow-gold-sm">
            BG
          </div>
          <div>
            <span className="font-bold text-white text-sm sm:text-base font-mono">{personalInfo.name}</span>
            <span className="hidden sm:inline text-xs text-slate-400 font-mono ml-2">| AI & DS</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-mono text-slate-400">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-gold-300 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Switch to IDE Mode Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setViewMode('ide')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gold-500 hover:bg-gold-400 text-editor-deep font-bold text-xs font-mono transition-all shadow-gold-sm"
            title="Switch back to full VS Code IDE Workspace view"
          >
            <Code2 size={14} />
            <span>Switch to IDE Mode</span>
          </button>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="divide-y divide-editor-border/50">
        <section id="hero-sec">
          <HeroSection setActiveTab={(tab) => {
            if (tab === 'projects') scrollToSection('projects-sec');
            else if (tab === 'resume') scrollToSection('resume-sec');
            else if (tab === 'contact') scrollToSection('contact-sec');
          }} />
        </section>

        <section id="about-sec" className="scroll-mt-16">
          <AboutSection setActiveTab={(tab) => {
            if (tab === 'skills') scrollToSection('skills-sec');
            else if (tab === 'projects') scrollToSection('projects-sec');
          }} />
        </section>

        <section id="skills-sec" className="scroll-mt-16">
          <SkillsSection />
        </section>

        <section id="projects-sec" className="scroll-mt-16">
          <ProjectsSection />
        </section>

        <section id="exp-sec" className="scroll-mt-16">
          <ExperienceSection />
        </section>

        <section id="resume-sec" className="scroll-mt-16">
          <ResumeSection />
        </section>

        <section id="contact-sec" className="scroll-mt-16">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-editor-border bg-editor-card py-10 px-4 sm:px-8 text-center space-y-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-white font-bold text-base font-mono">{personalInfo.name}</h3>
            <p className="text-slate-400 text-xs mt-0.5">B.Tech AI & Data Science • Dr. N.G.P. iTech</p>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs font-mono">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold-300">
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#0077b5]">
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-gold-300">
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-editor-deep hover:bg-editor-hover text-gold-400 text-xs font-mono border border-editor-border transition-colors"
          >
            <ArrowUp size={13} />
            <span>Back to Top</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-500 font-mono pt-4 border-t border-editor-bordersubtle">
          © {new Date().getFullYear()} Bhaskar G. Engineered with React, Vite, Tailwind CSS & Framer Motion. VS Code × GitHub Gold Architecture.
        </div>
      </footer>

      {/* Floating Back to Top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gold-500 hover:bg-gold-400 text-editor-deep shadow-gold-glow transition-all z-50 hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
