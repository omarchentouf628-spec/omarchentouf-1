import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Zap, 
  Video,
  Users
} from 'lucide-react';

interface MentorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MentorshipModal: React.FC<MentorshipModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#121216]/90 backdrop-blur-2xl border border-white/20 p-6 sm:p-8 shadow-[0_0_60px_rgba(138,43,226,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AGENCY PARTNER APPLICATION</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Apply to Haytem Media Agency
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                We get you 5–10 new paying clients in 30 days using high-retention YouTube video production — or your money back.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">YOUR FULL NAME:</label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">EMAIL ADDRESS:</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(138,43,226,0.4)] flex items-center justify-center gap-2 group"
                >
                  <span>Submit Agency Application</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center gap-4 pt-2 text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-400" /> 100% Money-Back Guarantee</span>
              <span>•</span>
              <span>Limited to 8 New Partners/mo</span>
            </div>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-white">Application Received!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Welcome to the agency program, <strong className="text-purple-300">{name}</strong>. Our senior directors will review your business offer and prepare your custom 30-day client acquisition strategy.
              </p>
              <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-[11px] font-mono text-emerald-300 mt-1">
                📩 VIP Confirmation Dispatched: {email}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-left space-y-2 text-xs font-mono">
              <div className="text-purple-400 font-bold">DISPATCHED TO {email.toUpperCase()}:</div>
              <div className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>30-Day YouTube Client Acquisition Roadmap & Script Hooks</span>
              </div>
              <div className="text-slate-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>100% Money-Back Guarantee Terms & Booking Calendar Link</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md"
            >
              Return to Agency Ecosystem
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
