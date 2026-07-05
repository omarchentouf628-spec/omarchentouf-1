import React, { useState } from 'react';
import { AGENCY_FAQS } from '../data';
import { 
  HelpCircle, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenMentorship: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* FAQs */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h3 className="font-display text-2xl font-bold text-white flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-purple-400" />
            <span>Frequently Asked Questions</span>
          </h3>
          <p className="text-xs text-slate-400">Everything you need to know about our content system and services.</p>
        </div>

        <div className="space-y-3">
          {AGENCY_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm text-white hover:text-purple-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
