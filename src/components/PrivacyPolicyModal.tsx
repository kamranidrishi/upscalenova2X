import React from 'react';
import { X, ShieldCheck, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative border border-slate-200 max-h-[90vh] flex flex-col text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Privacy Policy</h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last Updated: 22 August 2026</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pr-2 sm:pr-4 py-6 space-y-6 text-sm text-slate-600 leading-relaxed font-normal">
          <p className="text-base text-slate-700">
            <strong>Upscale Nova</strong> (&quot;Upscale Nova&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy and is committed to protecting the personal information you provide while using our website and services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, contact us, request a service, purchase a service, or otherwise interact with Upscale Nova.
          </p>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">1. Information We Collect</h3>
            <p>Depending on how you interact with our website, we may collect:</p>
            
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
              <h4 className="font-semibold text-slate-800">Information You Provide</h4>
              <p>This may include:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business/company name</li>
                <li>Business requirements</li>
                <li>Project information</li>
                <li>Website requirements</li>
                <li>Billing and transaction information</li>
                <li>Information submitted through contact or enquiry forms</li>
                <li>Any other information you voluntarily provide to us</li>
              </ul>
            </div>
            <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200">
              ⚠️ Please do not submit passwords, payment-card PINs, OTPs, or other highly sensitive credentials through general contact forms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">2. Information Collected Automatically</h3>
            <p>When you visit our website, certain technical information may be collected automatically, such as:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Approximate usage information</li>
              <li>Referring website</li>
              <li>Date and time of access</li>
            </ul>
            <p>We may use cookies, analytics tools, or similar technologies where applicable.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">3. How We Use Your Information</h3>
            <p>We may use your information to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Respond to enquiries</li>
              <li>Understand your website or business requirements</li>
              <li>Provide requested services</li>
              <li>Communicate about projects</li>
              <li>Process payments</li>
              <li>Send service-related communications</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud, misuse, or security issues</li>
              <li>Maintain website functionality</li>
              <li>Comply with applicable legal requirements</li>
            </ul>
            <p>We will not use your personal information for purposes that are incompatible with the purpose for which it was collected, except where permitted or required by applicable law.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">4. Communication</h3>
            <p>
              If you contact us through our website, email, WhatsApp, phone, social media, or another communication channel, we may use the information provided to respond to your enquiry or provide our services.
            </p>
            <p>
              If you voluntarily provide your contact details, you consent to receiving communications reasonably necessary to handle your enquiry or project.
            </p>
            <p>
              Marketing communications, where applicable, may be subject to applicable consent and opt-out requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">5. Payments</h3>
            <p>
              Where online payments are available, payment transactions may be processed through third-party payment providers.
            </p>
            <p>
              Upscale Nova does not intend to store complete payment-card details such as full card numbers, CVV numbers, or PINs on its own website unless expressly stated otherwise.
            </p>
            <p>
              Payment providers may collect and process information according to their own privacy policies and terms.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">6. Third-Party Services</h3>
            <p>Our website may use third-party services such as:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Payment providers</li>
              <li>Analytics providers</li>
              <li>Hosting providers</li>
              <li>Cloud services</li>
              <li>Communication services</li>
              <li>Social media platforms</li>
              <li>Maps and location services</li>
              <li>WhatsApp or similar communication platforms</li>
            </ul>
            <p>These third parties may process information according to their own terms and privacy policies.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">7. Data Security</h3>
            <p>
              We take reasonable technical and organisational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or loss.
            </p>
            <p>
              However, no internet-based system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">8. Data Retention</h3>
            <p>
              We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including providing services, maintaining business records, resolving disputes, enforcing agreements, and complying with applicable legal obligations.
            </p>
            <p>
              When information is no longer reasonably required, it may be deleted or anonymized, subject to applicable legal and operational requirements.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">9. Your Rights</h3>
            <p>Subject to applicable law, you may have rights regarding your personal data, including the ability to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Request information about processing of your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of personal information where legally applicable</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Raise a complaint regarding processing of your personal data</li>
            </ul>
            <p>Requests may be submitted using the contact details below.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">10. Children&apos;s Privacy</h3>
            <p>
              Our website is not intended to knowingly collect personal information from children in violation of applicable law.
            </p>
            <p>
              If you believe that a child has provided personal information to us improperly, please contact us so that appropriate action can be taken.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">11. External Links</h3>
            <p>
              Our website may contain links to third-party websites, social media platforms, payment providers, or other services.
            </p>
            <p>
              We are not responsible for the privacy practices or content of third-party websites.
            </p>
            <p>
              We recommend reviewing their respective privacy policies before providing personal information.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">12. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices.
            </p>
            <p>
              The updated version will be published on this page with a revised &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">13. Contact Us</h3>
            <p>For privacy-related questions, requests, or complaints, contact:</p>
            
            <div className="space-y-2 pt-2 text-slate-700 font-medium">
              <p className="font-bold text-slate-900">Upscale Nova</p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>Email: <a href={`mailto:${COMPANY_EMAIL}`} className="text-indigo-600 hover:underline">{COMPANY_EMAIL}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-600" />
                <span>Phone: <a href={CALL_LINK} className="text-indigo-600 hover:underline">{COMPANY_PHONE_DISPLAY}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span>Address: titwala thane 421605</span>
              </div>
              <p className="text-xs text-slate-500 pt-2 border-t border-slate-200">
                Privacy Contact / Grievance Contact: <span className="font-semibold text-slate-700">{COMPANY_EMAIL}</span>
              </p>
            </div>
          </section>

          <p className="text-xs text-slate-500 text-center pt-2 italic">
            By using our website, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-all shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
