import React, { useState, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

// Lazy load below-the-fold components to improve initial page load performance
const IndustriesSection = lazy(() => import('./components/IndustriesSection').then(m => ({ default: m.IndustriesSection })));
const ServicesSection = lazy(() => import('./components/ServicesSection').then(m => ({ default: m.ServicesSection })));
const ProductsSection = lazy(() => import('./components/ProductsSection').then(m => ({ default: m.ProductsSection })));
const HowItWorksSection = lazy(() => import('./components/HowItWorksSection').then(m => ({ default: m.HowItWorksSection })));
const WhyChooseUsSection = lazy(() => import('./components/WhyChooseUsSection').then(m => ({ default: m.WhyChooseUsSection })));
const PricingSection = lazy(() => import('./components/PricingSection').then(m => ({ default: m.PricingSection })));
const DemoShowroom = lazy(() => import('./components/DemoShowroom').then(m => ({ default: m.DemoShowroom })));
const LeadershipSection = lazy(() => import('./components/LeadershipSection').then(m => ({ default: m.LeadershipSection })));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const FloatingSupport = lazy(() => import('./components/FloatingSupport').then(m => ({ default: m.FloatingSupport })));
const QuoteModal = lazy(() => import('./components/QuoteModal').then(m => ({ default: m.QuoteModal })));
const PrivacyPolicyModal = lazy(() => import('./components/PrivacyPolicyModal').then(m => ({ default: m.PrivacyPolicyModal })));
const RefundPolicyModal = lazy(() => import('./components/RefundPolicyModal').then(m => ({ default: m.RefundPolicyModal })));
const TermsModal = lazy(() => import('./components/TermsModal').then(m => ({ default: m.TermsModal })));

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

        <Suspense fallback={<div className="min-h-screen"></div>}>
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
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
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
      </Suspense>
    </div>
  );
}
