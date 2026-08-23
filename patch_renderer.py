import re

file_path = "src/components/WebsiteDemoRenderer.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add import
if "import { SchoolDemo }" not in content:
    content = content.replace('import { GymDemo } from "./GymDemo";', 'import { GymDemo } from "./GymDemo";\nimport { SchoolDemo } from "./SchoolDemo";')

# 2. Add case to switch
old_case = """    case "form":
      return (
        <ServiceDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );"""

new_case = """    case "form":
      return (
        <ServiceDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "school":
      return (
        <SchoolDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );"""
if 'case "school":' not in content:
    content = content.replace(old_case, new_case)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Patched renderer")
