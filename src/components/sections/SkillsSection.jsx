import React, { useState } from 'react';
import { 
  Brain, 
  Code, 
  Layout, 
  Server, 
  Database, 
  Smartphone, 
  Terminal, 
  Sparkles,
  CheckCircle2,
  Layers,
  Cpu
} from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

// Map icon string to Lucide component
const getIcon = (iconName) => {
  switch (iconName) {
    case 'Brain': return <Brain size={18} className="text-gold-400" />;
    case 'Sparkles': return <Sparkles size={18} className="text-amber-400" />;
    case 'Code': return <Code size={18} className="text-cyan-400" />;
    case 'Coffee': return <Code size={18} className="text-orange-400" />;
    case 'FileCode': return <Code size={18} className="text-yellow-400" />;
    case 'Layers': return <Layers size={18} className="text-blue-400" />;
    case 'Atom': return <Layers size={18} className="text-cyan-400" />;
    case 'Layout': return <Layout size={18} className="text-blue-400" />;
    case 'Palette': return <Layout size={18} className="text-teal-400" />;
    case 'Server': return <Server size={18} className="text-emerald-400" />;
    case 'Cpu': return <Cpu size={18} className="text-purple-400" />;
    case 'Database': return <Database size={18} className="text-emerald-400" />;
    case 'Table': return <Database size={18} className="text-blue-400" />;
    case 'Flame': return <Sparkles size={18} className="text-amber-500" />;
    case 'Smartphone': return <Smartphone size={18} className="text-blue-400" />;
    case 'Radio': return <Cpu size={18} className="text-gold-400" />;
    case 'GitBranch': return <Code size={18} className="text-orange-400" />;
    case 'Terminal': return <Terminal size={18} className="text-emerald-400" />;
    case 'AppWindow': return <Layout size={18} className="text-green-400" />;
    default: return <Code size={18} className="text-gold-400" />;
  }
};

export default function SkillsSection() {
  const categories = Object.keys(skillsData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCategories = selectedCategory === 'All' 
    ? categories 
    : [selectedCategory];

  return (
    <div className="py-8 md:py-12 px-4 sm:px-8 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="border-b border-editor-border pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
          <span>Skills.json</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Technical Competencies & Toolchain</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical Skills & Technologies
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Proficiencies spanning Artificial Intelligence, Full-Stack Development, Mobile Engineering, and Edge Systems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 text-xs font-mono">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-3 py-1.5 rounded border transition-colors ${
            selectedCategory === 'All'
              ? 'bg-gold-500/20 text-gold-300 border-gold-500/50 font-bold'
              : 'bg-editor-card text-slate-400 border-editor-border hover:bg-editor-hover hover:text-slate-200'
          }`}
        >
          All Skills ({Object.values(skillsData).flat().length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded border transition-colors ${
              selectedCategory === cat
                ? 'bg-gold-500/20 text-gold-300 border-gold-500/50 font-bold'
                : 'bg-editor-card text-slate-400 border-editor-border hover:bg-editor-hover hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="space-y-8">
        {filteredCategories.map((category) => (
          <div key={category} className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-200 font-mono flex items-center gap-2">
                <span className="text-gold-400">#</span>
                <span>{category}</span>
              </h2>
              <div className="h-[1px] flex-1 bg-editor-bordersubtle" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData[category].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-editor-card border border-editor-bordersubtle rounded-lg p-4 hover:border-gold-500/50 transition-all hover:bg-editor-cardhover group shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded bg-editor-deep border border-editor-bordersubtle group-hover:border-gold-500/30 transition-colors">
                        {getIcon(skill.icon)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm group-hover:text-gold-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-editor-bordersubtle/50">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-editor-deep text-slate-300 border border-editor-bordersubtle/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
