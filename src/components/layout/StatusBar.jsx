import React from 'react';
import { 
  GitBranch, 
  AlertCircle, 
  CheckCircle2, 
  Terminal, 
  Bell, 
  Radio,
  Sparkles
} from 'lucide-react';
import { workspaceFiles, personalInfo } from '../../data/portfolioData';

export default function StatusBar({ 
  activeTab, 
  isTerminalOpen, 
  setIsTerminalOpen,
  viewMode,
  setViewMode
}) {
  const file = workspaceFiles.find(f => f.id === activeTab) || workspaceFiles[0];

  const getLanguage = (id) => {
    switch (id) {
      case 'hero': return 'TypeScript React (TSX)';
      case 'about': return 'Markdown (GFM)';
      case 'skills': return 'JSON (Schema)';
      case 'projects': return 'TypeScript (TS)';
      case 'experience': return 'YAML';
      case 'resume': return 'PDF Document';
      case 'contact': return 'Bash / Dotenv';
      default: return 'TypeScript';
    }
  };

  return (
    <footer className="h-6 bg-editor-statusbar border-t border-editor-border text-[11px] font-mono text-slate-400 flex items-center justify-between px-2 select-none z-30 flex-shrink-0">
      {/* Left Items */}
      <div className="flex items-center gap-3">
        {/* Remote / Environment Badge in Gold */}
        <div className="flex items-center gap-1 bg-gold-600/20 text-gold-300 px-2 py-0.5 rounded text-[10px] font-semibold">
          <span>&gt;&lt;</span>
          <span>bhaskar-dev</span>
        </div>

        {/* Git Branch */}
        <div className="flex items-center gap-1.5 hover:text-slate-200 cursor-pointer">
          <GitBranch size={12} className="text-gold-400" />
          <span>main*</span>
        </div>

        {/* Problems / Warnings */}
        <div className="hidden sm:flex items-center gap-2 hover:text-slate-200 cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 flex items-center justify-center text-[9px]">0</span>
            <span>Errors</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700 flex items-center justify-center text-[9px]">0</span>
            <span>Warnings</span>
          </div>
        </div>

        {/* Live Availability Status */}
        <div className="hidden md:flex items-center gap-1.5 text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-slate-300 font-sans font-medium">Open to Internships</span>
        </div>
      </div>

      {/* Right Items */}
      <div className="flex items-center gap-3 text-slate-400">
        {/* Terminal Toggle Button */}
        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className={`flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-editor-hover transition-colors ${
            isTerminalOpen ? 'text-gold-400' : 'hover:text-slate-200'
          }`}
          title="Toggle Terminal panel"
        >
          <Terminal size={12} />
          <span className="hidden sm:inline">Terminal</span>
        </button>

        {/* Active Language Mode */}
        <span className="hidden sm:inline text-slate-300">
          {getLanguage(activeTab)}
        </span>

        {/* Encoding */}
        <span className="hidden md:inline">UTF-8</span>

        {/* Gold Edition Badge */}
        <div className="flex items-center gap-1 text-gold-400 font-semibold text-[10px]">
          <Sparkles size={11} />
          <span className="hidden sm:inline">Gold Edition</span>
        </div>
      </div>
    </footer>
  );
}
