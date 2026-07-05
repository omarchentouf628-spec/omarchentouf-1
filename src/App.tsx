/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/Navbar';
import { OverviewSection } from './components/OverviewSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { ClientShowcaseSection } from './components/ClientShowcaseSection';
import { BrandStudioSection } from './components/BrandStudioSection';
import { MentorshipModal } from './components/MentorshipModal';
import { 
  Sparkles, 
  ChevronUp,
  Users
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [isMentorshipOpen, setIsMentorshipOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Background Mesh Gradients for Rim Light Effect */}
      <div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          scrollToTop();
        }} 
        onOpenMentorship={() => setIsMentorshipOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full relative z-10">
        {activeTab === 'overview' && (
          <OverviewSection 
            setActiveTab={(tab) => {
              setActiveTab(tab);
              scrollToTop();
            }} 
            onOpenMentorship={() => setIsMentorshipOpen(true)} 
          />
        )}

        {activeTab === 'case-studies' && (
          <ClientShowcaseSection 
            onOpenMentorship={() => setIsMentorshipOpen(true)}
          />
        )}

        {activeTab === 'guarantee' && (
          <GuaranteeSection 
            onOpenMentorship={() => setIsMentorshipOpen(true)}
          />
        )}

        {activeTab === 'brand-studio' && (
          <BrandStudioSection 
            onOpenMentorship={() => setIsMentorshipOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#1c1c24] border border-white/20 p-1 flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden shrink-0">
                <img 
                  src="https://framerusercontent.com/images/3efFFKgZNauWZt6zDMFTG7Ha3vk.png?scale-down-to=1024&width=2000&height=2000" 
                  alt="Haytem Media Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                HAYTEM <span className="text-purple-400">MEDIA</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We get you 5–10 new paying clients in 30 days using YouTube — or your money back. High-retention video production and thumbnail CTR engineering.
            </p>
            <div className="text-[11px] font-mono text-purple-400">
              © 2026 Haytem Media. All rights reserved.
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider">ECOSYSTEM</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={() => { setActiveTab('overview'); scrollToTop(); }} className="hover:text-white transition-colors">Platform Overview</button></li>
              <li><button onClick={() => { setActiveTab('case-studies'); scrollToTop(); }} className="hover:text-white transition-colors">Client Examples & Quality</button></li>
              <li><button onClick={() => { setActiveTab('guarantee'); scrollToTop(); }} className="hover:text-white transition-colors">Frequently Asked Questions</button></li>
              <li><button onClick={() => { setActiveTab('brand-studio'); scrollToTop(); }} className="hover:text-purple-400 font-semibold text-purple-300 transition-colors">3d logo</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider">RESOURCES</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><button onClick={() => { setActiveTab('overview'); setTimeout(() => { document.getElementById('business-presentation')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }} className="hover:text-purple-300 text-purple-400 font-semibold transition-colors flex items-center gap-1">▶ Watch Business Film (18m)</button></li>
              <li><button onClick={() => { setActiveTab('case-studies'); scrollToTop(); }} className="hover:text-red-300 text-red-400 font-semibold transition-colors flex items-center gap-1">🔴 Client Examples</button></li>
              <li><button onClick={() => setIsMentorshipOpen(true)} className="hover:text-purple-300 text-purple-400 font-semibold transition-colors">Apply to Our Agency</button></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono text-white font-bold uppercase tracking-wider">CORE CAPABILITIES</h4>
            <div className="text-xs text-slate-400 space-y-1.5 leading-relaxed">
              <div className="flex items-center justify-between">
                <span>4K Production</span>
                <span className="text-[10px] text-purple-400 font-mono">Studio Quality</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>Engineered in Off-Black (#121212) and Electric Purple (#8A2BE2) for maximum authority.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-all font-mono text-[11px]"
          >
            <span>Back to Top</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

      {/* Agency Application Drawer / Modal */}
      <MentorshipModal 
        isOpen={isMentorshipOpen} 
        onClose={() => setIsMentorshipOpen(false)} 
      />
    </div>
  );
}
