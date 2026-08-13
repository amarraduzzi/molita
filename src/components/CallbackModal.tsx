import React, { useState } from 'react';
import { Product } from '../types';
import { MOLITA_PRODUCTS } from '../data/products';
import { X, PhoneCall, CheckCircle2, Clock, Globe } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: Product | null;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [canton, setCanton] = useState('Genève');
  const [preferredTime, setPreferredTime] = useState('Matin (09h - 12h)');
  const [productId, setProductId] = useState<string>(
    preselectedProduct?.id || 'vitalite'
  );
  const [language, setLanguage] = useState<'fr' | 'de' | 'it'>('fr');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync if preselected changes
  React.useEffect(() => {
    if (preselectedProduct) {
      setProductId(preselectedProduct.id);
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-[#faf9f6] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 to-purple-950 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold text-pink-300 uppercase tracking-wider mb-1">
            <PhoneCall className="w-3.5 h-3.5" />
            Service Client Suisse 🇨🇭
          </div>
          <h3 className="font-serif text-2xl text-white">
            Demander un rappel gratuit
          </h3>
          <p className="text-xs text-stone-300 mt-1 font-sans">
            Un conseiller Molita dédié vous recontacte à l’horaire de votre choix pour vous guider.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 font-sans">
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-stone-900">
                Demande transmise avec succès !
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                Merci <strong className="text-stone-900">{fullName}</strong>. Un conseiller vous rappellera à la plage horaire <strong className="text-stone-900">{preferredTime}</strong> au <strong className="text-stone-900">{phone}</strong>.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
              >
                Fermer la fenêtre
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              {/* Product Choice */}
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Produit de votre choix
                </label>
                <select
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {MOLITA_PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {p.subName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Marc Dubois"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+41 79 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Canton & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Canton / Région (Suisse)
                  </label>
                  <select
                    value={canton}
                    onChange={(e) => setCanton(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Genève">Genève (GE)</option>
                    <option value="Vaud">Vaud (VD)</option>
                    <option value="Valais">Valais (VS)</option>
                    <option value="Neuchâtel">Neuchâtel (NE)</option>
                    <option value="Fribourg">Fribourg (FR)</option>
                    <option value="Jura">Jura (JU)</option>
                    <option value="Zürich">Zürich (ZH)</option>
                    <option value="Ticino">Ticino (TI)</option>
                    <option value="Autre">Autre canton</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Créneau de rappel souhaité
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Matin (09h - 12h)">Matin (09h - 12h)</option>
                    <option value="Après-midi (14h - 17h)">Après-midi (14h - 17h)</option>
                    <option value="Soir (17h - 19h)">Soir (17h - 19h)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Language for Phone Call */}
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Langue parlée pour l'appel
                </label>
                <div className="flex items-center gap-3 pt-1">
                  <label className="flex items-center gap-1.5 cursor-pointer font-medium">
                    <input
                      type="radio"
                      name="lang"
                      checked={language === 'fr'}
                      onChange={() => setLanguage('fr')}
                      className="text-purple-600"
                    />
                    🇫🇷 Français
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer font-medium">
                    <input
                      type="radio"
                      name="lang"
                      checked={language === 'de'}
                      onChange={() => setLanguage('de')}
                      className="text-purple-600"
                    />
                    🇩🇪 Deutsch
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer font-medium">
                    <input
                      type="radio"
                      name="lang"
                      checked={language === 'it'}
                      onChange={() => setLanguage('it')}
                      className="text-purple-600"
                    />
                    🇮🇹 Italiano
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 text-white font-semibold text-xs shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <PhoneCall className="w-3.5 h-3.5" />
                    Confirmer ma demande de rappel
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
