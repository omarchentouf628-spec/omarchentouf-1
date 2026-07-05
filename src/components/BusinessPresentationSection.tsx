import React, { useState } from 'react';
import { 
  Play, 
  ExternalLink, 
  Share2, 
  CheckCircle2, 
  Volume2, 
  Maximize2
} from 'lucide-react';

interface BusinessPresentationSectionProps {
  onOpenMentorship?: () => void;
  onExploreGuarantee?: () => void;
}

export const BusinessPresentationSection: React.FC<BusinessPresentationSectionProps> = () => {
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const vimeoVideoId = '1183445791';
  const vimeoUrl = `https://vimeo.com/${vimeoVideoId}`;
  const vimeoEmbedUrl = `https://player.vimeo.com/video/${vimeoVideoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`;
  const vimeoStaticEmbedUrl = `https://player.vimeo.com/video/${vimeoVideoId}?badge=0&autopause=0&player_id=0&app_id=58479`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(vimeoUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="business-presentation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
      <div className="rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-black p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Background Decorative Mesh */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono tracking-wide">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>OFFICIAL INSTITUTIONAL FILM (18m)</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              How We Scale High-Value Brands With <span className="text-gradient-purple">High-Retention YouTube Engineering</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Watch our comprehensive breakdown of our 30-day client acquisition system, thumbnail CTR psychology, and guaranteed ROI model.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-mono flex items-center gap-2 transition-all"
            >
              <Share2 className="w-3.5 h-3.5 text-purple-400" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Film'}</span>
            </button>
            <a
              href={vimeoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-purple-900/30"
            >
              <span>Vimeo Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Video Player Workspace */}
        <div className="space-y-4">
          
          {/* Vimeo Video Player Container */}
          <div className="w-full space-y-4">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
              {isPlaying ? (
                <iframe
                  src={vimeoEmbedUrl}
                  className="w-full h-full absolute inset-0 border-0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Haytem Media Institutional Business Film"
                  allowFullScreen
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="w-full h-full relative cursor-pointer flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950/40 via-black to-indigo-950/40"
                >
                  <iframe
                    src={vimeoStaticEmbedUrl}
                    className="w-full h-full absolute inset-0 border-0 opacity-40 pointer-events-none scale-105"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Haytem Media Institutional Business Film Preview"
                    tabIndex={-1}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="relative z-10 flex flex-col items-center text-center p-6 max-w-lg space-y-4">
                    <div className="w-20 h-20 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-[0_0_40px_rgba(138,43,226,0.6)] group-hover:scale-110 group-hover:bg-purple-500 transition-all duration-300 border border-white/20">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest bg-purple-500/20 px-2.5 py-1 rounded-full border border-purple-500/30">
                        CLICK TO STREAM FILM (18:20)
                      </span>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white drop-shadow-lg pt-1">
                        Haytem Media: 30-Day Client Acquisition Masterclass
                      </h3>
                      <p className="text-xs text-slate-300 drop-shadow">
                        Hosted by Haytem Media Directors • Institutional Quality
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-400 font-mono bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>HD 1080p Stream</span>
                    </div>
                    <div>Audio: Stereo Studio Master</div>
                    <div>Duration: 18m 20s</div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Footer Metadata & Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center overflow-hidden shrink-0 p-1">
                  <img
                    src="https://framerusercontent.com/images/3efFFKgZNauWZt6zDMFTG7Ha3vk.png?scale-down-to=1024&width=2000&height=2000"
                    alt="Haytem Media Emblem"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span>Institutional Video Production Architecture</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[11px] text-slate-400">Guaranteed 5–10 new paying clients in 30 days</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
                <span className="flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>24-Bit Audio</span>
                </span>
                <span className="flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>4K Ready</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
