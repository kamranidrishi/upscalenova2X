import React from 'react';
import { X, FileText, Mail, Phone, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Terms & Conditions</h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last Updated: 22 August 2026</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            aria-label="Close Terms & Conditions"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pr-2 sm:pr-4 py-6 space-y-6 text-sm text-slate-600 leading-relaxed font-normal">
          <p className="text-base text-slate-700">
            Welcome to <strong>Upscale Nova</strong>.
          </p>
          <p>
            These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of the Upscale Nova website and your purchase or use of services provided by Upscale Nova.
          </p>
          <p>
            By accessing our website, submitting an enquiry, placing an order, or purchasing our services, you agree to these Terms. If you do not agree with these Terms, please do not use our website or services.
          </p>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">1. About Our Services</h3>
            <p>Upscale Nova provides digital services including, depending on the package selected:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Website design and development</li>
              <li>Responsive and mobile optimization</li>
              <li>UI/UX implementation</li>
              <li>Business website development</li>
              <li>Website customization</li>
              <li>E-commerce functionality</li>
              <li>Integrations</li>
              <li>Automation</li>
              <li>Website maintenance or related digital services</li>
              <li>Other services specifically agreed with the customer</li>
            </ul>
            <p>
              The exact services included in a project depend on the selected plan, quotation, proposal, or written agreement.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">2. Website Plans</h3>
            <p>Our website may display different service plans.</p>
            <p>Features, pricing, timelines, integrations, revisions, and deliverables may vary between plans.</p>
            <p>
              The features displayed on our website are indicative of the applicable plan. The final scope of work will be determined by the package selected and any written agreement between Upscale Nova and the customer.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">3. Custom Development</h3>
            <p>Where a customer requests custom functionality, the final price and delivery timeline may differ from the standard package.</p>
            <p>Custom requirements may include:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Custom designs</li>
              <li>Advanced integrations</li>
              <li>Payment gateways</li>
              <li>APIs</li>
              <li>Dashboards</li>
              <li>Booking systems</li>
              <li>Automation</li>
              <li>E-commerce functionality</li>
              <li>Third-party services</li>
              <li>Advanced databases</li>
              <li>Special functionality</li>
            </ul>
            <p>Such requirements may require a separate quotation.</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">4. Customer Responsibilities</h3>
            <p>
              The customer is responsible for providing accurate information, content, images, logos, business details, credentials where required, and other materials necessary to complete the project.
            </p>
            <p>
              The customer must ensure that any content supplied to Upscale Nova is legally permitted to be used.
            </p>
            <p>
              Upscale Nova is not responsible for delays caused by missing information, delayed approvals, unavailable credentials, or customer-side changes.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">5. Project Timeline</h3>
            <p>Estimated delivery timelines depend on:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Project scope</li>
              <li>Customer responsiveness</li>
              <li>Availability of required content</li>
              <li>Third-party services</li>
              <li>Requested revisions</li>
              <li>Technical requirements</li>
            </ul>
            <p>A delivery estimate is not a guarantee unless expressly agreed in writing.</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">6. Revisions</h3>
            <p>
              The number of revisions included in a project depends on the selected package or written agreement.
            </p>
            <p>
              Requests outside the agreed scope may result in additional charges and/or an updated delivery timeline.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">7. Third-Party Services</h3>
            <p>Some websites may require third-party services such as:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Hosting</li>
              <li>Domain registration</li>
              <li>Payment gateways</li>
              <li>WhatsApp</li>
              <li>Instagram</li>
              <li>Google Maps</li>
              <li>Email services</li>
              <li>APIs</li>
              <li>Plugins</li>
              <li>SaaS platforms</li>
            </ul>
            <p>
              Third-party fees, restrictions, outages, policy changes, or account limitations are outside Upscale Nova&apos;s direct control.
            </p>
            <p>
              Unless explicitly included in the agreed package, third-party subscription or service fees are the customer&apos;s responsibility.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">8. Payments</h3>
            <p>Payment terms will be communicated before or during project confirmation.</p>
            <p>Depending on the project, an advance payment may be required before development begins.</p>
            <p>The customer is responsible for making payments according to the agreed schedule.</p>
            <p>Upscale Nova may pause development or delivery if required payments are overdue.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">9. Intellectual Property</h3>
            <p>
              Unless otherwise agreed in writing, ownership of the final custom website deliverables will be governed by the applicable project agreement and payment status.
            </p>
            <p>
              Third-party software, libraries, fonts, stock assets, plugins, APIs, and other third-party materials remain subject to their respective licenses.
            </p>
            <p>
              Upscale Nova retains the right to use its own pre-existing tools, reusable components, development methods, frameworks, templates, and know-how.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">10. Portfolio Rights</h3>
            <p>
              Unless the customer specifically requests otherwise in writing and such request is accepted by Upscale Nova, Upscale Nova may display completed work as part of its portfolio, case studies, or marketing materials.
            </p>
            <p>Confidential or sensitive customer information will not intentionally be disclosed for this purpose.</p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">11. Prohibited Use</h3>
            <p>You must not use our website or services for unlawful activities or to create content that violates applicable law or third-party rights.</p>
            <p>You must not attempt to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Gain unauthorized access to our systems</li>
              <li>Disrupt website functionality</li>
              <li>Introduce malicious software</li>
              <li>Abuse our forms or services</li>
              <li>Infringe intellectual-property rights</li>
              <li>Use our services for fraudulent purposes</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">12. Website Availability</h3>
            <p>We aim to keep our website available and functional but do not guarantee uninterrupted access.</p>
            <p>Website availability may be affected by hosting issues, internet outages, maintenance, third-party services, security incidents, technical failures, or events outside our reasonable control.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">13. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by applicable law, Upscale Nova will not be responsible for indirect, incidental, special, or consequential losses arising from the use of our website or services.
            </p>
            <p>
              Nothing in these Terms is intended to exclude or limit liability that cannot legally be excluded or limited under applicable law.
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">14. Indemnification</h3>
            <p>
              You agree to indemnify and hold Upscale Nova harmless from claims, losses, damages, liabilities, and expenses arising from your unlawful use of our services, your violation of these Terms, your infringement of third-party rights, or content or materials supplied by you to the extent permitted by applicable law.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">15. Termination</h3>
            <p>
              We may suspend or terminate access to our website or services where reasonably necessary, including for breach of these Terms, fraudulent activity, non-payment, abuse of our services, or illegal activity.
            </p>
            <p>Termination does not affect rights or obligations that accrued before termination.</p>
          </section>

          {/* Section 16 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">16. Changes to These Terms</h3>
            <p>We may update these Terms from time to time.</p>
            <p>The updated version will be published on this page with a revised &quot;Last Updated&quot; date.</p>
          </section>

          {/* Section 17 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">17. Governing Law</h3>
            <p>These Terms shall be governed by the applicable laws of India.</p>
            <p>Subject to applicable law, disputes shall be subject to the jurisdiction of the appropriate courts having jurisdiction over Maharashtra.</p>
          </section>

          {/* Section 18 */}
          <section className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">18. Contact</h3>
            <p>For questions regarding these Terms:</p>
            
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
                <span>Address: Titwala Thane 421605</span>
              </div>
            </div>
          </section>

          <p className="text-xs text-slate-500 text-center pt-2 italic">
            By using our website or purchasing our services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
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
