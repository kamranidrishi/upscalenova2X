import re

file_path = "src/components/DemoShowroom.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update CATEGORIES
content = content.replace("'Services'", "'Services',\n  'School'")

# 2. Add 'NEW' badge
old_cat_button = """                {cat} <span className="opacity-60 ml-1">({count})</span>"""
new_cat_button = """                {cat} 
                {cat === 'School' && <span className="ml-1 bg-rose-500 text-white text-[8px] px-1.5 py-0.5 rounded-full uppercase tracking-wider">NEW</span>}
                <span className="opacity-60 ml-1">({count})</span>"""
content = content.replace(old_cat_button, new_cat_button)

# 3. Add 'NEW' badge to demo card tags
old_tag = """                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-slate-200">
                    {demo.category}
                  </span>
                </div>"""
new_tag = """                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-slate-200">
                    {demo.category}
                  </span>
                  {demo.businessType === 'school' && (
                    <span className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      NEW
                    </span>
                  )}
                </div>"""
content = content.replace(old_tag, new_tag)

# 4. We should also add GraduationCap to imports of lucide-react if not there.
if "GraduationCap" not in content:
    content = content.replace("import { Sparkles, Monitor", "import { Sparkles, Monitor, GraduationCap")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Patched showroom")
