import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  FileCode, 
  FileText, 
  FileJson, 
  FileCog, 
  Folder, 
  FolderOpen,
  Search,
  GitCommit,
  GitBranch,
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { workspaceFiles, personalInfo } from '../../data/portfolioData';

// Custom file icon mapper with gold/github accents
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
      return <FileCode className={`text-slate-400 ${className}`} />;
  }
};

export default function SidebarExplorer({ 
  activeSidebar, 
  activeTab, 
  setActiveTab, 
  openTabs, 
  setOpenTabs,
  onCloseSidebar
}) {
  const [srcFolderOpen, setSrcFolderOpen] = useState(true);
  const [publicFolderOpen, setPublicFolderOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  if (!activeSidebar) return null;

  const handleFileClick = (fileId) => {
    if (!openTabs.includes(fileId)) {
      setOpenTabs([...openTabs, fileId]);
    }
    setActiveTab(fileId);
    if (window.innerWidth < 768 && onCloseSidebar) {
      onCloseSidebar();
    }
  };

  const closeTab = (e, fileId) => {
    e.stopPropagation();
    const newTabs = openTabs.filter(id => id !== fileId);
    setOpenTabs(newTabs);
    if (activeTab === fileId && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  return (
    <div className="w-64 md:w-60 lg:w-64 bg-editor-sidebar border-r border-editor-border flex flex-col h-full text-xs select-none flex-shrink-0 z-20">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-editor-bordersubtle text-slate-400 uppercase tracking-wider font-semibold">
        <span className="flex items-center gap-1.5 text-[11px] text-slate-300">
          {activeSidebar === 'explorer' && 'Explorer'}
          {activeSidebar === 'search' && 'Search Workspace'}
          {activeSidebar === 'source-control' && 'Source Control: Git'}
        </span>
        <button 
          onClick={onCloseSidebar}
          className="md:hidden text-slate-400 hover:text-slate-200"
          title="Close Sidebar"
        >
          <X size={15} />
        </button>
      </div>

      {/* Explorer Content */}
      {activeSidebar === 'explorer' && (
        <div className="flex-1 overflow-y-auto">
          {/* Section: OPEN EDITORS */}
          <div className="py-1">
            <div className="px-3 py-1 flex items-center gap-1 text-[11px] font-semibold text-slate-400">
              <ChevronDown size={14} />
              <span>OPEN EDITORS</span>
            </div>
            <div className="space-y-0.5 mt-0.5">
              {openTabs.map((tabId) => {
                const file = workspaceFiles.find(f => f.id === tabId);
                if (!file) return null;
                const isActive = activeTab === tabId;
                return (
                  <div
                    key={tabId}
                    onClick={() => setActiveTab(tabId)}
                    className={`group flex items-center justify-between px-5 py-1 cursor-pointer transition-colors ${
                      isActive 
                        ? 'bg-editor-active text-gold-300 font-medium' 
                        : 'text-slate-400 hover:bg-editor-hover hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileIcon type={file.icon} className="w-3.5 h-3.5 text-[10px]" />
                      <span className="truncate">{file.name}</span>
                    </div>
                    <button
                      onClick={(e) => closeTab(e, tabId)}
                      className="opacity-0 group-hover:opacity-100 hover:text-white p-0.5 rounded transition-opacity"
                    >
                      <X size={12} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: BHASKAR_PORTFOLIO WORKSPACE */}
          <div className="py-2 border-t border-editor-bordersubtle/50">
            <div className="px-3 py-1 flex items-center gap-1 text-[11px] font-semibold text-slate-300">
              <ChevronDown size={14} />
              <span className="truncate">BHASKAR_PORTFOLIO</span>
            </div>

            {/* Folder: src */}
            <div className="mt-1">
              <div 
                onClick={() => setSrcFolderOpen(!srcFolderOpen)}
                className="flex items-center gap-1.5 px-4 py-1 cursor-pointer text-slate-400 hover:text-slate-200 hover:bg-editor-hover/50"
              >
                {srcFolderOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                {srcFolderOpen ? <FolderOpen size={14} className="text-gold-400" /> : <Folder size={14} className="text-gold-400" />}
                <span className="font-semibold text-slate-300">src</span>
              </div>

              {srcFolderOpen && (
                <div className="space-y-0.5">
                  {workspaceFiles.filter(f => f.path.startsWith('src/')).map((file) => {
                    const isActive = activeTab === file.id;
                    return (
                      <div
                        key={file.id}
                        onClick={() => handleFileClick(file.id)}
                        className={`flex items-center justify-between pl-8 pr-3 py-1 cursor-pointer transition-colors ${
                          isActive 
                            ? 'bg-editor-active text-gold-300 font-medium border-l-2 border-gold-500' 
                            : 'text-slate-400 hover:bg-editor-hover hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileIcon type={file.icon} className="w-3.5 h-3.5 text-[10px]" />
                          <span className="truncate">{file.name}</span>
                        </div>
                        {file.modified && (
                          <span className="text-[10px] text-gold-400 font-mono font-bold">M</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Folder: public */}
            <div className="mt-1">
              <div 
                onClick={() => setPublicFolderOpen(!publicFolderOpen)}
                className="flex items-center gap-1.5 px-4 py-1 cursor-pointer text-slate-400 hover:text-slate-200 hover:bg-editor-hover/50"
              >
                {publicFolderOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                {publicFolderOpen ? <FolderOpen size={14} className="text-slate-400" /> : <Folder size={14} className="text-slate-400" />}
                <span className="font-semibold text-slate-300">public</span>
              </div>

              {publicFolderOpen && (
                <div className="space-y-0.5">
                  {workspaceFiles.filter(f => f.path.startsWith('public/')).map((file) => {
                    const isActive = activeTab === file.id;
                    return (
                      <div
                        key={file.id}
                        onClick={() => handleFileClick(file.id)}
                        className={`flex items-center justify-between pl-8 pr-3 py-1 cursor-pointer transition-colors ${
                          isActive 
                            ? 'bg-editor-active text-gold-300 font-medium border-l-2 border-gold-500' 
                            : 'text-slate-400 hover:bg-editor-hover hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileIcon type={file.icon} className="w-3.5 h-3.5 text-[10px]" />
                          <span className="truncate">{file.name}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Root Config Files (.env) */}
            <div className="mt-1 space-y-0.5">
              {workspaceFiles.filter(f => !f.path.includes('/')).map((file) => {
                const isActive = activeTab === file.id;
                return (
                  <div
                    key={file.id}
                    onClick={() => handleFileClick(file.id)}
                    className={`flex items-center justify-between pl-6 pr-3 py-1 cursor-pointer transition-colors ${
                      isActive 
                        ? 'bg-editor-active text-gold-300 font-medium border-l-2 border-gold-500' 
                        : 'text-slate-400 hover:bg-editor-hover hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <FileIcon type={file.icon} className="w-3.5 h-3.5 text-[10px]" />
                      <span className="truncate">{file.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Search Sidebar */}
      {activeSidebar === 'search' && (
        <div className="p-3 flex-1 flex flex-col gap-3">
          <div className="relative">
            <Search size={14} className="absolute left-2.5 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills, projects..."
              className="w-full bg-editor-card border border-editor-border rounded px-8 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500"
            />
          </div>
          <div className="text-[11px] text-slate-400">
            Quick Jump:
          </div>
          <div className="flex flex-col gap-1">
            <button 
              onClick={() => handleFileClick('projects')}
              className="text-left px-2 py-1.5 rounded hover:bg-editor-hover text-gold-400 flex items-center justify-between"
            >
              <span>⚡ EchoShield ANC & RoutingVanguard</span>
              <span className="text-[10px] text-slate-500">Projects.ts</span>
            </button>
            <button 
              onClick={() => handleFileClick('skills')}
              className="text-left px-2 py-1.5 rounded hover:bg-editor-hover text-cyan-400 flex items-center justify-between"
            >
              <span>🧠 AI/ML & Agentic AI</span>
              <span className="text-[10px] text-slate-500">Skills.json</span>
            </button>
            <button 
              onClick={() => handleFileClick('experience')}
              className="text-left px-2 py-1.5 rounded hover:bg-editor-hover text-emerald-400 flex items-center justify-between"
            >
              <span>🏆 SIH & Vishwakarma '25</span>
              <span className="text-[10px] text-slate-500">Experience.yml</span>
            </button>
            <button 
              onClick={() => handleFileClick('resume')}
              className="text-left px-2 py-1.5 rounded hover:bg-editor-hover text-purple-400 flex items-center justify-between"
            >
              <span>📄 Download Resume</span>
              <span className="text-[10px] text-slate-500">Resume.pdf</span>
            </button>
          </div>
        </div>
      )}

      {/* Source Control Sidebar */}
      {activeSidebar === 'source-control' && (
        <div className="p-3 flex-1 flex flex-col gap-3 overflow-y-auto">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
            <GitBranch size={14} className="text-gold-400" />
            <span>branch: <b className="text-gold-300">main</b></span>
          </div>
          <div className="border border-editor-border rounded p-2.5 bg-editor-card">
            <div className="text-[11px] font-semibold text-slate-400 mb-1">STAGED MILESTONES</div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-start gap-1.5 text-slate-300">
                <GitCommit size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-gold-300">feat(awards): Vishwakarma 2025</div>
                  <div className="text-slate-400 text-[10px]">EchoShield ANC Prototype Stage</div>
                </div>
              </div>
              <div className="flex items-start gap-1.5 text-slate-300">
                <GitCommit size={13} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-cyan-300">feat(hackathon): SIH Finalist</div>
                  <div className="text-slate-400 text-[10px]">Smart India Hackathon National Round</div>
                </div>
              </div>
              <div className="flex items-start gap-1.5 text-slate-300">
                <GitCommit size={13} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-purple-300">cert(nptel): HCI Elite Silver</div>
                  <div className="text-slate-400 text-[10px]">Score: 80% • IIIT Delhi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
