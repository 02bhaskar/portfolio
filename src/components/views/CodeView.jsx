import React from 'react';
import { codeSnippets } from '../../utils/codeSnippets';

export default function CodeView({ activeTab }) {
  const code = codeSnippets[activeTab] || '// No source code preview available';
  const lines = code.split('\n');

  // Simple token highlight regex
  const renderHighlightedLine = (line) => {
    if (line.startsWith('//') || line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### ')) {
      return <span className="text-emerald-400/90 italic">{line}</span>;
    }
    if (line.includes('export') || line.includes('import') || line.includes('const') || line.includes('interface')) {
      return (
        <span>
          {line.split(' ').map((word, i) => {
            if (['import', 'export', 'const', 'interface', 'default', 'function', 'return', 'from'].includes(word)) {
              return <span key={i} className="text-purple-400 font-bold">{word} </span>;
            }
            if (['string', 'number', 'boolean'].includes(word.replace(';', ''))) {
              return <span key={i} className="text-cyan-400">{word} </span>;
            }
            if (word.startsWith('"') || word.endsWith('"')) {
              return <span key={i} className="text-gold-300">{word} </span>;
            }
            return <span key={i} className="text-slate-300">{word} </span>;
          })}
        </span>
      );
    }
    return <span className="text-slate-300">{line}</span>;
  };

  return (
    <div className="p-4 sm:p-6 font-mono text-xs overflow-x-auto bg-editor-bg select-text min-h-full">
      <div className="table w-full">
        {lines.map((line, idx) => (
          <div key={idx} className="table-row hover:bg-editor-hover/40 transition-colors">
            {/* Gutter Line Number */}
            <span className="table-cell text-right pr-6 select-none text-slate-600 w-10 font-mono text-[11px]">
              {idx + 1}
            </span>
            {/* Code Content */}
            <span className="table-cell whitespace-pre font-mono text-xs leading-relaxed">
              {renderHighlightedLine(line)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
