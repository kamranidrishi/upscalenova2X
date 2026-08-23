import React from 'react';
import { X, RefreshCw, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

interface RefundPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleOverride?: string;
}

export const RefundPolicyModal: React.FC<RefundPolicyModalProps> = ({ isOpen, onClose, titleOverride }) => {
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
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{titleOverride || "Refund & Cancellation Policy"}</h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>Last Updated: 22 August 2026</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            aria-label="Close Refund Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pr-2 sm:pr-4 py-6 space-y-6 text-sm text-slate-600 leading-relaxed font-normal">
          <p className="text-base text-slate-700">
            This Refund & Cancellation Policy explains the terms applicable to purchases of services from <strong>Upscale Nova</strong>.
          </p>
          <p>
            Because our services involve customized design, development, planning, configuration, and allocation of development resources, cancellation and refund eligibility may depend on the stage of the project.
          </p>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">1. Service Orders</h3>
            <p>Before placing an order, customers should carefully review:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Selected plan</li>
              <li>Included features</li>
              <li>Project requirements</li>
              <li>Pricing</li>
              <li>Estimated timeline</li>
              <li>Additional requirements</li>
              <li>Payment terms</li>
            </ul>
            <p>Once development work begins, resources may be allocated specifically to the customer&apos;s project.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">2. Cancellation Before Work Begins</h3>
            <p>
              If a customer requests cancellation before any substantial work has started, Upscale Nova may consider the cancellation request and refund eligibility based on the circumstances and applicable law.
            </p>
            <p>
              Any applicable payment-processing charges or non-refundable third-party costs may be deducted where legally permissible and where they were actually incurred.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">3. Cancellation After Work Has Started</h3>
            <p>
              Once design, development, customization, integration, or other project work has started, cancellation may not qualify for a full refund.
            </p>
            <p>Any refund, if applicable, will be determined based on:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Work already completed</li>
              <li>Development resources already allocated</li>
              <li>Third-party costs incurred</li>
              <li>Custom assets or services purchased</li>
              <li>Project stage</li>
              <li>Amount already delivered to the customer</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">4. Custom Services</h3>
            <p>
              Custom development, advanced integrations, special functionality, or services specifically created for a customer may have different cancellation terms.
            </p>
            <p>
              Where a separate quotation or agreement has been provided, those terms will apply to the extent permitted by applicable law.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">5. Non-Refundable Third-Party Costs</h3>
            <p>
              Payments made to third-party providers on behalf of or for the customer&apos;s project may not be refundable where the third party does not provide a refund.
            </p>
            <p>Examples may include:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Domain registration</li>
              <li>Hosting</li>
              <li>Premium plugins</li>
              <li>Software subscriptions</li>
              <li>API services</li>
              <li>Paid templates or assets</li>
              <li>Payment gateway charges</li>
              <li>Other third-party services</li>
            </ul>
            <p>
              Where such costs are included in a refund calculation, only amounts actually recoverable from the relevant provider may be refundable, subject to applicable law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">6. Customer Delay</h3>
            <p>If a project is delayed because the customer does not provide:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Required content</li>
              <li>Images</li>
              <li>Logos</li>
              <li>Business information</li>
              <li>Approvals</li>
              <li>Credentials</li>
              <li>Feedback</li>
            </ul>
            <p>within a reasonable period, the delivery timeline may be extended.</p>
            <p>Such delay by itself does not automatically create a right to a refund.</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">7. Revisions and Scope Changes</h3>
            <p>Requests that substantially change the originally agreed project scope may be treated as additional work.</p>
            <p>Additional work may require:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Additional charges</li>
              <li>Additional development time</li>
              <li>A revised quotation</li>
            </ul>
            <p>Scope changes do not automatically qualify for a refund.</p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">8. Defective or Undelivered Services</h3>
            <p>
              If Upscale Nova materially fails to deliver the services expressly agreed upon, the customer should contact us promptly so that we can review and attempt to resolve the issue.
            </p>
            <p>Depending on the circumstances, the resolution may include:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Correction of the issue</li>
              <li>Completion of outstanding agreed work</li>
              <li>Replacement of defective deliverables</li>
              <li>Partial refund</li>
              <li>Other appropriate remedy</li>
            </ul>
            <p>Nothing in this policy limits any rights or remedies that cannot legally be excluded under applicable law.</p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">9. Refund Request Process</h3>
            <p>To request a cancellation or refund, contact us using:</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
              <p>Email: <a href={`mailto:${COMPANY_EMAIL}`} className="text-indigo-600 font-semibold hover:underline">{COMPANY_EMAIL}</a></p>
            </div>
            <p>Please include:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Customer name</li>
              <li>Order/project reference</li>
              <li>Date of payment</li>
              <li>Selected service/plan</li>
              <li>Reason for the request</li>
              <li>Relevant supporting information</li>
            </ul>
            <p>We may request additional information to verify the request.</p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">10. Refund Processing</h3>
            <p>
              If a refund is approved, it will generally be processed using the original payment method where technically possible.
            </p>
            <p>
              The time taken for the refund to appear in the customer&apos;s account may depend on the payment provider or bank.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">11. Fraudulent Transactions</h3>
            <p>
              If a transaction appears fraudulent, unauthorized, or suspicious, we may investigate the transaction and suspend related services while the matter is reviewed.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">12. Policy Changes</h3>
            <p>We may update this Refund & Cancellation Policy from time to time.</p>
            <p>The updated version will be published on this page with a revised &quot;Last Updated&quot; date.</p>
          </section>

          {/* Section 13 */}
          <section className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">13. Contact Us</h3>
            <p>For cancellation or refund requests:</p>
            
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
            </div>
          </section>

          <p className="text-xs text-slate-500 text-center pt-2 italic">
            By purchasing our services, you acknowledge that you have reviewed this Refund & Cancellation Policy and the applicable terms of your selected service.
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
