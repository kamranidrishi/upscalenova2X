import re

with open('src/components/GymDemo.tsx', 'r') as f:
    content = f.read()

if 'mega-theme' not in content:
    # We replace the wrapper div
    wrapper_regex = r'<div className="w-full h-full bg-\[\#060B14\] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar select-none">'
    
    new_wrapper = r'<div className={`w-full h-full bg-[#060B14] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar select-none ${isMega ? "mega-theme" : ""}`}>'
    
    css_block = """
      {isMega && (
        <style dangerouslySetInnerHTML={{__html: `
          .mega-theme { background-color: #030303 !important; }
          .mega-theme .bg-\\\\[\\\\#060B14\\\\] { background-color: #030303 !important; }
          .mega-theme .bg-\\\\[\\\\#0A1426\\\\] { 
            background-color: #121212 !important; 
            border: 1px solid rgba(212, 175, 55, 0.15) !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5) !important;
          }
          .mega-theme .bg-\\\\[\\\\#070D18\\\\],
          .mega-theme .bg-\\\\[\\\\#070E1C\\\\],
          .mega-theme .bg-\\\\[\\\\#0A1122\\\\],
          .mega-theme .bg-\\\\[\\\\#0B1528\\\\],
          .mega-theme .bg-\\\\[\\\\#0D1A30\\\\],
          .mega-theme .bg-\\\\[\\\\#0E1C38\\\\],
          .mega-theme .bg-\\\\[\\\\#0F1C36\\\\],
          .mega-theme .bg-\\\\[\\\\#121E36\\\\],
          .mega-theme .bg-\\\\[\\\\#12203A\\\\] { background-color: #0A0A0A !important; border-color: rgba(212, 175, 55, 0.1) !important; }
          
          /* Gradients to Gold */
          .mega-theme .from-cyan-400 { --tw-gradient-from: #FBBF24 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          .mega-theme .via-blue-500 { --tw-gradient-via: #D4AF37 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to) !important; }
          .mega-theme .to-indigo-600 { --tw-gradient-to: #B45309 !important; }
          
          .mega-theme .from-blue-600 { --tw-gradient-from: #D4AF37 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          
          /* Texts to Gold/Champagne */
          .mega-theme .text-cyan-400 { color: #FCD34D !important; }
          .mega-theme .text-blue-500 { color: #FBBF24 !important; }
          .mega-theme .text-cyan-500 { color: #D4AF37 !important; }
          .mega-theme .text-blue-600 { color: #D4AF37 !important; }
          .mega-theme .text-indigo-400 { color: #FDE68A !important; }
          .mega-theme .text-emerald-400 { color: #FDE68A !important; }
          .mega-theme .text-emerald-500 { color: #FDE68A !important; }
          
          /* Backgrounds to Gold */
          .mega-theme .bg-cyan-400 { background-color: #FBBF24 !important; }
          .mega-theme .bg-cyan-500 { background-color: #D4AF37 !important; }
          .mega-theme .bg-blue-500 { background-color: #FBBF24 !important; }
          .mega-theme .bg-blue-600 { background-color: #D4AF37 !important; }
          .mega-theme .bg-emerald-500 { background-color: #FBBF24 !important; }
          .mega-theme .bg-emerald-600 { background-color: #D4AF37 !important; }
          
          /* Borders */
          .mega-theme .border-cyan-400 { border-color: #FBBF24 !important; }
          .mega-theme .border-cyan-500\\\\/30 { border-color: rgba(212, 175, 55, 0.3) !important; }
          .mega-theme .border-cyan-500\\\\/40 { border-color: rgba(212, 175, 55, 0.4) !important; }
          .mega-theme .border-blue-500\\\\/30 { border-color: rgba(212, 175, 55, 0.3) !important; }
          .mega-theme .border-slate-800 { border-color: rgba(212, 175, 55, 0.25) !important; }
          .mega-theme .border-slate-700 { border-color: rgba(212, 175, 55, 0.35) !important; }
          
          /* Shadows */
          .mega-theme .shadow-cyan-400\\\\/20 { --tw-shadow-color: rgba(212, 175, 55, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .mega-theme .shadow-cyan-400\\\\/40 { --tw-shadow-color: rgba(212, 175, 55, 0.4) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .mega-theme .shadow-blue-500\\\\/20 { --tw-shadow-color: rgba(212, 175, 55, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          
          /* Additional premium tweaks */
          .mega-theme .bg-slate-800 { background-color: #1A1A1A !important; }
          .mega-theme .bg-slate-900 { background-color: #141414 !important; }
        `} />
      )}
"""
    content = content.replace(wrapper_regex, new_wrapper + "\n" + css_block)
    
    with open('src/components/GymDemo.tsx', 'w') as f:
        f.write(content)
    print("Done!")
