export type Language = 'fr' | 'de' | 'it';

export interface Translations {
  header: {
    nav: {
      products: string;
      quiz: string;
      story: string;
      recruitment: string;
      recruitmentBadge: string;
    };
    callbackButton: string;
    announcement: {
      desktopText: string;
      desktopCta: string;
      mobileText: string;
      mobileCta: string;
      closeAria: string;
    };
    mobile: {
      products: string;
      diagnostic: string;
      story: string;
      recruitment: string;
      recruitmentBadge: string;
      callbackButton: string;
    };
  };
  hero: {
    primaryCta: string;
    quizCta: string;
    swipeHint: string;
    formulaOfTheMoment: string;
    serviceLink: string;
  };
  trustBanner: {
    title: string;
    items: { title: string; sub: string }[];
  };
  recruitmentCallout: {
    badge: string;
    title: string;
    text: string;
    languagesLabel: string;
    cta: string;
    ctaSub: string;
  };
  recruitmentModal: {
    badge: string;
    title: string;
    text: string;
    cta: string;
    dismiss: string;
  };
  recruitmentSection: {
    badge: string;
    title: string;
    intro: string;
    languagesTitle: string;
    perk1Title: string;
    perk1Text: string;
    perk2Title: string;
    perk2Text: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    cityLabel: string;
    experienceLabel: string;
    experienceBeginner: string;
    experienceMid: string;
    experienceSenior: string;
    languagesFieldLabel: string;
    languagesError: string;
    messageLabel: string;
    submitCta: string;
    successTitle: string;
    successTextPrefix: string;
    successTextSuffix: string;
    resetCta: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    header: {
      nav: {
        products: 'Nos Produits',
        quiz: 'Quiz Diagnostic',
        story: 'Notre Histoire',
        recruitment: 'Recrutement',
        recruitmentBadge: 'Suisse/Maroc',
      },
      callbackButton: 'Être rappelé (Suisse 🇨🇭)',
      announcement: {
        desktopText: "Nous recrutons : télévente Suisse, depuis le Maroc ou l'Europe 🇨🇭",
        desktopCta: 'Voir les postes',
        mobileText: 'Nous recrutons au Maroc & en Europe',
        mobileCta: 'Postuler',
        closeAria: "Masquer l'annonce",
      },
      mobile: {
        products: 'Nos 5 Formules Gummies',
        diagnostic: 'Diagnostic sur-mesure',
        story: 'Notre Histoire',
        recruitment: 'Recrutement Télévente',
        recruitmentBadge: 'Recrutement',
        callbackButton: 'Demander un rappel gratuit 🇨🇭',
      },
    },
    hero: {
      primaryCta: 'Découvrir nos produits',
      quizCta: 'Trouver mes gummies (Quiz 1 min)',
      swipeHint: '← Glisser pour voir les 5 formules →',
      formulaOfTheMoment: 'Formule du moment',
      serviceLink: 'Service client Suisse & Conseils : Rappel gratuit',
    },
    trustBanner: {
      title: 'Notre engagement qualité',
      items: [
        { title: 'Fabriqué en Suisse', sub: 'Qualité & Rigueur Scientifique' },
        { title: '100% Végan', sub: 'Pectine de fruit, 0 gélatine' },
        { title: 'Sans Gluten & Allergènes', sub: 'Digestion douce & optimale' },
        { title: 'Arômes Naturels', sub: 'Vrais fruits & extraits végétaux' },
      ],
    },
    recruitmentCallout: {
      badge: 'Nous recrutons • Télévente & Conseil Suisse',
      title: 'Vous parlez allemand, français ou italien ?',
      text: "Que vous soyez au Maroc ou en Europe, si vous parlez français, allemand ou italien couramment, ce poste est pour vous. Rémunération fixe motivante et primes non plafonnées.",
      languagesLabel: 'Langues recherchées',
      cta: 'Découvrir les postes & Postuler',
      ctaSub: 'Candidature en 2 min • Traitement sous 48h',
    },
    recruitmentModal: {
      badge: 'Recrutement Télévente Suisse 🇨🇭',
      title: 'Rejoignez notre équipe de téléconseillers',
      text: "Vous parlez français, allemand ou italien ? Molita recrute au Maroc et en Europe pour sa force de vente Suisse en télétravail.",
      cta: 'Découvrir les postes',
      dismiss: 'Continuer vers la boutique',
    },
    recruitmentSection: {
      badge: 'Recrutement Télévente & Conseil Suisse',
      title: 'Rejoignez notre équipe de téléconseillers',
      intro: "Molita développe sa force de vente dédiée au marché suisse. Nous recrutons des conseillers commerciaux passionnés, d'origine marocaine, basés au Maroc ou ailleurs en Europe, pour accompagner notre clientèle exigeante en Suisse en télétravail.",
      languagesTitle: 'Langues recherchées pour le marché suisse',
      perk1Title: 'Rémunération Attractive',
      perk1Text: 'Fixe motivant + primes de vente non plafonnées basées sur le chiffre réalisé en Suisse.',
      perk2Title: 'Formation Continue',
      perk2Text: 'Formation complète aux produits Molita, aux techniques de vente suisses et à la nutrithérapie.',
      formTitle: 'Postuler en 2 minutes',
      formSubtitle: 'Équipe Télévente Suisse',
      nameLabel: 'Nom & Prénom *',
      emailLabel: 'Email *',
      phoneLabel: 'Téléphone (WhatsApp) *',
      cityLabel: 'Ville / Pays de résidence (optionnel)',
      experienceLabel: 'Expérience en télévente (optionnel)',
      experienceBeginner: 'Débutant (Formation offerte)',
      experienceMid: '1 à 3 ans',
      experienceSenior: 'Plus de 3 ans',
      languagesFieldLabel: 'Langues maîtrisées * (au moins une case cochée)',
      languagesError: 'Veuillez cocher au moins une langue maîtrisée pour postuler.',
      messageLabel: 'Présentation rapide ou lien CV / LinkedIn (optionnel)',
      submitCta: 'Envoyer ma candidature',
      successTitle: 'Candidature bien reçue !',
      successTextPrefix: 'Merci',
      successTextSuffix: '. Notre responsable recrutement examinera votre profil sous 48h et vous recontactera par téléphone.',
      resetCta: 'Envoyer une autre candidature',
    },
  },
  de: {
    header: {
      nav: {
        products: 'Unsere Produkte',
        quiz: 'Diagnose-Quiz',
        story: 'Unsere Geschichte',
        recruitment: 'Karriere',
        recruitmentBadge: 'Schweiz/Marokko',
      },
      callbackButton: 'Rückruf anfordern (Schweiz 🇨🇭)',
      announcement: {
        desktopText: 'Wir stellen ein: Telesales Schweiz, aus Marokko oder Europa 🇨🇭',
        desktopCta: 'Offene Stellen ansehen',
        mobileText: 'Wir stellen in Marokko & Europa ein',
        mobileCta: 'Bewerben',
        closeAria: 'Ankündigung ausblenden',
      },
      mobile: {
        products: 'Unsere 5 Gummy-Formeln',
        diagnostic: 'Individuelle Diagnose',
        story: 'Unsere Geschichte',
        recruitment: 'Telesales-Rekrutierung',
        recruitmentBadge: 'Karriere',
        callbackButton: 'Kostenlosen Rückruf anfordern 🇨🇭',
      },
    },
    hero: {
      primaryCta: 'Unsere Produkte entdecken',
      quizCta: 'Meine Gummies finden (1-Min-Quiz)',
      swipeHint: '← Wischen, um alle 5 Formeln zu sehen →',
      formulaOfTheMoment: 'Formel des Moments',
      serviceLink: 'Schweizer Kundenservice & Beratung: Kostenloser Rückruf',
    },
    trustBanner: {
      title: 'Unser Qualitätsversprechen',
      items: [
        { title: 'Hergestellt in der Schweiz', sub: 'Qualität & wissenschaftliche Präzision' },
        { title: '100% Vegan', sub: 'Fruchtpektin, keine Gelatine' },
        { title: 'Glutenfrei & Allergenfrei', sub: 'Sanfte, optimale Verdauung' },
        { title: 'Natürliche Aromen', sub: 'Echte Früchte & Pflanzenextrakte' },
      ],
    },
    recruitmentCallout: {
      badge: 'Wir stellen ein • Telesales & Beratung Schweiz',
      title: 'Sprechen Sie Deutsch, Französisch oder Italienisch?',
      text: 'Ob in Marokko oder Europa: Wenn Sie fließend Französisch, Deutsch oder Italienisch sprechen, ist diese Stelle für Sie. Attraktives Fixgehalt und unbegrenzte Provisionen.',
      languagesLabel: 'Gesuchte Sprachen',
      cta: 'Stellen entdecken & Bewerben',
      ctaSub: 'Bewerbung in 2 Min • Antwort innerhalb von 48h',
    },
    recruitmentModal: {
      badge: 'Telesales-Rekrutierung Schweiz 🇨🇭',
      title: 'Werden Sie Teil unseres Beraterteams',
      text: 'Sprechen Sie Französisch, Deutsch oder Italienisch? Molita stellt in Marokko und Europa für sein Schweizer Vertriebsteam im Homeoffice ein.',
      cta: 'Stellen entdecken',
      dismiss: 'Weiter zum Shop',
    },
    recruitmentSection: {
      badge: 'Telesales & Beratung Schweiz',
      title: 'Werden Sie Teil unseres Beraterteams',
      intro: 'Molita baut sein Vertriebsteam für den Schweizer Markt aus. Wir suchen leidenschaftliche Verkaufsberater marokkanischer Herkunft, ansässig in Marokko oder anderswo in Europa, um unsere anspruchsvolle Schweizer Kundschaft im Homeoffice zu betreuen.',
      languagesTitle: 'Gesuchte Sprachen für den Schweizer Markt',
      perk1Title: 'Attraktive Vergütung',
      perk1Text: 'Motivierendes Fixgehalt + unbegrenzte Verkaufsprovisionen basierend auf dem Schweizer Umsatz.',
      perk2Title: 'Kontinuierliche Schulung',
      perk2Text: 'Umfassende Schulung zu Molita-Produkten, Schweizer Verkaufstechniken und Nährstofftherapie.',
      formTitle: 'In 2 Minuten bewerben',
      formSubtitle: 'Team Telesales Schweiz',
      nameLabel: 'Vor- & Nachname *',
      emailLabel: 'E-Mail *',
      phoneLabel: 'Telefon (WhatsApp) *',
      cityLabel: 'Wohnort / Land (optional)',
      experienceLabel: 'Telesales-Erfahrung (optional)',
      experienceBeginner: 'Anfänger (Schulung inklusive)',
      experienceMid: '1 bis 3 Jahre',
      experienceSenior: 'Über 3 Jahre',
      languagesFieldLabel: 'Beherrschte Sprachen * (mind. eine auswählen)',
      languagesError: 'Bitte wählen Sie mindestens eine Sprache aus, um sich zu bewerben.',
      messageLabel: 'Kurzvorstellung oder Lebenslauf-/LinkedIn-Link (optional)',
      submitCta: 'Bewerbung senden',
      successTitle: 'Bewerbung erfolgreich eingegangen!',
      successTextPrefix: 'Danke',
      successTextSuffix: '. Unser Recruiting-Team prüft Ihr Profil innerhalb von 48h und meldet sich telefonisch bei Ihnen.',
      resetCta: 'Weitere Bewerbung senden',
    },
  },
  it: {
    header: {
      nav: {
        products: 'I Nostri Prodotti',
        quiz: 'Quiz Diagnostico',
        story: 'La Nostra Storia',
        recruitment: 'Lavora con noi',
        recruitmentBadge: 'Svizzera/Marocco',
      },
      callbackButton: 'Richiedi richiamata (Svizzera 🇨🇭)',
      announcement: {
        desktopText: 'Stiamo assumendo: televendita Svizzera, dal Marocco o dall\'Europa 🇨🇭',
        desktopCta: 'Vedi le posizioni',
        mobileText: 'Assumiamo in Marocco & Europa',
        mobileCta: 'Candidati',
        closeAria: "Nascondi l'annuncio",
      },
      mobile: {
        products: 'Le Nostre 5 Formule Gummies',
        diagnostic: 'Diagnosi personalizzata',
        story: 'La Nostra Storia',
        recruitment: 'Reclutamento Televendita',
        recruitmentBadge: 'Lavora con noi',
        callbackButton: 'Richiedi richiamata gratuita 🇨🇭',
      },
    },
    hero: {
      primaryCta: 'Scopri i nostri prodotti',
      quizCta: 'Trova le mie gummies (Quiz 1 min)',
      swipeHint: '← Scorri per vedere le 5 formule →',
      formulaOfTheMoment: 'Formula del momento',
      serviceLink: 'Servizio clienti Svizzera & Consulenza: Richiamata gratuita',
    },
    trustBanner: {
      title: 'Il nostro impegno per la qualità',
      items: [
        { title: 'Prodotto in Svizzera', sub: 'Qualità & rigore scientifico' },
        { title: '100% Vegano', sub: 'Pectina di frutta, 0 gelatina' },
        { title: 'Senza Glutine & Allergeni', sub: 'Digestione delicata & ottimale' },
        { title: 'Aromi Naturali', sub: 'Frutta vera & estratti vegetali' },
      ],
    },
    recruitmentCallout: {
      badge: 'Stiamo assumendo • Televendita & Consulenza Svizzera',
      title: 'Parli tedesco, francese o italiano?',
      text: 'Che tu sia in Marocco o in Europa, se parli correntemente francese, tedesco o italiano, questa posizione fa per te. Retribuzione fissa motivante e provvigioni senza limiti.',
      languagesLabel: 'Lingue ricercate',
      cta: 'Scopri le posizioni & Candidati',
      ctaSub: 'Candidatura in 2 min • Risposta entro 48h',
    },
    recruitmentModal: {
      badge: 'Reclutamento Televendita Svizzera 🇨🇭',
      title: 'Unisciti al nostro team di consulenti telefonici',
      text: 'Parli francese, tedesco o italiano? Molita assume in Marocco e in Europa per la sua forza vendita Svizzera in smart working.',
      cta: 'Scopri le posizioni',
      dismiss: 'Continua verso il negozio',
    },
    recruitmentSection: {
      badge: 'Televendita & Consulenza Svizzera',
      title: 'Unisciti al nostro team di consulenti telefonici',
      intro: "Molita sta sviluppando la propria forza vendita dedicata al mercato svizzero. Cerchiamo consulenti commerciali appassionati, di origine marocchina, residenti in Marocco o altrove in Europa, per seguire la nostra esigente clientela svizzera in smart working.",
      languagesTitle: 'Lingue ricercate per il mercato svizzero',
      perk1Title: 'Retribuzione Interessante',
      perk1Text: 'Fisso motivante + provvigioni di vendita senza limiti basate sul fatturato realizzato in Svizzera.',
      perk2Title: 'Formazione Continua',
      perk2Text: 'Formazione completa sui prodotti Molita, sulle tecniche di vendita svizzere e sulla nutriterapia.',
      formTitle: 'Candidati in 2 minuti',
      formSubtitle: 'Team Televendita Svizzera',
      nameLabel: 'Nome & Cognome *',
      emailLabel: 'Email *',
      phoneLabel: 'Telefono (WhatsApp) *',
      cityLabel: 'Città / Paese di residenza (opzionale)',
      experienceLabel: 'Esperienza in televendita (opzionale)',
      experienceBeginner: 'Principiante (Formazione inclusa)',
      experienceMid: 'Da 1 a 3 anni',
      experienceSenior: 'Più di 3 anni',
      languagesFieldLabel: 'Lingue padroneggiate * (almeno una selezionata)',
      languagesError: 'Seleziona almeno una lingua per candidarti.',
      messageLabel: 'Breve presentazione o link CV / LinkedIn (opzionale)',
      submitCta: 'Invia candidatura',
      successTitle: 'Candidatura ricevuta con successo!',
      successTextPrefix: 'Grazie',
      successTextSuffix: '. Il nostro responsabile delle assunzioni esaminerà il tuo profilo entro 48h e ti ricontatterà telefonicamente.',
      resetCta: 'Invia un\'altra candidatura',
    },
  },
};
