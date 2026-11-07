import React from 'react';
import { 
  Files, 
  Search, 
  GitBranch, 
  Layers, 
  Mail, 
  FileText, 
  Terminal, 
  ExternalLink,
  Monitor,
  Settings
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { personalInfo } from '../../data/portfolioData';

export default function ActivityBar({ 
  activeSidebar, 
  setActiveSidebar, 
  isTerminalOpen, 
  setIsTerminalOpen,
  viewMode,
  setViewMode,
  activeTab,
  setActiveTab,
  onOpenSettings
}) {
  const items = [
    { id: 'explorer', icon: Files, label: 'Explorer (Ctrl+Shift+E)' },
    { id: 'search', icon: Search, label: 'Search Skills & Projects' },
    { id: 'source-control', icon: GitBranch, label: 'Source Control (Git)' },
    { id: 'projects-view', icon: Layers, label: 'Projects & Work' },
    { id: 'contact-view', icon: Mail, label: 'Contact Bhaskar' }
  ];

  const handleItemClick = (id) => {
    if (id === 'projects-view') {
      setActiveTab('projects');
      if (activeSidebar !== 'explorer') setActiveSidebar('explorer');
    } else if (id === 'contact-view') {
      setActiveTab('contact');
      if (activeSidebar !== 'explorer') setActiveSidebar('explorer');
    } else {
      if (activeSidebar === id) {
        // Toggle sidebar open/closed
        setActiveSidebar(null);
      } else {
        setActiveSidebar(id);
      }
    }
  };

  return (
    <aside className="w-12 md:w-13 bg-editor-activitybar border-r border-editor-border flex flex-col justify-between items-center py-3 select-none z-30 flex-shrink-0">
      {/* Top Navigation Icons */}
      <div className="flex flex-col items-center gap-2 w-full">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSidebar === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              title={item.label}
              className={`relative w-full py-2.5 flex justify-center items-center transition-colors group ${
                isActive 
                  ? 'text-gold-400' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold-500 shadow-gold-sm" />
              )}
              <Icon size={21} strokeWidth={1.75} className="group-hover:scale-110 transition-transform" />
            </button>
          );
        })}
      </div>

      {/* Bottom Utility Icons */}
      <div className="flex flex-col items-center gap-3 w-full">
        {/* Toggle Mode: IDE vs Full Page */}
        <button
          onClick={() => setViewMode(viewMode === 'ide' ? 'page' : 'ide')}
          title={viewMode === 'ide' ? 'Switch to Full Page Scroll View' : 'Switch to VS Code IDE Workspace'}
          className={`w-full py-2 flex justify-center items-center transition-all ${
            viewMode === 'page' ? 'text-gold-400' : 'text-slate-400 hover:text-gold-300'
          }`}
        >
          <Monitor size={19} strokeWidth={1.8} />
        </button>

        {/* Toggle Terminal */}
        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          title="Toggle Terminal Panel (`)"
          className={`w-full py-2 flex justify-center items-center transition-colors ${
            isTerminalOpen ? 'text-gold-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Terminal size={19} strokeWidth={1.8} />
        </button>

        {/* GitHub Link */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
          className="w-full py-2 flex justify-center items-center text-slate-400 hover:text-slate-100 transition-colors"
        >
          <GithubIcon size={19} />
        </a>

        {/* LinkedIn Link */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="w-full py-2 flex justify-center items-center text-slate-400 hover:text-[#0077b5] transition-colors"
        >
          <LinkedinIcon size={19} />
        </a>

        {/* Settings & Preferences */}
        <button
          onClick={onOpenSettings}
          title="Settings & Theme Customizer"
          className="w-full py-2 flex justify-center items-center text-slate-400 hover:text-gold-300 transition-colors"
        >
          <Settings size={19} strokeWidth={1.8} />
        </button>
      </div>
    </aside>
  );
}
