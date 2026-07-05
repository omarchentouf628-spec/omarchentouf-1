import React from 'react';
import { CLIENT_CASE_STUDIES } from '../data';
import { 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Play, 
  Video, 
  ArrowRight
} from 'lucide-react';

interface ClientShowcaseSectionProps {
  onOpenMentorship: () => void;
}

export const ClientShowcaseSection: React.FC<ClientShowcaseSectionProps> = ({
  onOpenMentorship
}) => {
  return (
    <section id="client-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-wide uppercase font-bold">
            <Video className="w-3.5 h-3.5 text-purple-400" />
            <span>CLIENT EXAMPLES & VIDEO PRODUCTION QUALITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Examples of Our Clients & <span className="text-gradient-purple">Institutional Video Quality</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Explore real video examples from our clients. Experience our institutional video production quality, cinematic color grading, and high-retention pacing engineered to build brand authority and convert viewers into high-value clients.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {CLIENT_CASE_STUDIES.map((client) => (
          <div
            key={client.id}
            className="rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-black border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 shadow-2xl group"
          >
            <div className="space-y-6">
              
              {/* Top Client Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold font-display text-xl shadow-lg shadow-purple-900/30">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {client.name}
                    </h3>
                    <div className="text-xs font-mono text-purple-300 mt-0.5">
                      {client.role}
                    </div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-mono font-extrabold uppercase tracking-wider shrink-0">
                  4K CINEMATIC
                </span>
              </div>

              {/* Featured Video Embed */}
              {client.youtubeVideoId ? (
                <div className="space-y-3 pt-2">
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl group/video">
                    <iframe
                      src={`https://www.youtube.com/embed/${client.youtubeVideoId}?rel=0`}
                      title={client.videoTitle}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="space-y-1.5 px-1">
                    <div className="text-sm font-bold text-white leading-snug">{client.videoTitle}</div>
                    <div className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
                      <span className="text-purple-400 font-bold">Production Quality: </span>
                      {client.serviceDelivered}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                      <Play className="w-3.5 h-3.5 fill-red-400" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono text-purple-300">FEATURED CAMPAIGN</div>
                      <div className="text-xs font-bold text-white truncate">{client.videoTitle}</div>
                    </div>
                  </div>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold flex items-center gap-1 shrink-0 transition-all"
                  >
                    <span>Watch</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Action Footer */}
            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                Verified Client Example
              </span>
              <button
                onClick={onOpenMentorship}
                className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 group/btn"
              >
                <span>Apply for Similar Production</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-900/40 via-indigo-900/20 to-black border border-purple-500/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>STUDIO-GRADE VIDEO PRODUCTION</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Do you want to produce high-quality videos for your brand?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            We deliver institutional 4K cinematic video editing, custom graphics, and studio-grade sound design to elevate your visual identity.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <button
            onClick={onOpenMentorship}
            className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm transition-all shadow-xl shadow-purple-900/30 flex items-center gap-2 group"
          >
            <span>Apply to Our Agency</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
