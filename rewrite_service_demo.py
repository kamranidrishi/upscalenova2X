import re

with open('src/components/WebsiteDemoRenderer.tsx', 'r') as f:
    content = f.read()

# Find the start of ServiceDemo
start_marker = "// 8. LOCAL SERVICES / REPAIR DEMO"
end_marker = "};" # Note, need to be careful with this to capture the entire component

service_demo_start = content.find(start_marker)
if service_demo_start == -1:
    print("Could not find ServiceDemo start")
    exit(1)

# We know ServiceDemo is the last component in the file.
# So we can just slice from start_marker to the end of the file.
original_service_demo = content[service_demo_start:]

new_service_demo = """// 8. LOCAL SERVICES / REPAIR DEMO (Apex Pro Services)
// ============================================================================
const ServiceDemo: React.FC<{ demo: DemoItem; isMobile: boolean; isTablet: boolean; onPlanChange?: (plan: PlanType) => void }> = ({ demo, isMobile, onPlanChange }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isMega = plan === 'Mega';
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"public" | "compare">("public");

  return (
    <div className="w-full h-full bg-slate-50 text-slate-900 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar">
      
      {/* Top Navigation for Demo Switching */}
      <header className="bg-emerald-950 text-white px-6 py-3 flex items-center justify-between sticky top-0 z-30 border-b border-emerald-800">
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("public")}
              className={`hover:text-emerald-400 transition-colors ${activeTab === "public" ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : ""}`}
            >
              Live Demo
            </button>
            <button
              onClick={() => setActiveTab("compare")}
              className={`hover:text-emerald-400 transition-colors ${activeTab === "compare" ? "text-emerald-400 border-b-2 border-emerald-400 pb-1" : ""}`}
            >
              Compare Plans
            </button>
          </nav>
        </div>
      </header>

      {activeTab === "public" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <header className="bg-emerald-700 text-white px-6 py-4 flex items-center justify-between shadow-md">
            <div className="font-black text-xl flex items-center gap-2">
              <Wrench className="w-5 h-5" /> Apex Pro Services
            </div>
            <div className="text-xs font-bold flex items-center gap-2">
              <Phone className="w-4 h-4" /> 24/7 Emergency: 1800-APEX-FIX
            </div>
          </header>

          <div className="bg-emerald-800 text-white py-14 px-6 text-center space-y-3">
            <h1 className="text-3xl sm:text-4xl font-black">Fast, Certified Home & Office Repairs</h1>
            <p className="text-emerald-100 text-xs sm:text-sm max-w-lg mx-auto">Upfront estimates, licensed technicians, and 100% satisfaction guarantee.</p>
          </div>

          <div className="max-w-xl mx-auto -mt-8 px-4 mb-16 relative z-10">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Request Free Inspection Quote</h3>
              
              {submitted ? (
                <div className="text-center py-6 space-y-3 text-xs">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto font-bold text-lg">✓</div>
                  <h4 className="font-bold text-base text-slate-900">Request Dispatched!</h4>
                  <p className="text-slate-600">A certified technician will call you within 15 minutes.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3 text-xs">
                  <input type="text" placeholder="Your Name" required className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3" />
                  <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3" />
                  <select className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-700">
                    <option>Emergency Plumbing</option>
                    <option>Electrical Repair</option>
                    <option>HVAC & Air Conditioning</option>
                    <option>Roofing & Renovation</option>
                  </select>
                  <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-xs transition-colors shadow-md">
                    Send Fast Service Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {activeTab === "compare" && (
        <div className="py-12 px-6 max-w-7xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-slate-50">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-600 font-black text-xs uppercase tracking-widest">
              Upscale Nova Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900">
              Home & Repair Website Packages
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Choose the perfect package to grow your local service business, from essential landing pages to complete booking ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* BASE PACKAGE */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Basic Home Repair
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    Base Package
                  </h3>
                  <div className="text-3xl font-black text-slate-900 mt-2">
                    ₹12,999
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">
                    Essential features for a small home repair business.
                  </p>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 font-medium pt-4">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Professional Home & Repair landing page</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Mobile responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Home, About, Services & Contact sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Basic service listing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Click-to-call & WhatsApp buttons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Contact/inquiry form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Basic location/map section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Basic SEO setup</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onPlanChange?.("Base")}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3.5 rounded-xl text-xs transition-colors mt-8"
              >
                Choose Basic Plan
              </button>
            </div>

            {/* PRO PACKAGE */}
            <div className="bg-slate-900 p-8 rounded-3xl border-2 border-slate-800 shadow-xl space-y-6 flex flex-col justify-between relative transform md:-translate-y-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                POPULAR VALUE
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                    Professional Home Repair
                  </div>
                  <h3 className="text-2xl font-black text-white mt-1">
                    Pro Package
                  </h3>
                  <div className="text-3xl font-black text-blue-400 mt-2">
                    ₹16,999
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium">
                    More features and better lead generation.
                  </p>
                </div>
                
                <div className="text-xs font-bold text-slate-300 pt-2 border-b border-slate-800 pb-2">
                  Everything in Basic, plus:
                </div>
                
                <ul className="space-y-3 text-xs text-slate-300 font-medium pt-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Detailed service offerings grid & categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Emergency repair CTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Instant quote request form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Service area/location section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Customer testimonials & FAQ section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Google Maps integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Before & After project/gallery section</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Better SEO optimization</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onPlanChange?.("Pro")}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl text-xs transition-colors mt-8 shadow-lg shadow-blue-900/50"
              >
                Choose Pro Plan
              </button>
            </div>

            {/* MEGA PACKAGE */}
            <div className="bg-emerald-900 p-8 rounded-3xl border-2 border-amber-400 shadow-2xl shadow-emerald-900/40 space-y-6 flex flex-col justify-between relative transform md:-translate-y-8 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-5 py-1.5 rounded-full shadow-lg">
                BEST VALUE
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase text-emerald-300 tracking-wider">
                    Premium Home Repair Pro
                  </div>
                  <h3 className="text-2xl font-black text-white mt-1">
                    Mega Package
                  </h3>
                  <div className="text-3xl font-black text-amber-400 mt-2">
                    ₹24,999
                  </div>
                  <p className="text-xs text-emerald-100/80 mt-2 font-medium">
                    Complete professional home repair website with advanced features.
                  </p>
                </div>
                
                <div className="text-xs font-bold text-amber-200 pt-2 border-b border-emerald-800/60 pb-2">
                  Everything in Pro, plus:
                </div>

                <ul className="space-y-3 text-xs text-slate-100 font-medium pt-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Full service management & booking flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Online appointment/request system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Emergency 24/7 call & Sticky mobile CTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Multiple detailed service & location pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Advanced local & Schema/structured SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>WhatsApp + Call + Email CTA lead capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Trust badges, certifications & promo banners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Speed optimization & Analytics-ready setup</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => onPlanChange?.("Mega")}
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 rounded-xl text-xs transition-colors mt-8 shadow-lg shadow-amber-900/50"
              >
                Get Started with Mega
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
"""

content = content[:service_demo_start] + new_service_demo

with open('src/components/WebsiteDemoRenderer.tsx', 'w') as f:
    f.write(content)

print("Updated WebsiteDemoRenderer.tsx")
