import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { PhoneCall, Menu, X, Sparkles, UserPlus, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenCallback: (productId?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCallback, onNavigateTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigateTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Sticky Top Recruitment Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-gradient-to-r from-[#1f0e2b] via-[#12111d] to-[#2b0c20] text-stone-100 border-b border-purple-500/20 text-xs sm:text-sm py-1.5 px-3 sm:px-6 shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-center relative">
            {/* Centered Announcement Group (Icon + Text + Pill CTA) */}
            <div
              onClick={() => handleNavClick('recrutement')}
              className="flex items-center justify-center gap-2 cursor-pointer group px-7 sm:px-0 text-center"
            >
              {/* Pulsing indicator dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>

              {/* Desktop Text + Pill CTA */}
              <span className="hidden sm:inline-flex items-center font-sans text-stone-200 group-hover:text-white transition-colors">
                <span className="font-medium">Nous recrutons : télévente Suisse, depuis le Maroc ou l'Europe 🇨🇭</span>
                <span className="ml-2.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/25 text-white font-semibold text-xs transition-all duration-200 group-hover:bg-white group-hover:text-purple-950 group-hover:shadow-xs">
                  Voir les postes <ChevronRight className="w-3 h-3 text-pink-300 group-hover:text-purple-950 transition-colors" />
                </span>
              </span>

              {/* Mobile Text + Pill CTA */}
              <span className="sm:hidden inline-flex items-center font-sans text-stone-200 text-[11px] group-hover:text-white transition-colors">
                <span>Nous recrutons au Maroc & en Europe</span>
                <span className="ml-1.5 inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-white/20 border border-white/30 text-white font-semibold text-[10px] transition-all duration-200 group-hover:bg-white group-hover:text-purple-950">
                  Postuler <ChevronRight className="w-2.5 h-2.5 text-pink-300 group-hover:text-purple-950 transition-colors" />
                </span>
              </span>
            </div>

            {/* Independent Close Button (x) at the far right */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAnnouncement(false);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-100 p-1 rounded-full hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
              aria-label="Masquer l'annonce"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#faf9f6]/90 backdrop-blur-md shadow-sm border-b border-stone-200/60 py-3.5'
            : 'bg-[#faf9f6]/80 backdrop-blur-xs py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => handleNavClick('hero')} className="cursor-pointer">
          <Logo size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-700">
          <button
            onClick={() => handleNavClick('produits')}
            className="hover:text-stone-950 transition-colors py-1 relative group"
          >
            Nos Produits
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => handleNavClick('diagnostic')}
            className="hover:text-stone-950 transition-colors py-1 flex items-center gap-1.5 text-purple-700 font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-5-00" />
            Quiz Diagnostic
          </button>

          <button
            onClick={() => handleNavClick('histoire')}
            className="hover:text-stone-950 transition-colors py-1 relative group"
          >
            Notre Histoire
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300" />
          </button>

          <button
            onClick={() => handleNavClick('recrutement')}
            className="hover:text-stone-950 transition-colors py-1 flex items-center gap-1.5 text-stone-600 group"
          >
            <UserPlus className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 transition-colors" />
            Recrutement
            <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded-full">
              Suisse/Maroc
            </span>
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenCallback()}
            className="relative group overflow-hidden rounded-full bg-gradient-to-r from-stone-900 to-stone-800 text-white text-xs font-semibold px-5 py-2.5 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <PhoneCall className="w-3.5 h-3.5 relative z-10 text-pink-300 group-hover:text-white transition-colors" />
            <span className="relative z-10">Être rappelé (Suisse 🇨🇭)</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => onOpenCallback()}
            className="bg-stone-900 text-white p-2 rounded-full text-xs flex items-center justify-center"
            title="Être rappelé"
          >
            <PhoneCall className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-800 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf9f6] border-b border-stone-200 px-4 pt-4 pb-6 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-medium text-stone-800">
            <button
              onClick={() => handleNavClick('produits')}
              className="text-left py-2 border-b border-stone-100 text-lg font-serif"
            >
              Nos 5 Gummies Products
            </button>
            <button
              onClick={() => handleNavClick('diagnostic')}
              className="text-left py-2 border-b border-stone-100 text-lg font-serif flex items-center gap-2 text-purple-700"
            >
              <Sparkles className="w-4 h-4" />
              Diagnostic sur-mesure
            </button>
            <button
              onClick={() => handleNavClick('histoire')}
              className="text-left py-2 border-b border-stone-100 text-lg font-serif"
            >
              Notre Histoire
            </button>
            <button
              onClick={() => handleNavClick('recrutement')}
              className="text-left py-2 border-b border-stone-100 text-lg font-serif flex items-center justify-between"
            >
              <span>Recrutement Télévente</span>
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-sans font-normal">
                Recrutement
              </span>
            </button>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallback();
              }}
              className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              Demander un rappel gratuit 🇨🇭
            </button>
          </div>
        </div>
      )}
      </div>
    </header>
  );
};
