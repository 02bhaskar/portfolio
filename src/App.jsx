import React, { useState, useEffect } from 'react';
import ActivityBar from './components/layout/ActivityBar';
import SidebarExplorer from './components/layout/SidebarExplorer';
import EditorTabs from './components/layout/EditorTabs';
import StatusBar from './components/layout/StatusBar';
import Terminal from './components/layout/Terminal';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';
import CodeView from './components/views/CodeView';
import FullPageView from './components/views/FullPageView';

import { codeSnippets } from './utils/codeSnippets';
import { workspaceFiles } from './data/portfolioData';
import { Menu, X, Monitor, Code2 } from 'lucide-react';

export default function App() {
  const [activeSidebar, setActiveSidebar] = useState('explorer');
  const [activeTab, setActiveTab] = useState('hero');
  const [openTabs, setOpenTabs] = useState(['hero', 'about', 'skills', 'projects', 'experience', 'resume', 'contact']);
  const [viewMode, setViewMode] = useState('ide'); // 'ide' | 'page'
  const [viewStyle, setViewStyle] = useState('preview'); // 'preview' | 'code'
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Keyboard shortcut listener (` for terminal toggle, Ctrl+B for sidebar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyCode = () => {
    const snippet = codeSnippets[activeTab] || '';
    navigator.clipboard.writeText(snippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // If in Full Page Scroll view mode
  if (viewMode === 'page') {
    return (
      <FullPageView 
        setViewMode={setViewMode} 
        setActiveTab={setActiveTab} 
      />
    );
  }

  // Active section renderer
  const renderActiveSection = () => {
    if (viewStyle === 'code') {
      return <CodeView activeTab={activeTab} />;
    }

    switch (activeTab) {
      case 'hero':
        return <HeroSection setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutSection setActiveTab={setActiveTab} />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'resume':
        return <ResumeSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-editor-deep text-slate-200 select-none">
      {/* Top Mobile Bar (visible only on mobile screens < 768px) */}
      <div className="md:hidden flex items-center justify-between px-3 py-2 bg-editor-deep border-b border-editor-border text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
            className="p-1 rounded hover:bg-editor-hover text-slate-300"
            title="Toggle File Explorer"
          >
            {mobileDrawerOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <span className="font-bold text-white font-mono">BHASKAR_PORTFOLIO</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('page')}
            className="px-2 py-1 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30 text-[11px] font-mono flex items-center gap-1"
          >
            <Monitor size={12} />
            <span>Full View</span>
          </button>
        </div>
      </div>

      {/* Main VS Code IDE Layout Container */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Activity Bar (Far Left) */}
        <ActivityBar
          activeSidebar={activeSidebar}
          setActiveSidebar={setActiveSidebar}
          isTerminalOpen={isTerminalOpen}
          setIsTerminalOpen={setIsTerminalOpen}
          viewMode={viewMode}
          setViewMode={setViewMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Sidebar Explorer (Desktop) */}
        <div className="hidden md:block h-full">
          <SidebarExplorer
            activeSidebar={activeSidebar}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
          />
        </div>

        {/* Mobile Slide-out Drawer */}
        {mobileDrawerOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-xs" 
              onClick={() => setMobileDrawerOpen(false)}
            />
            <div className="relative z-50 w-72 h-full bg-editor-sidebar border-r border-editor-border">
              <SidebarExplorer
                activeSidebar={activeSidebar || 'explorer'}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                openTabs={openTabs}
                setOpenTabs={setOpenTabs}
                onCloseSidebar={() => setMobileDrawerOpen(false)}
              />
            </div>
          </div>
        )}

        {/* Main Editor Center Window */}
        <main className="flex-1 flex flex-col min-w-0 bg-editor-bg overflow-hidden relative">
          {/* Editor Tab Bar & Breadcrumbs */}
          <EditorTabs
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            viewStyle={viewStyle}
            setViewStyle={setViewStyle}
            onCopyCode={handleCopyCode}
            isCopied={isCopied}
          />

          {/* Active File Content View Area */}
          <div className="flex-1 overflow-y-auto relative bg-grid-pattern select-text">
            {renderActiveSection()}
          </div>

          {/* Integrated Bottom Terminal */}
          <Terminal
            isOpen={isTerminalOpen}
            setIsOpen={setIsTerminalOpen}
            setActiveTab={setActiveTab}
          />
        </main>
      </div>

      {/* VS Code Bottom Status Bar */}
      <StatusBar
        activeTab={activeTab}
        isTerminalOpen={isTerminalOpen}
        setIsTerminalOpen={setIsTerminalOpen}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
    </div>
  );
}
