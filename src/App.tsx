import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IndustriesSection } from './components/IndustriesSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PricingSection } from './components/PricingSection';
import { DemoShowroom } from './components/DemoShowroom';
import { LeadershipSection } from './components/LeadershipSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingSupport } from './components/FloatingSupport';
import { QuoteModal } from './components/QuoteModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { RefundPolicyModal } from './components/RefundPolicyModal';
import { TermsModal } from './components/TermsModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [refundModalOpen, setRefundModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white pb-14 sm:pb-0">
      {/* Header Navigation */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main>
        {/* Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Industries We Empower */}
        <IndustriesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Services Section */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Products & QR/NFC Stands */}
        <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Process - How It Works */}
        <HowItWorksSection />

        {/* Why Choose Us */}
        <WhyChooseUsSection onOpenQuoteModal={() => handleOpenQuoteModal("Custom Project")} />

        {/* Pricing Plans */}
        <PricingSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Demo Showroom */}
        <DemoShowroom onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Meet Leadership */}
        <LeadershipSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* FAQ */}
        <FAQSection />

        {/* Contact Us Form */}
        <ContactSection prefilledService={selectedService} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)}
        onOpenRefundPolicy={() => setRefundModalOpen(true)}
        onOpenTerms={() => setTermsModalOpen(true)}
      />

      {/* Floating Call & WhatsApp Support Hub */}
      <FloatingSupport />

      {/* Interactive Consultation Modal */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceTitle={selectedService}
      />

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      {/* Refund & Cancellation Policy Modal */}
      <RefundPolicyModal
        isOpen={refundModalOpen}
        onClose={() => setRefundModalOpen(false)}
      />

      {/* Terms & Conditions Modal */}
      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}
