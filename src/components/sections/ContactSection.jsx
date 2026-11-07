import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Terminal, 
  MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import { launchConfetti } from '../../utils/confetti';
import { personalInfo } from '../../data/portfolioData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      launchConfetti();
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="py-8 md:py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="border-b border-editor-border pb-4">
        <div className="flex items-center gap-2 text-xs font-mono text-gold-400 mb-1">
          <span>Contact.env</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Direct Outreach & Collaboration Channels</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Get in Touch & Connect
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Whether you have an internship opportunity, an AI/data science project, or a technical inquiry, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Cards (.env format) */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-editor-card border border-editor-border rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2 text-gold-400 font-mono text-xs font-semibold">
              <Terminal size={15} />
              <span>ENVIRONMENT VARIABLES</span>
            </div>

            {/* Email Card */}
            <div className="p-3 rounded-lg bg-editor-deep border border-editor-bordersubtle space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase">CONTACT_EMAIL</div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs sm:text-sm font-mono text-gold-300 hover:underline truncate"
                >
                  {personalInfo.email}
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-1 rounded hover:bg-editor-hover text-slate-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-3 rounded-lg bg-editor-deep border border-editor-bordersubtle space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase">CONTACT_PHONE</div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs sm:text-sm font-mono text-slate-200 hover:text-gold-300 transition-colors"
                >
                  {personalInfo.phone}
                </a>
                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-1 rounded hover:bg-editor-hover text-slate-400 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-3 rounded-lg bg-editor-deep border border-editor-bordersubtle space-y-1">
              <div className="text-[10px] font-mono text-slate-500 uppercase">LOCATION</div>
              <div className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <MapPin size={13} className="text-gold-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 border-t border-editor-bordersubtle flex flex-col gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded bg-editor-deep hover:bg-editor-hover text-slate-300 hover:text-gold-300 text-xs font-mono transition-colors border border-editor-bordersubtle"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon size={15} className="text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-[10px] text-slate-500">/in/boss02</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded bg-editor-deep hover:bg-editor-hover text-slate-300 hover:text-white text-xs font-mono transition-colors border border-editor-bordersubtle"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon size={15} />
                  <span>GitHub Repositories</span>
                </div>
                <span className="text-[10px] text-slate-500">@02bhaskar</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="md:col-span-7 bg-editor-card border border-editor-border rounded-xl p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-2 text-xs font-mono text-gold-400 font-semibold">
            <MessageSquare size={16} />
            <span>TRANSMIT DIRECT MESSAGE</span>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-lg bg-editor-deep border border-emerald-500/40 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Message Transmitted!</h3>
              <p className="text-slate-300 text-xs max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. Bhaskar has received your transmission and will get back to you promptly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-1.5 rounded bg-editor-card hover:bg-editor-hover text-gold-400 text-xs font-mono border border-editor-border mt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-editor-deep border border-editor-border rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full bg-editor-deep border border-editor-border rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Internship Opportunity / Project Inquiry"
                  className="w-full bg-editor-deep border border-editor-border rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details about your team, role, or collaboration idea..."
                  className="w-full bg-editor-deep border border-editor-border rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-gold-500 font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-editor-deep font-bold text-xs font-mono transition-all shadow-gold-sm hover:shadow-gold-glow"
              >
                <Send size={14} />
                <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
