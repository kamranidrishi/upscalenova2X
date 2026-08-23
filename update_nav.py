import re

with open('src/components/SchoolDemo.tsx', 'r') as f:
    content = f.read()

# Update handleNav calls for 'contact' to conditionally scroll or navigate
# Actually, I can just change the hero button:
content = content.replace('''<button onClick={() => handleNav('contact')} className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
                  Book Campus Visit
                </button>''', '''{!isBase && (
                  <button onClick={() => handleNav('contact')} className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2">
                    Book Campus Visit
                  </button>
                )}''')

# Update 'Enquire Now' button to scroll if isBase
content = content.replace('''<button 
              onClick={() => handleNav('admissions')}
              className="bg-slate-900 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md ml-2"
            >
              {isMax ? 'Apply Online' : 'Enquire Now'}
            </button>''', '''<button 
              onClick={() => {
                if (isBase) {
                  handleNav('home');
                  setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
                } else {
                  handleNav('admissions');
                }
              }}
              className="bg-slate-900 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md ml-2"
            >
              {isMax ? 'Apply Online' : 'Enquire Now'}
            </button>''')

# Same for mobile menu
content = content.replace('''<button 
            onClick={() => handleNav('admissions')}
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold mt-4"
          >
            Admissions Open
          </button>''', '''<button 
            onClick={() => {
              if (isBase) {
                handleNav('home');
                setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
              } else {
                handleNav('admissions');
              }
            }}
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold mt-4"
          >
            {isBase ? 'Enquire Now' : 'Admissions Open'}
          </button>''')

# Add id to contact section
content = content.replace('''{/* 15. CONTACT & ENQUIRY SECTION */}
          <section className="py-20 px-6 bg-white border-t border-slate-200">''', '''{/* 15. CONTACT & ENQUIRY SECTION */}
          <section id="contact-section" className="py-20 px-6 bg-white border-t border-slate-200">''')

with open('src/components/SchoolDemo.tsx', 'w') as f:
    f.write(content)
