import React from 'react';
import { Logo } from './Logo';
import { PhoneCall, Mail, MapPin, ShieldCheck, Heart, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenCallback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, onOpenCallback }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-stone-800 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
        
        {/* Col 1: Brand & Logo */}
        <div className="lg:col-span-2 space-y-4">
          <Logo variant="light" size="md" />
          <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
            Molita est la marque suisse spécialisée dans les gummies compléments alimentaires de haute concentration. Fabriqué selon les normes de qualité les plus exigeantes.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <span className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-white cursor-pointer transition-colors">
              <Instagram className="w-4 h-4" />
            </span>
            <span className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-white cursor-pointer transition-colors">
              <Facebook className="w-4 h-4" />
            </span>
            <span className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-400 hover:text-white cursor-pointer transition-colors">
              <Linkedin className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
            Gamme Products
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li>
              <button onClick={() => onNavigateTo('produits')} className="hover:text-white transition-colors">
                Gummies Mémoire (Rose)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTo('produits')} className="hover:text-white transition-colors">
                Gummies Vitalité (Orange)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTo('produits')} className="hover:text-white transition-colors">
                Gummies Sommeil (Bleu)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTo('produits')} className="hover:text-white transition-colors">
                Gummies Cheveux & Peau (Vert)
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTo('produits')} className="hover:text-white transition-colors">
                Gummies Détente (Cyan)
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Entreprise & Carrière */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
            Molita & Co
          </h4>
          <ul className="space-y-2 text-xs text-stone-400">
            <li>
              <button onClick={() => onNavigateTo('histoire')} className="hover:text-white transition-colors">
                Notre Histoire
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTo('diagnostic')} className="hover:text-white transition-colors">
                Diagnostic Personnalisé
              </button>
            </li>
            <li>
              <button onClick={() => onNavigateTo('recrutement')} className="hover:text-white transition-colors flex items-center gap-1.5 text-purple-400 font-semibold">
                Recrutement Maroc (Conseil Vente) 🇲🇦
              </button>
            </li>
            <li>
              <button onClick={() => onOpenCallback()} className="hover:text-white transition-colors">
                Conseiller Téléphonique Suisse 🇨🇭
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Locations */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider">
            Bureaux & Contact
          </h4>
          <div className="space-y-2.5 text-xs text-stone-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span><strong>Suisse :</strong> Rue du Rhône 42, 1204 Genève</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
              <span><strong>Maroc :</strong> Bd Zerktouni, Casablanca</span>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+41 (0)22 518 90 00</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>contact@molita-gummies.ch</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>© 2026 Molita S.A. — Tous droits réservés. Qualité Suisse Certifiée.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#hero" className="hover:text-stone-300 transition-colors">Mentions Légales</a>
          <span>•</span>
          <a href="#hero" className="hover:text-stone-300 transition-colors">Politique de Confidentialité</a>
        </div>
      </div>
    </footer>
  );
};
