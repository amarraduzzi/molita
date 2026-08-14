/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBanner } from './components/TrustBanner';
import { RecruitmentCallout } from './components/RecruitmentCallout';
import { ProductsSection } from './components/ProductsSection';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { StorySection } from './components/StorySection';
import { RecruitmentSection } from './components/RecruitmentSection';
import { Footer } from './components/Footer';
import { CallbackModal } from './components/CallbackModal';
import { RecruitmentModal } from './components/RecruitmentModal';
import { Product } from './types';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [selectedProductForCallback, setSelectedProductForCallback] = useState<Product | null>(null);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);

  const handleOpenCallback = (product?: Product) => {
    setSelectedProductForCallback(product || null);
    setCallbackModalOpen(true);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProductForDetail(product);
    const element = document.getElementById('produits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#faf9f6] text-[#1c1917] font-sans selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
        {/* Fixed Navigation Header */}
        <Header
          onOpenCallback={handleOpenCallback}
          onNavigateTo={handleNavigateTo}
        />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section: Kinetic Floating Gummy Universe */}
          <Hero
            onSelectProduct={handleSelectProduct}
            onNavigateTo={handleNavigateTo}
            onOpenCallback={() => handleOpenCallback()}
          />

          {/* Bandeau de confiance (Trust Banner - 4 Core Guarantees) */}
          <TrustBanner />

          {/* Prominent Recruitment Callout Banner (Positioned right after trust banner) */}
          <RecruitmentCallout onNavigateTo={handleNavigateTo} />

          {/* Nos produits (Products Grid) */}
          <ProductsSection
            onOpenCallback={handleOpenCallback}
            selectedProductFromParent={selectedProductForDetail}
            onClearSelectedProductFromParent={() => setSelectedProductForDetail(null)}
          />

          {/* Diagnostic Gummies Quiz */}
          <InteractiveQuiz
            onSelectProduct={handleSelectProduct}
            onOpenCallback={handleOpenCallback}
          />

          {/* Notre Histoire (Brand Story Asymmetric Layout) */}
          <StorySection />

          {/* Rejoignez notre équipe (Recruitment Section & Application Form) */}
          <RecruitmentSection />
        </main>

        {/* Footer */}
        <Footer
          onNavigateTo={handleNavigateTo}
          onOpenCallback={() => handleOpenCallback()}
        />

        {/* Callback Request Modal */}
        <CallbackModal
          isOpen={callbackModalOpen}
          onClose={() => setCallbackModalOpen(false)}
          preselectedProduct={selectedProductForCallback}
        />

        {/* Auto-Trigger Recruitment Modal */}
        <RecruitmentModal onNavigateTo={handleNavigateTo} />
      </div>
    </LanguageProvider>
  );
}

