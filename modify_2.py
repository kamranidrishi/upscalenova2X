import re

with open('src/components/SchoolDemo.tsx', 'r') as f:
    content = f.read()

new_sections = """
          {/* 14b. PRINCIPAL'S MESSAGE */}
          <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
               <div className="w-full md:w-1/3">
                 <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="Principal" className="w-full h-full object-cover" />
                   <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6 text-white">
                     <div className="font-black text-xl">Dr. Robert Chen</div>
                     <div className="text-blue-300 text-sm font-bold uppercase tracking-wider">Principal</div>
                   </div>
                 </div>
               </div>
               <div className="w-full md:w-2/3 space-y-6">
                 <h4 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Principal's Message</h4>
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900">Welcome to a Community of Excellence</h2>
                 <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                   <p>
                     Education is not just about academic brilliance; it is about building character, fostering resilience, and inspiring a lifelong love for learning. At BrightFuture, we are committed to providing an environment where every student is encouraged to discover their unique potential.
                   </p>
                   <p>
                     Our dedicated faculty, modern infrastructure, and progressive curriculum ensure that our students are well-prepared to navigate the complexities of the modern world. We believe in partnering with parents to create a strong foundation for our children's future.
                   </p>
                 </div>
                 <div className="pt-4">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-50" />
                 </div>
               </div>
             </div>
          </section>

          {/* 15. CONTACT & ENQUIRY SECTION */}
          <section className="py-20 px-6 bg-white border-t border-slate-200">
             <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Get in Touch</h2>
                 <p className="text-slate-500">We would love to hear from you. Reach out to our admissions office for any queries.</p>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                 {/* Contact Details */}
                 <div className="space-y-8">
                   <div className="bg-slate-900 text-white p-8 md:p-10 rounded-3xl shadow-xl">
                     <h3 className="text-2xl font-black mb-8">Contact Information</h3>
                     <div className="space-y-6">
                       <div className="flex gap-4">
                         <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                           <MapPin className="w-6 h-6" />
                         </div>
                         <div>
                           <div className="font-bold text-lg">Campus Address</div>
                           <div className="text-slate-400 mt-1 leading-relaxed">123 Education Hub, Knowledge City<br/>State 12345</div>
                           <button className="mt-3 text-blue-400 text-sm font-bold flex items-center gap-1 hover:text-blue-300 transition-colors">
                             <Navigation className="w-4 h-4" /> Get Directions
                           </button>
                         </div>
                       </div>
                       <div className="flex gap-4">
                         <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                           <Phone className="w-6 h-6" />
                         </div>
                         <div>
                           <div className="font-bold text-lg">Phone Number</div>
                           <div className="text-slate-400 mt-1">+91 (123) 456-7890<br/>+91 (123) 456-7891</div>
                         </div>
                       </div>
                       <div className="flex gap-4">
                         <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                           <Mail className="w-6 h-6" />
                         </div>
                         <div>
                           <div className="font-bold text-lg">Email Address</div>
                           <div className="text-slate-400 mt-1">info@brightfuture.edu<br/>admissions@brightfuture.edu</div>
                         </div>
                       </div>
                     </div>
                     
                     <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col sm:flex-row gap-4">
                       <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2">
                         <MessageCircle className="w-5 h-5" /> WhatsApp Us
                       </button>
                       <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                         <Phone className="w-5 h-5" /> Call Now
                       </button>
                     </div>
                   </div>
                 </div>

                 {/* Enquiry Form */}
                 <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
                   <h3 className="text-2xl font-black text-slate-900 mb-2">Admission Enquiry</h3>
                   <p className="text-slate-500 text-sm mb-8">Fill the form below and our admission counselor will contact you.</p>
                   <div className="space-y-4">
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors shadow-sm" placeholder="First Name" />
                       <input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors shadow-sm" placeholder="Last Name" />
                     </div>
                     <input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors shadow-sm" placeholder="Phone Number" />
                     <input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors shadow-sm" placeholder="Email Address" />
                     <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 focus:outline-none focus:border-blue-500 transition-colors shadow-sm">
                       <option>Select Grade / Program</option>
                       <option>Pre-Primary</option>
                       <option>Primary (Grade 1-5)</option>
                       <option>Middle School (Grade 6-8)</option>
                       <option>High School (Grade 9-10)</option>
                     </select>
                     <textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 h-32 resize-none focus:outline-none focus:border-blue-500 transition-colors shadow-sm" placeholder="Your Message / Query"></textarea>
                     <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md mt-2 flex items-center justify-center gap-2">
                       Submit Enquiry <ArrowRight className="w-4 h-4" />
                     </button>
                   </div>
                 </div>
               </div>
             </div>
          </section>
"""

content = content.replace('{/* 16. PROFESSIONAL FOOTER */}', new_sections + '\n          {/* 16. PROFESSIONAL FOOTER */}')

with open('src/components/SchoolDemo.tsx', 'w') as f:
    f.write(content)
