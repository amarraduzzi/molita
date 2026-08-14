import React from 'react';
import { Award, Leaf, Sparkles, Sun } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Award, Leaf, Sparkles, Sun];

export const TrustBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="confiance" className="w-full bg-[#17171a] text-stone-100 pt-6 pb-3 sm:pt-7 sm:pb-4 border-t border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-center text-lg sm:text-xl text-stone-200 font-normal mb-4 sm:mb-5">
          {t.trustBanner.title}
        </h2>
        {/* Balanced 2x2 Grid on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {t.trustBanner.items.map((item, idx) => {
            const IconComponent = icons[idx];
            return (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-stone-900/60 border border-stone-800/80 hover:border-stone-700/80 transition-all h-full"
              >
                {/* Unified Icon Badge Container with Consistent Outline Icon Style */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-950/60 border border-purple-800/50 text-purple-300 flex items-center justify-center shrink-0 shadow-xs">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-stone-100 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-stone-400 mt-0.5 leading-snug font-sans">
                    {item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
