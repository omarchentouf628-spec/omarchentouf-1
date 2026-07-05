import React from 'react';
import { TabType } from '../types';
import { 
  Sparkles, 
  ChevronRight,
  Film,
  Youtube,
  Users,
  Box,
  HelpCircle
} from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenMentorship: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenMentorship }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/5 backdrop-blur-2xl transition-all shadow-lg shadow-purple-500/5">
      {/* Top Ticker Bar */}
      <div className="border-b border-white/5 bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs text-slate-400 font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-white font-semibold">HAYTEM MEDIA SYSTEM:</span>
            <span>+480% Avg YouTube Retention Lift</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Acquisition Target:</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                5–10 CLIENTS GUARANTEED
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Turnaround:</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                24-48 HR PRIORITY
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-500">Active Clients:</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-slate-800/60 text-slate-300">
                18 PARTNERS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => setActiveTab('overview')}
          className="flex items-center gap-3.5 group text-left"
        >
          {/* Official Agency Logo (HAYTEM MEDIA Symbol) */}
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1c1c24] to-[#0a0a0e] border border-white/20 p-1.5 flex items-center justify-center shadow-[0_0_25px_rgba(138,43,226,0.25)] group-hover:border-purple-500/60 transition-all duration-300">
            <img 
              src="https://framerusercontent.com/images/3efFFKgZNauWZt6zDMFTG7Ha3vk.png?scale-down-to=1024&width=2000&height=2000" 
              alt="Haytem Media Logo" 
              className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-[#0b0b0e] animate-pulse" />
          </div>

          <div>
            <div className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              <span>HAYTEM</span>
              <span className="text-gradient-purple">MEDIA</span>
            </div>
            <div className="text-[10px] tracking-widest text-slate-400 uppercase font-mono mt-0.5">
              YouTube Client Acquisition
            </div>
          </div>
        </button>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-inner">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'overview'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('case-studies')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'case-studies'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Examples</span>
          </button>

          <button
            onClick={() => setActiveTab('guarantee')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'guarantee'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Questions & FAQs</span>
            <span className="bg-purple-500/20 text-purple-300 text-[10px] px-1.5 py-0.2 rounded-full border border-purple-500/30">Q&A</span>
          </button>

          <button
            onClick={() => setActiveTab('brand-studio')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'brand-studio'
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(138,43,226,0.5)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Box className="w-3.5 h-3.5 text-purple-400" />
            <span>3d logo</span>
            <span className="bg-purple-500/20 text-purple-300 text-[10px] px-1.5 py-0.2 rounded-full border border-purple-500/30">Interactive</span>
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              setActiveTab('overview');
              setTimeout(() => {
                const el = document.getElementById('business-presentation');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono rounded-full transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <Film className="w-3.5 h-3.5" />
            <span>Watch Film</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('overview');
              setTimeout(() => {
                const el = document.getElementById('client-showcase');
                el?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-mono rounded-full transition-all group"
          >
            <Youtube className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>Client Results</span>
          </button>

          <button
            onClick={onOpenMentorship}
            className="px-5 py-2 bg-white text-black text-xs sm:text-sm font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/10 flex items-center gap-1.5 shrink-0"
          >
            <span>Apply to Agency</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="lg:hidden flex items-center justify-around border-t border-white/10 bg-[#0a0a0a]/90 backdrop-blur-2xl py-2 px-2 overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview', icon: Sparkles },
          { id: 'case-studies', label: 'Examples', icon: Users },
          { id: 'guarantee', label: 'Questions', icon: HelpCircle },
          { id: 'brand-studio', label: '3d logo', icon: Box },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                isActive ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
