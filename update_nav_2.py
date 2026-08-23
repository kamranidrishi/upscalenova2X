import re

with open('src/components/SchoolDemo.tsx', 'r') as f:
    content = f.read()

# 513: Contact Admissions CTA
content = content.replace('''<button onClick={() => handleNav('contact')} className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 font-bold px-10 py-4 rounded-full transition-colors">
                  Contact Admissions
                </button>''', '''<button onClick={() => {
                  if (isBase) {
                    handleNav('home');
                    setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  } else {
                    handleNav('contact');
                  }
                }} className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white border border-blue-500 font-bold px-10 py-4 rounded-full transition-colors">
                  Contact Admissions
                </button>''')

# 685: Footer link
content = content.replace('''<li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contact Us</button></li>''', '''<li><button onClick={() => {
                   if (isBase) {
                     handleNav('home');
                     setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 100);
                   } else {
                     handleNav('contact');
                   }
                 }} className="hover:text-white transition-colors">Contact Us</button></li>''')

# 790: View on Map
content = content.replace('''<button onClick={() => handleNav('contact')} className="text-xs font-bold text-blue-400 mt-2 hover:underline">View on Map</button>''', '''{!isBase && (
                      <button onClick={() => handleNav('contact')} className="text-xs font-bold text-blue-400 mt-2 hover:underline">View on Map</button>
                    )}''')

with open('src/components/SchoolDemo.tsx', 'w') as f:
    f.write(content)
