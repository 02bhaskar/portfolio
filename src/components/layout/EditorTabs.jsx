import React from 'react';
import { 
  X, 
  Code2, 
  Eye, 
  Sparkles,
  ChevronRight,
  Maximize2,
  Copy,
  Check
} from 'lucide-react';
import { workspaceFiles } from '../../data/portfolioData';

// Custom file icon mapper
const FileIcon = ({ type, className = "w-4 h-4" }) => {
  switch (type) {
    case 'React':
      return <span className={`text-cyan-400 font-bold ${className}`}>⚛</span>;
    case 'Markdown':
      return <span className={`text-blue-400 font-bold ${className}`}>M↓</span>;
    case 'Json':
      return <span className={`text-gold-400 font-bold ${className}`}>{}</span>;
    case 'Code':
      return <span className={`text-gold-300 font-bold ${className}`}>TS</span>;
    case 'Yaml':
      return <span className={`text-purple-400 font-bold ${className}`}>Y!</span>;
    case 'FileText':
      return <span className={`text-red-400 font-bold ${className}`}>PDF</span>;
    case 'Settings':
      return <span className={`text-emerald-400 font-bold ${className}`}>.env</span>;
    default:
      return <span className={`text-slate-400 ${className}`}>📄</span>;
  }
};

export default function EditorTabs({ 
  openTabs, 
  setOpenTabs, 
  activeTab, 
  setActiveTab,
  viewStyle,
  setViewStyle,
  onCopyCode,
  isCopied
}) {
  const currentFile = workspaceFiles.find(f => f.id === activeTab) || workspaceFiles[0];

  const handleCloseTab = (e, tabId) => {
    e.stopPropagation();
    const remaining = openTabs.filter(id => id !== tabId);
    setOpenTabs(remaining);
    if (activeTab === tabId && remaining.length > 0) {
      setActiveTab(remaining[remaining.length - 1]);
    }
  };

  return (
    <div className="bg-editor-deep border-b border-editor-border flex flex-col flex-shrink-0 z-10 select-none">
      {/* Top Tab Bar */}
      <div className="flex items-center justify-between overflow-x-auto no-scrollbar">
        {/* Open Tabs */}
        <div className="flex items-center">
          {openTabs.map((tabId) => {
            const file = workspaceFiles.find(f => f.id === tabId);
            if (!file) return null;
            const isActive = activeTab === tabId;
            return (
              <div
                key={tabId}
                onClick={() => setActiveTab(tabId)}
                className={`group flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono border-r border-editor-bordersubtle cursor-pointer transition-colors relative ${
                  isActive 
                    ? 'bg-editor-bg text-gold-300 font-semibold' 
                    : 'bg-editor-darker/60 text-slate-400 hover:bg-editor-hover/50 hover:text-slate-200'
                }`}
              >
                {/* Active Gold Top Indicator */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-500 shadow-gold-sm" />
                )}
                
                <FileIcon type={file.icon} className="w-3.5 h-3.5" />
                <span>{file.name}</span>
                
                <button
                  onClick={(e) => handleCloseTab(e, tabId)}
                  className="opacity-0 group-hover:opacity-100 hover:text-white p-0.5 rounded transition-opacity"
                  title="Close tab"
                >
                  <X size={12} />
                </button>
              </div>
            );
          })}
        </div>

        {/* View Switcher: Preview UI vs Raw Code */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 flex-shrink-0">
          {viewStyle === 'code' && (
            <button
              onClick={onCopyCode}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-editor-card hover:bg-editor-hover text-slate-300 hover:text-gold-300 text-xs border border-editor-border transition-colors font-mono"
              title="Copy source code"
            >
              {isCopied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span className="hidden sm:inline">{isCopied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          )}

          <div className="flex items-center bg-editor-card border border-editor-border rounded p-0.5">
            <button
              onClick={() => setViewStyle('preview')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors font-medium ${
                viewStyle === 'preview' 
                  ? 'bg-gold-500/20 text-gold-300 font-semibold border border-gold-500/40' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Interactive UI Preview"
            >
              <Eye size={13} />
              <span className="hidden sm:inline">Preview</span>
            </button>

            <button
              onClick={() => setViewStyle('code')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-colors font-medium ${
                viewStyle === 'code' 
                  ? 'bg-gold-500/20 text-gold-300 font-semibold border border-gold-500/40' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Inspect Raw Code"
            >
              <Code2 size={13} />
              <span className="hidden sm:inline">Code</span>
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb Path Bar */}
      <div className="flex items-center justify-between px-4 py-1 bg-editor-bg text-[11px] text-slate-500 font-mono border-t border-editor-bordersubtle/40">
        <div className="flex items-center gap-1 truncate">
          <span>bhaskar-portfolio</span>
          <ChevronRight size={12} />
          <span>{currentFile.path}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[10px] text-slate-400">
          <span>UTF-8</span>
          <span className="text-gold-400 font-medium">VS Code × GitHub Gold</span>
        </div>
      </div>
    </div>
  );
}

