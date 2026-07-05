import React from 'react';
import { BusinessPresentationSection } from './BusinessPresentationSection';
import { ClientShowcaseSection } from './ClientShowcaseSection';
import { Logo3DCanvas } from './Logo3DCanvas';
import { TabType } from '../types';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Zap, 
  Film,
  Youtube,
  Users,
  BarChart3,
  Video,
  Box,
  HelpCircle
} from 'lucide-react';

interface OverviewSectionProps {
  setActiveTab: (tab: TabType) => void;
  onOpenMentorship: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ setActiveTab, onOpenMentorship }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner Section */}
      <section className="relative pt-8 pb-12 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wide">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span>INSTITUTIONAL YOUTUBE GROWTH &amp; CLIENT ACQUISITION</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                We get you <span className="text-gradient-purple">5–10 new paying clients</span> in 30 days using YouTube
              </h1>

              <p className="text-purple-200 text-lg sm:text-xl font-bold leading-relaxed max-w-xl">
                — or your money back. <span className="text-slate-300 font-normal text-base block mt-2">Welcome to <strong className="text-white">Haytem Media</strong> — our agency specializes in premium video production, cinematic editing, and high-retention visual storytelling engineered to turn passive YouTube viewers into loyal paying clients.</span>
              </p>

              {/* Core Philosophy Badges */}
              <div className="grid grid-cols-1 max-w-sm gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex flex-col gap-1">
                  <span className="text-xs font-mono text-purple-400">01 / 4K PRODUCTION</span>
                  <span className="text-sm font-bold text-white">Studio-Grade Editing</span>
                  <span className="text-[11px] text-slate-400">Cinematic color grading & custom sound design</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('case-studies')}
                  className="px-8 py-4 bg-purple-600 rounded-2xl font-bold flex items-center gap-2 group hover:bg-purple-500 shadow-xl shadow-purple-900/20 transition-all text-white text-sm"
                >
                  <Users className="w-4 h-4" />
                  <span>Explore Examples</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setActiveTab('guarantee')}
                  className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl font-bold hover:bg-white/10 transition-all text-white flex items-center gap-2 text-sm"
                >
                  <HelpCircle className="w-4 h-4 text-purple-400" />
                  <span>View Questions & FAQs</span>
                </button>

                <button
                  onClick={() => setActiveTab('brand-studio')}
                  className="px-7 py-4 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/40 rounded-2xl font-bold hover:bg-purple-600/40 transition-all text-white flex items-center gap-2 text-sm shadow-xl shadow-purple-900/20 group"
                >
                  <Box className="w-4 h-4 text-purple-400 transform group-hover:rotate-12 transition-transform" />
                  <span>3d logo</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('business-presentation');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-4 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-purple-500/40 rounded-2xl font-bold hover:bg-purple-600/40 transition-all text-white flex items-center gap-2 text-sm shadow-xl shadow-purple-900/20 group"
                >
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <Film className="w-4 h-4 text-purple-300" />
                  <span>Watch Business Film (18m)</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('client-showcase');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-4 bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 rounded-2xl font-bold transition-all text-red-200 hover:text-white flex items-center gap-2 text-sm"
                >
                  <Youtube className="w-4 h-4 text-red-400 fill-red-400" />
                  <span>Verified Client Results</span>
                </button>
              </div>
            </div>

            {/* Right Hero Interactive 3D Emblem */}
            <div className="lg:col-span-6">
              <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-[#121218] via-[#0d0d12] to-[#0a0a0e] border border-purple-500/40 shadow-2xl space-y-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/25 transition-all duration-500" />
                <div className="flex items-center justify-between gap-2 relative z-10 border-b border-white/10 pb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-bold">
                    <Box className="w-3.5 h-3.5" />
                    <span>LIVE 3D WEBGL EMBLEM</span>
                  </div>
                  <button
                    onClick={() => setActiveTab('brand-studio')}
                    className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-all shadow-lg shadow-purple-600/30 flex items-center gap-1.5"
                  >
                    <span>3d logo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="relative z-10 pt-1">
                  <Logo3DCanvas initialPreset="obsidian" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Official Institutional Business Presentation Video Film Section */}
      <BusinessPresentationSection 
        onOpenMentorship={onOpenMentorship}
        onExploreGuarantee={() => setActiveTab('guarantee')}
      />

      {/* Verified Client Showcase Section */}
      <ClientShowcaseSection 
        onOpenMentorship={onOpenMentorship}
      />

      {/* Feature Navigation Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Explore The Agency Ecosystem</span>
            </h2>
            <p className="text-sm text-slate-400">Engineered to turn YouTube attention into high-value client acquisitions.</p>
          </div>
          <button 
            onClick={onOpenMentorship}
            className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1 underline underline-offset-4"
          >
            Apply to Our Agency Program →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Verified Case Studies */}
          <div 
            onClick={() => setActiveTab('case-studies')}
            className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl group-hover:bg-indigo-600/20 transition-all" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">01 / EXAMPLES</span>
                <h3 className="font-display text-lg font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors">
                  Examples & Case Studies
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  See how our institutional video engineering helps our clients acquire dozens of paying clients within weeks.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>Explore Examples</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Questions & FAQs */}
          <div 
            onClick={() => setActiveTab('guarantee')}
            className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">02 / KNOWLEDGE BASE</span>
                <h3 className="font-display text-lg font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
                  Frequently Asked Questions
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Everything you need to know about our done-for-you content system, production workflow, and service guarantees.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:translate-x-1 transition-transform">
              <span>View Questions & Answers</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Business Film */}
          <div 
            onClick={() => {
              const el = document.getElementById('business-presentation');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <Film className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider">03 / AGENCY FILM</span>
                <h3 className="font-display text-lg font-bold text-white mt-1 group-hover:text-red-300 transition-colors">
                  Watch Business Film
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  18-minute deep dive into how we scale high-value brands with high-retention YouTube video engineering.
                </p>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-semibold text-red-400 group-hover:translate-x-1 transition-transform">
              <span>Watch Now (18m)</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: 3D Logo Studio */}
          <div 
            onClick={() => setActiveTab('brand-studio')}
            className="group relative p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-500/60 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between shadow-[0_0_20px_rgba(138,43,226,0.15)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl group-hover:bg-purple-600/30 transition-all" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                <Box className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
                  3d logo
                </h3>
              </div>
            </div>
            <div className="pt-6 flex items-center justify-between text-xs font-bold text-purple-300 group-hover:translate-x-1 transition-transform">
              <span>3d logo</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
