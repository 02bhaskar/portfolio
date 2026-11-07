import React from 'react';
import { 
  X, 
  Palette, 
  Monitor, 
  Download, 
  Terminal, 
  Cpu, 
  Check, 
  Sparkles,
  Layers,
  Settings
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const THEME_PRESETS = [
  { id: 'gold', name: 'Aureum Gold (Signature)', hex: '#e5a93c', border: 'border-amber-500/50', bg: 'bg-amber-500' },
  { id: 'emerald', name: 'GitHub Emerald', hex: '#3fb950', border: 'border-emerald-500/50', bg: 'bg-emerald-500' },
  { id: 'cyan', name: 'VS Code Cyan', hex: '#58a6ff', border: 'border-cyan-500/50', bg: 'bg-cyan-500' },
  { id: 'purple', name: 'Neural Violet', hex: '#bc8cff', border: 'border-purple-500/50', bg: 'bg-purple-500' },
  { id: 'amber', name: 'Solar Amber', hex: '#f0883e', border: 'border-orange-500/50', bg: 'bg-orange-500' }
];

export default function SettingsModal({ 
  isOpen, 
  onClose, 
  currentTheme, 
  setCurrentTheme, 
  viewMode, 
  setViewMode,
  isTerminalOpen,
  setIsTerminalOpen
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in select-text">
      <div 
        className="w-full max-w-lg bg-editor-card border border-editor-border rounded-xl shadow-ide overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-editor-bordersubtle bg-editor-deep">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-200">
            <Settings size={15} className="text-gold-400" />
            <span>Settings & Workspace Preferences</span>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-editor-hover transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-6 text-xs font-mono">
          {/* Section 1: Color Themes */}
          <div className="space-y-2.5">
            <div className="text-slate-400 flex items-center gap-1.5 uppercase font-semibold text-[11px]">
              <Palette size={13} className="text-gold-400" />
              <span>Color Theme Accent</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {THEME_PRESETS.map((t) => {
                const isSelected = currentTheme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setCurrentTheme(t.id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-all text-left ${
                      isSelected
                        ? 'bg-editor-deep text-white border-gold-500 shadow-sm'
                        : 'bg-editor-deep/60 text-slate-400 border-editor-bordersubtle hover:bg-editor-deep hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${t.bg}`} />
                      <span className="text-[11px]">{t.name}</span>
                    </div>
                    {isSelected && <Check size={14} className="text-gold-400" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: View Mode Selection */}
          <div className="space-y-2.5 border-t border-editor-bordersubtle pt-4">
            <div className="text-slate-400 flex items-center gap-1.5 uppercase font-semibold text-[11px]">
              <Monitor size={13} className="text-cyan-400" />
              <span>Default Layout View Mode</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setViewMode('ide')}
                className={`px-3 py-2 rounded-lg border text-left transition-all ${
                  viewMode === 'ide'
                    ? 'bg-editor-deep text-gold-300 border-gold-500 font-bold'
                    : 'bg-editor-deep/60 text-slate-400 border-editor-bordersubtle hover:bg-editor-deep hover:text-slate-200'
                }`}
              >
                <div className="text-xs">VS Code IDE Mode</div>
                <div className="text-[10px] text-slate-500 font-sans mt-0.5">Tabs, explorer & terminal</div>
              </button>

              <button
                onClick={() => setViewMode('page')}
                className={`px-3 py-2 rounded-lg border text-left transition-all ${
                  viewMode === 'page'
                    ? 'bg-editor-deep text-gold-300 border-gold-500 font-bold'
                    : 'bg-editor-deep/60 text-slate-400 border-editor-bordersubtle hover:bg-editor-deep hover:text-slate-200'
                }`}
              >
                <div className="text-xs">Full Page View</div>
                <div className="text-[10px] text-slate-500 font-sans mt-0.5">Continuous scrolling layout</div>
              </button>
            </div>
          </div>

          {/* Section 3: Terminal Toggle */}
          <div className="space-y-2 border-t border-editor-bordersubtle pt-4">
            <div className="text-slate-400 flex items-center gap-1.5 uppercase font-semibold text-[11px]">
              <Terminal size={13} className="text-emerald-400" />
              <span>Interactive CLI Panel</span>
            </div>
            <div className="flex items-center justify-between bg-editor-deep p-3 rounded-lg border border-editor-bordersubtle">
              <div>
                <div className="text-white text-xs">Bottom Terminal Panel</div>
                <div className="text-slate-500 text-[10px] font-sans mt-0.5">
                  Toggle with the backtick (`) shortcut key anytime
                </div>
              </div>
              <button
                onClick={() => setIsTerminalOpen(!isTerminalOpen)}
                className={`px-3 py-1 rounded text-xs transition-colors ${
                  isTerminalOpen
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-editor-card text-slate-400 border border-editor-border hover:text-white'
                }`}
              >
                {isTerminalOpen ? 'Active' : 'Closed'}
              </button>
            </div>
          </div>

          {/* System Spec Info */}
          <div className="border-t border-editor-bordersubtle pt-4 text-[10px] text-slate-500 space-y-1">
            <div className="flex justify-between">
              <span>Stack:</span>
              <span className="text-slate-400">React 19 • Vite • Tailwind CSS • Framer Motion</span>
            </div>
            <div className="flex justify-between">
              <span>Environment:</span>
              <span className="text-slate-400">Production Build • Zero Vulnerabilities</span>
            </div>
            <div className="flex justify-between">
              <span>Author:</span>
              <span className="text-gold-400">{personalInfo.name}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-5 py-3 border-t border-editor-bordersubtle bg-editor-deep">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-gold-500 hover:bg-gold-400 text-editor-deep font-bold text-xs transition-colors"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
}
