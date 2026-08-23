import os
import glob

# Files to process
files = glob.glob("src/**/*.ts", recursive=True) + glob.glob("src/**/*.tsx", recursive=True)

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    # Replace the PlanType
    content = content.replace("'Base' | 'Pro' | 'Mega'", "'Base' | 'Pro' | 'Max'")
    content = content.replace("plan: 'Mega'", "plan: 'Max'")
    content = content.replace("=== 'Mega'", "=== 'Max'")
    content = content.replace('=== "Mega"', '=== "Max"')
    content = content.replace("plan === 'Mega'", "plan === 'Max'")
    content = content.replace('plan === "Mega"', 'plan === "Max"')
    content = content.replace('isMega', 'isMax')
    
    # Text replacements for UI
    content = content.replace("MEGA", "MAX")
    content = content.replace("Mega", "Max")
    content = content.replace("mega", "max")
    
    # We might have broken some imports like MegaExerciseLibrary.
    # Let's fix that.
    content = content.replace("MaxExerciseLibrary", "MegaExerciseLibrary")
    content = content.replace("max-theme", "mega-theme")

    if original != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for file in files:
    replace_in_file(file)

