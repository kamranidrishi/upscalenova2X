import re

with open('src/components/GymDemo.tsx', 'r') as f:
    content = f.read()

if 'pro-theme' not in content:
    old_wrapper = r'className={`w-full h-full bg-[#060B14] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar select-none ${isMega ? "mega-theme" : ""}`}'
    new_wrapper = r'className={`w-full h-full bg-[#060B14] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar select-none ${isMega ? "mega-theme" : ""} ${isPro ? "pro-theme" : ""}`}'
    
    css_block = """
      {isPro && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .pro-theme { background-color: #020617 !important; }
          .pro-theme .bg-\\\\[\\\\#060B14\\\\] { background-color: #020617 !important; }
          .pro-theme .bg-\\\\[\\\\#0A1426\\\\] { 
            background-color: #0F172A !important; 
            border: 1px solid rgba(56, 189, 248, 0.15) !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
          }
          .pro-theme .bg-\\\\[\\\\#070D18\\\\],
          .pro-theme .bg-\\\\[\\\\#070E1C\\\\],
          .pro-theme .bg-\\\\[\\\\#0A1122\\\\],
          .pro-theme .bg-\\\\[\\\\#0B1528\\\\],
          .pro-theme .bg-\\\\[\\\\#0D1A30\\\\],
          .pro-theme .bg-\\\\[\\\\#0E1C38\\\\],
          .pro-theme .bg-\\\\[\\\\#0F1C36\\\\],
          .pro-theme .bg-\\\\[\\\\#121E36\\\\],
          .pro-theme .bg-\\\\[\\\\#12203A\\\\] { background-color: #0B1120 !important; border-color: rgba(56, 189, 248, 0.1) !important; }
          
          /* Gradients to Electric Blue / Cyan */
          .pro-theme .from-cyan-400 { --tw-gradient-from: #0EA5E9 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          .pro-theme .via-blue-500 { --tw-gradient-via: #2563EB !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to) !important; }
          .pro-theme .to-indigo-600 { --tw-gradient-to: #1E3A8A !important; }
          
          .pro-theme .from-blue-600 { --tw-gradient-from: #2563EB !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          
          /* Texts to Electric Blue/Cool Gray */
          .pro-theme .text-cyan-400 { color: #38BDF8 !important; }
          .pro-theme .text-blue-500 { color: #3B82F6 !important; }
          .pro-theme .text-cyan-500 { color: #0EA5E9 !important; }
          .pro-theme .text-blue-600 { color: #2563EB !important; }
          .pro-theme .text-indigo-400 { color: #60A5FA !important; }
          .pro-theme .text-emerald-400 { color: #34D399 !important; }
          .pro-theme .text-emerald-500 { color: #10B981 !important; }
          
          /* Backgrounds */
          .pro-theme .bg-cyan-400 { background-color: #0EA5E9 !important; }
          .pro-theme .bg-cyan-500 { background-color: #0284C7 !important; }
          .pro-theme .bg-blue-500 { background-color: #3B82F6 !important; }
          .pro-theme .bg-blue-600 { background-color: #2563EB !important; }
          .pro-theme .bg-emerald-500 { background-color: #10B981 !important; }
          .pro-theme .bg-emerald-600 { background-color: #059669 !important; }
          
          /* Borders */
          .pro-theme .border-cyan-400 { border-color: #38BDF8 !important; }
          .pro-theme .border-cyan-500\\\\/30 { border-color: rgba(56, 189, 248, 0.3) !important; }
          .pro-theme .border-cyan-500\\\\/40 { border-color: rgba(56, 189, 248, 0.4) !important; }
          .pro-theme .border-blue-500\\\\/30 { border-color: rgba(59, 130, 246, 0.3) !important; }
          .pro-theme .border-slate-800 { border-color: rgba(56, 189, 248, 0.15) !important; }
          .pro-theme .border-slate-700 { border-color: rgba(56, 189, 248, 0.25) !important; }
          
          /* Shadows */
          .pro-theme .shadow-cyan-400\\\\/20 { --tw-shadow-color: rgba(56, 189, 248, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .pro-theme .shadow-cyan-400\\\\/40 { --tw-shadow-color: rgba(56, 189, 248, 0.4) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .pro-theme .shadow-blue-500\\\\/20 { --tw-shadow-color: rgba(59, 130, 246, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          
          /* Additional premium tweaks */
          .pro-theme .bg-slate-800 { background-color: #1E293B !important; }
          .pro-theme .bg-slate-900 { background-color: #0F172A !important; }
          
          .pro-theme .ring-cyan-500\\\\/50 { --tw-ring-color: rgba(56, 189, 248, 0.5) !important; }
          .pro-theme .ring-blue-500\\\\/30 { --tw-ring-color: rgba(59, 130, 246, 0.3) !important; }
        `,
          }}
        />
      )}
"""
    if old_wrapper in content:
        content = content.replace(old_wrapper, new_wrapper)
        
        # Now find the end of the mega-theme style block to insert our pro-theme style block
        # We can just look for the first </div> which closes the wrapper? No, it's at the end of the file.
        # We can look for {isMega && ( ... )} and insert after it.
        # Let's just insert it before the TOP INTERACTIVE PACKAGE SWITCHER BAR comment
        
        insert_marker = "{/* ------------------------------------------------------------- */}\n      {/* 1. TOP INTERACTIVE PACKAGE SWITCHER BAR (Upscale Nova Header) */}"
        
        if insert_marker in content:
            content = content.replace(insert_marker, css_block + "\n      " + insert_marker)
            with open('src/components/GymDemo.tsx', 'w') as f:
                f.write(content)
            print("Success: Applied pro-theme")
        else:
            print("Error: Could not find insert_marker")
            
    else:
        print("Error: Could not find old_wrapper")
else:
    print("Already applied pro-theme")
