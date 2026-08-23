import re

with open('src/components/GymDemo.tsx', 'r') as f:
    content = f.read()

if 'base-theme' not in content:
    old_wrapper = r'className={`w-full h-full bg-[#060B14] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar select-none ${isMega ? "mega-theme" : ""} ${isPro ? "pro-theme" : ""}`}'
    new_wrapper = r'className={`w-full h-full bg-[#060B14] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar select-none ${isMega ? "mega-theme" : ""} ${isPro ? "pro-theme" : ""} ${isBase ? "base-theme" : ""}`}'
    
    if old_wrapper in content:
        content = content.replace(old_wrapper, new_wrapper)
        
        insert_marker = "{/* ------------------------------------------------------------- */}\n      {/* 1. TOP INTERACTIVE PACKAGE SWITCHER BAR (Upscale Nova Header) */}"
        
        css_block = """
      {isBase && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .base-theme { background-color: #07130E !important; }
          .base-theme .bg-\\\\[\\\\#060B14\\\\] { background-color: #07130E !important; }
          .base-theme .bg-\\\\[\\\\#0A1426\\\\] { 
            background-color: #0D1F16 !important; 
            border: 1px solid rgba(22, 101, 52, 0.4) !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
          }
          .base-theme .bg-\\\\[\\\\#070D18\\\\],
          .base-theme .bg-\\\\[\\\\#070E1C\\\\],
          .base-theme .bg-\\\\[\\\\#0A1122\\\\],
          .base-theme .bg-\\\\[\\\\#0B1528\\\\],
          .base-theme .bg-\\\\[\\\\#0D1A30\\\\],
          .base-theme .bg-\\\\[\\\\#0E1C38\\\\],
          .base-theme .bg-\\\\[\\\\#0F1C36\\\\],
          .base-theme .bg-\\\\[\\\\#121E36\\\\],
          .base-theme .bg-\\\\[\\\\#12203A\\\\] { background-color: #091710 !important; border-color: rgba(22, 101, 52, 0.2) !important; }
          
          /* Gradients to Emerald / Lime */
          .base-theme .from-cyan-400 { --tw-gradient-from: #10B981 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          .base-theme .via-blue-500 { --tw-gradient-via: #84CC16 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to) !important; }
          .base-theme .to-indigo-600 { --tw-gradient-to: #064E3B !important; }
          
          .base-theme .from-blue-600 { --tw-gradient-from: #059669 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          
          /* Texts to Emerald/Lime */
          .base-theme .text-cyan-400 { color: #A3E635 !important; }
          .base-theme .text-blue-500 { color: #10B981 !important; }
          .base-theme .text-cyan-500 { color: #10B981 !important; }
          .base-theme .text-blue-600 { color: #059669 !important; }
          .base-theme .text-indigo-400 { color: #84CC16 !important; }
          .base-theme .text-emerald-400 { color: #10B981 !important; }
          .base-theme .text-emerald-500 { color: #059669 !important; }
          
          /* Backgrounds */
          .base-theme .bg-cyan-400 { background-color: #10B981 !important; }
          .base-theme .bg-cyan-500 { background-color: #059669 !important; }
          .base-theme .bg-blue-500 { background-color: #10B981 !important; }
          .base-theme .bg-blue-600 { background-color: #064E3B !important; }
          .base-theme .bg-emerald-500 { background-color: #10B981 !important; }
          .base-theme .bg-emerald-600 { background-color: #064E3B !important; }
          
          /* Borders */
          .base-theme .border-cyan-400 { border-color: #10B981 !important; }
          .base-theme .border-cyan-500\\\\/30 { border-color: rgba(16, 185, 129, 0.3) !important; }
          .base-theme .border-cyan-500\\\\/40 { border-color: rgba(16, 185, 129, 0.4) !important; }
          .base-theme .border-blue-500\\\\/30 { border-color: rgba(16, 185, 129, 0.3) !important; }
          .base-theme .border-slate-800 { border-color: rgba(22, 101, 52, 0.3) !important; }
          .base-theme .border-slate-700 { border-color: rgba(22, 101, 52, 0.5) !important; }
          
          /* Shadows */
          .base-theme .shadow-cyan-400\\\\/20 { --tw-shadow-color: rgba(16, 185, 129, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .base-theme .shadow-cyan-400\\\\/40 { --tw-shadow-color: rgba(16, 185, 129, 0.4) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .base-theme .shadow-blue-500\\\\/20 { --tw-shadow-color: rgba(16, 185, 129, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          
          /* Additional premium tweaks */
          .base-theme .bg-slate-800 { background-color: #0A1710 !important; }
          .base-theme .bg-slate-900 { background-color: #050D09 !important; }
          
          .base-theme .ring-cyan-500\\\\/50 { --tw-ring-color: rgba(16, 185, 129, 0.5) !important; }
          .base-theme .ring-blue-500\\\\/30 { --tw-ring-color: rgba(16, 185, 129, 0.3) !important; }
        `,
          }}
        />
      )}
"""
        
        if insert_marker in content:
            content = content.replace(insert_marker, css_block + "\n      " + insert_marker)
            with open('src/components/GymDemo.tsx', 'w') as f:
                f.write(content)
            print("Success: Applied base-theme CSS")
        else:
            print("Error: Could not find insert_marker for base-theme")
    else:
        print("Error: Could not find old_wrapper for base-theme")
else:
    print("Already applied base-theme")
