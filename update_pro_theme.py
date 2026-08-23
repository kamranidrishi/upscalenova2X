import re

with open('src/components/GymDemo.tsx', 'r') as f:
    content = f.read()

# We need to find the <style> block for the pro-theme and replace its contents.
# The pro-theme block starts with `.pro-theme { background-color: #020617 !important; }`
# and ends right before `        `,
#          }}`

old_css_start = content.find('.pro-theme {')
if old_css_start != -1:
    old_css_end = content.find('`,\n          }}', old_css_start)
    if old_css_end == -1:
        old_css_end = content.find('`\n          }}', old_css_start)
    
    if old_css_end != -1:
        new_css_block = """          .pro-theme { background-color: #0B0A14 !important; }
          .pro-theme .bg-\\\\[\\\\#060B14\\\\] { background-color: #0B0A14 !important; }
          .pro-theme .bg-\\\\[\\\\#0A1426\\\\] { 
            background-color: #151225 !important; 
            border: 1px solid rgba(91, 58, 174, 0.15) !important;
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
          .pro-theme .bg-\\\\[\\\\#12203A\\\\] { background-color: #110E1D !important; border-color: rgba(91, 58, 174, 0.1) !important; }
          
          /* Gradients to Purple / Violet */
          .pro-theme .from-cyan-400 { --tw-gradient-from: #8B5CF6 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          .pro-theme .via-blue-500 { --tw-gradient-via: #A855F7 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to) !important; }
          .pro-theme .to-indigo-600 { --tw-gradient-to: #6D28D9 !important; }
          
          .pro-theme .from-blue-600 { --tw-gradient-from: #6D28D9 !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
          
          /* Texts to Purple/Violet */
          .pro-theme .text-cyan-400 { color: #A855F7 !important; }
          .pro-theme .text-blue-500 { color: #8B5CF6 !important; }
          .pro-theme .text-cyan-500 { color: #A855F7 !important; }
          .pro-theme .text-blue-600 { color: #8B5CF6 !important; }
          .pro-theme .text-indigo-400 { color: #C084FC !important; }
          .pro-theme .text-emerald-400 { color: #A855F7 !important; }
          .pro-theme .text-emerald-500 { color: #8B5CF6 !important; }
          
          /* Backgrounds */
          .pro-theme .bg-cyan-400 { background-color: #A855F7 !important; }
          .pro-theme .bg-cyan-500 { background-color: #8B5CF6 !important; }
          .pro-theme .bg-blue-500 { background-color: #8B5CF6 !important; }
          .pro-theme .bg-blue-600 { background-color: #6D28D9 !important; }
          .pro-theme .bg-emerald-500 { background-color: #8B5CF6 !important; }
          .pro-theme .bg-emerald-600 { background-color: #6D28D9 !important; }
          
          /* Borders */
          .pro-theme .border-cyan-400 { border-color: #A855F7 !important; }
          .pro-theme .border-cyan-500\\\\/30 { border-color: rgba(139, 92, 246, 0.3) !important; }
          .pro-theme .border-cyan-500\\\\/40 { border-color: rgba(139, 92, 246, 0.4) !important; }
          .pro-theme .border-blue-500\\\\/30 { border-color: rgba(109, 40, 217, 0.3) !important; }
          .pro-theme .border-slate-800 { border-color: rgba(91, 58, 174, 0.15) !important; }
          .pro-theme .border-slate-700 { border-color: rgba(91, 58, 174, 0.25) !important; }
          
          /* Shadows */
          .pro-theme .shadow-cyan-400\\\\/20 { --tw-shadow-color: rgba(139, 92, 246, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .pro-theme .shadow-cyan-400\\\\/40 { --tw-shadow-color: rgba(139, 92, 246, 0.4) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          .pro-theme .shadow-blue-500\\\\/20 { --tw-shadow-color: rgba(109, 40, 217, 0.2) !important; --tw-shadow: var(--tw-shadow-colored) !important; }
          
          /* Additional premium tweaks */
          .pro-theme .bg-slate-800 { background-color: #1A162D !important; }
          .pro-theme .bg-slate-900 { background-color: #110E1D !important; }
          
          .pro-theme .ring-cyan-500\\\\/50 { --tw-ring-color: rgba(139, 92, 246, 0.5) !important; }
          .pro-theme .ring-blue-500\\\\/30 { --tw-ring-color: rgba(109, 40, 217, 0.3) !important; }
        """
        
        content = content[:old_css_start] + new_css_block + content[old_css_end:]
        with open('src/components/GymDemo.tsx', 'w') as f:
            f.write(content)
        print("Success: Updated PRO theme CSS to Purple/Violet")
    else:
        print("Error: Could not find the end of the pro-theme block")
else:
    print("Error: Could not find .pro-theme in GymDemo.tsx")
