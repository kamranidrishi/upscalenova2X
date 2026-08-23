import re

with open('src/components/GymDemo.tsx', 'r') as f:
    content = f.read()

# 1. Update the tab types
type_str = '"public" | "portal" | "leads" | "admin" | "trainer" | "compare"'
new_type_str = '"public" | "portal" | "leads" | "admin" | "trainer" | "compare" | "library"'
if type_str in content:
    content = content.replace(type_str, new_type_str)

# 2. Add the library tab to the navigation
mega_tab_str = """            {/* Mega Tab Links */}
            {isMega && (
              <button
                onClick={() => setActiveTab("admin")}"""

new_mega_tab_str = """            {/* Mega Tab Links */}
            {isMega && (
              <>
              <button
                onClick={() => setActiveTab("admin")}"""

content = content.replace(mega_tab_str, new_mega_tab_str)

mega_tab_close_str = """                <span className="text-amber-400">Mega Admin</span>
              </button>
            )}"""

new_mega_tab_close_str = """                <span className="text-amber-400">Mega Admin</span>
              </button>
              <button
                onClick={() => setActiveTab("library")}
                className={`flex items-center gap-1 hover:text-cyan-400 transition-colors ${activeTab === "library" ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : ""}`}
              >
                <Dumbbell className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400">Workout Library</span>
              </button>
              </>
            )}"""

content = content.replace(mega_tab_close_str, new_mega_tab_close_str)

# 3. Add the MegaExerciseLibrary import
if "import { MegaExerciseLibrary } from './MegaExerciseLibrary';" not in content:
    import_index = content.find('import {')
    content = content[:import_index] + "import { MegaExerciseLibrary } from './MegaExerciseLibrary';\n" + content[import_index:]

# 4. Render the MegaExerciseLibrary when activeTab === 'library'
render_str = """      {activeTab === "compare" && ("""
new_render_str = """      {activeTab === "library" && isMega && (
        <MegaExerciseLibrary />
      )}

      {activeTab === "compare" && ("""

content = content.replace(render_str, new_render_str)

with open('src/components/GymDemo.tsx', 'w') as f:
    f.write(content)

print("Updated GymDemo.tsx")
