import React from 'react';
import { Logo3DCanvas } from './Logo3DCanvas';
import { 
  Cpu 
} from 'lucide-react';

interface BrandStudioSectionProps {
  onOpenMentorship?: () => void;
}

export const BrandStudioSection: React.FC<BrandStudioSectionProps> = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
          my 3d logo
        </h1>
      </div>

      {/* Interactive 3D Canvas Suite */}
      <div className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>REAL-TIME HYBRID WEBGL / CANVAS RENDERER</span>
          </div>
          <div className="text-xs font-mono text-purple-400 font-semibold">
            CLICK &amp; DRAG EMBLEM TO ROTATE IN 3D SPACE
          </div>
        </div>

        <Logo3DCanvas />
      </div>

    </section>
  );
};
