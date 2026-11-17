import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Terminal as TerminalIcon, 
  Trash2, 
  Maximize2, 
  Minimize2,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { personalInfo, projectsData, skillsData, achievementsData } from '../../data/portfolioData';
import { launchConfetti } from '../../utils/confetti';

export default function Terminal({ 
  isOpen, 
  setIsOpen, 
  setActiveTab 
}) {
  const [activeTabName, setActiveTabName] = useState('TERMINAL');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Bhaskar G\'s Interactive Developer Terminal [Version 2.5.0]' },
    { type: 'system', text: 'Type "help" to list available commands or click file tabs in Explorer.' },
    { type: 'success', text: '✔ AI & Data Science Workspace loaded successfully.' }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = inputVal.trim();
      const newHistory = [...history, { type: 'input', text: `bhaskar@portfolio:~$ ${trimmed}` }];
      const cmd = trimmed.toLowerCase();

      if (cmd === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      } else if (cmd === 'help') {
        newHistory.push({
          type: 'output',
          text: `Available commands:
  • help       : Show this help manual
  • about      : Read biography & academic details (opens About.md)
  • projects   : View 5 flagship engineering projects (opens Projects.ts)
  • skills     : Print categorized technical skills breakdown
  • awards     : Display SIH, Vishwakarma & NPTEL accolades
  • contact    : View direct contact channels (opens Contact.env)
  • resume     : Open and download PDF resume
  • clear      : Clear terminal screen
  • sudo hire  : Express hiring interest`
        });
      } else if (cmd === 'about' || cmd === 'cat about.md') {
        newHistory.push({
          type: 'output',
          text: `${personalInfo.name} | ${personalInfo.tagline}
Education: B.Tech AI & Data Science @ Dr. N.G.P. iTech, Coimbatore
Status: ${personalInfo.status}
Location: ${personalInfo.location}`
        });
        setActiveTab('about');
      } else if (cmd === 'projects' || cmd === 'ls projects') {
        newHistory.push({
          type: 'output',
          text: `Flagship Projects:
  1. RoutingVanguard       - AI Smart Logistics for Complex Terrains
  2. EchoShield ANC        - Industrial Active Noise Cancellation (Vishwakarma '25)
  3. AgroSmart             - AI-Powered Farmer Advisory Web Platform
  4. RedVolt               - Full-Stack EV Charging Station Management Platform`
        });
        setActiveTab('projects');
      } else if (cmd === 'skills') {
        newHistory.push({
          type: 'output',
          text: `Technical Stack:
  • AI / ML    : Machine Learning, Generative AI, Agentic AI, Reinforcement Learning
  • Languages  : Python, Java, JavaScript, Dart, SQL, C++
  • Web        : React.js, Node.js, Express.js, Tailwind CSS
  • Embedded   : ESP32, Arduino IDE, LMS DSP, FFT Acoustics
  • Databases  : MongoDB, SQL, Firebase`
        });
        setActiveTab('skills');
      } else if (cmd === 'awards' || cmd === 'achievements') {
        newHistory.push({
          type: 'output',
          text: `Achievements & Certifications:
  🏆 Smart India Hackathon (SIH) 2026 - National Level Participation
     Problem: "AI-Based Smart Logistics and Accessibility Intelligence Platform for North Eastern Region (NER)"
  🏆 Vishwakarma Awards 2025 - National Finalist (EchoShield ANC)
  🏆 NPTEL HCI Certification - Score: 80% (Elite Silver, IIIT Delhi)
  🏆 NPTEL Social Networks Certification - Score: 60% (Elite, IIT Madras)`
        });
        setActiveTab('experience');
      } else if (cmd === 'contact') {
        newHistory.push({
          type: 'output',
          text: `Contact Info:
  Email    : ${personalInfo.email}
  Phone    : ${personalInfo.phone}
  LinkedIn : ${personalInfo.linkedin}
  GitHub   : ${personalInfo.github}`
        });
        setActiveTab('contact');
      } else if (cmd === 'resume' || cmd === 'cat resume.pdf') {
        newHistory.push({
          type: 'output',
          text: `Opening resume viewer and readying download...`
        });
        setActiveTab('resume');
      } else if (cmd === 'sudo hire' || cmd === 'sudo hire bhaskar') {
        launchConfetti();
        newHistory.push({
          type: 'gold',
          text: `🎉 Access Granted! Excellent decision. Bhaskar is eager to contribute to forward-thinking AI & engineering teams! Navigating to Contact...`
        });
        setActiveTab('contact');
      } else if (cmd === '') {
        // empty command
      } else {
        newHistory.push({
          type: 'error',
          text: `bash: command not found: ${trimmed}. Type "help" for a list of commands.`
        });
      }

      setHistory(newHistory);
      setInputVal('');
    }
  };

  return (
    <div 
      className={`bg-editor-terminal border-t border-editor-border flex flex-col font-mono text-xs z-20 transition-all duration-200 ${
        isMaximized ? 'h-80 md:h-96' : 'h-48 md:h-56'
      }`}
    >
      {/* Terminal Top Panel Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-editor-deep border-b border-editor-bordersubtle select-none">
        {/* Terminal Tabs */}
        <div className="flex items-center gap-4 text-[11px] font-sans font-semibold">
          {['PROBLEMS', 'OUTPUT', 'DEBUG CONSOLE', 'TERMINAL'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTabName(tab)}
              className={`transition-colors relative pb-0.5 ${
                activeTabName === tab 
                  ? 'text-gold-300 font-bold border-b border-gold-400' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab === 'PROBLEMS' ? 'PROBLEMS (0)' : tab}
            </button>
          ))}
        </div>

        {/* Terminal Controls */}
        <div className="flex items-center gap-2 text-slate-400">
          <button 
            onClick={() => setHistory([])}
            className="hover:text-slate-200 p-1 rounded hover:bg-editor-hover transition-colors"
            title="Clear terminal"
          >
            <Trash2 size={13} />
          </button>
          <button 
            onClick={() => setIsMaximized(!isMaximized)}
            className="hover:text-slate-200 p-1 rounded hover:bg-editor-hover transition-colors"
            title={isMaximized ? "Restore panel size" : "Maximize panel"}
          >
            {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button 
            onClick={() => setIsOpen(false)}
            className="hover:text-slate-200 p-1 rounded hover:bg-editor-hover transition-colors"
            title="Close panel"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        onClick={() => inputRef.current?.focus()}
        className="flex-1 p-3 overflow-y-auto space-y-1.5 cursor-text text-slate-300 select-text"
      >
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'input' && (
              <span className="text-slate-300 font-semibold">{item.text}</span>
            )}
            {item.type === 'system' && (
              <span className="text-slate-400 italic">{item.text}</span>
            )}
            {item.type === 'success' && (
              <span className="text-emerald-400">{item.text}</span>
            )}
            {item.type === 'gold' && (
              <span className="text-gold-300 font-semibold">{item.text}</span>
            )}
            {item.type === 'error' && (
              <span className="text-rose-400">{item.text}</span>
            )}
            {item.type === 'output' && (
              <pre className="text-slate-300 whitespace-pre-wrap font-mono mt-0.5">{item.text}</pre>
            )}
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-1.5 text-slate-200 pt-1">
          <span className="text-emerald-400 font-semibold">bhaskar@portfolio</span>
          <span className="text-slate-500">:</span>
          <span className="text-gold-400 font-semibold">~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs border-none p-0 focus:ring-0"
            autoFocus
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

