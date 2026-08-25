import re

with open("src/components/DemoShowroom.tsx", "r") as f:
    content = f.read()

# Add Maximize, Minimize to imports
content = content.replace(
    "import { Sparkles, Monitor, GraduationCap, Tablet, Smartphone, X, Check, ChevronRight, ArrowRight } from 'lucide-react';",
    "import { Sparkles, Monitor, GraduationCap, Tablet, Smartphone, X, Check, ChevronRight, ArrowRight, Maximize, Minimize } from 'lucide-react';"
)

# Add isFullscreen state
content = content.replace(
    "const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');",
    "const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');\n  const [isFullscreen, setIsFullscreen] = useState(false);"
)

# Add ESC listener inside component
esc_listener = """
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (activeDemo) {
          setActiveDemo(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, activeDemo]);
"""
content = content.replace(
    "const demoScrollViewportRef = useRef<HTMLDivElement>(null);",
    "const demoScrollViewportRef = useRef<HTMLDivElement>(null);\n" + esc_listener
)

# Reset isFullscreen when activeDemo changes
content = content.replace(
    "setActiveDemo(demo);",
    "setActiveDemo(demo);\n                  setIsFullscreen(false);"
)
content = content.replace(
    "onClick={() => setActiveDemo(null)}",
    "onClick={() => { setActiveDemo(null); setIsFullscreen(false); }}"
)

# Modify Modal wrapper
# Current: className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-3 md:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain select-text"
# New: `fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-0 sm:p-3 md:p-6'} bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain select-text`
content = re.sub(
    r'className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-3 md:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain select-text"',
    r'className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? \'p-0\' : \'p-0 sm:p-3 md:p-6\'} bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain select-text`}',
    content
)

# Modify Modal inner wrapper
# Current: <div className="bg-slate-950 w-full h-full sm:rounded-3xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden max-w-[1500px]">
# New: <div className={`bg-slate-950 w-full h-full flex flex-col overflow-hidden shadow-2xl ${isFullscreen ? 'rounded-none border-none max-w-none' : 'sm:rounded-3xl border border-slate-800 max-w-[95vw] xl:max-w-[1600px]'}`}>
# Wait, let's make the "normal" size larger. The prompt said "Increase the demo viewer width substantially... Reduce unnecessary outer margins/padding."
# Currently it is max-w-[1500px]. If I do max-w-[95vw] xl:max-w-[1800px], it will be larger.
content = re.sub(
    r'<div className="bg-slate-950 w-full h-full sm:rounded-3xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden max-w-\[1500px\]">',
    r'<div className={`bg-slate-950 w-full h-full shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${isFullscreen ? \'rounded-none border-none max-w-none\' : \'sm:rounded-3xl border border-slate-800 max-w-[95vw] 2xl:max-w-[1800px]\'}`}>',
    content
)

# Modify device toggles + Expand button
# Search for: <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
# We need to add the Expand button before the Close Demo button.
device_toggles = """<div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
                  <button 
                    onClick={() => setDeviceView('desktop')}"""

new_device_toggles = """<div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className={`p-2 rounded-lg transition-colors text-slate-400 hover:text-white mr-1`}
                    title={isFullscreen ? "Exit Full Screen (ESC)" : "Expand to Full Screen"}
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4 text-indigo-400" /> : <Maximize className="w-4 h-4" />}
                  </button>
                  <div className="w-px h-4 bg-slate-800 mx-1"></div>
                  <button 
                    onClick={() => setDeviceView('desktop')}"""

content = content.replace(device_toggles, new_device_toggles)

# Modify Browser Address Bar Wrapper
# Current:
# <div 
#   className={`bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col border border-slate-800 min-h-0
#     ${deviceView === 'desktop' ? 'w-full h-full max-w-[1400px]' : 
#       deviceView === 'tablet' ? 'w-[768px] h-full max-h-[960px]' : 
#       'w-[380px] h-full max-h-[820px] rounded-3xl border-4 border-slate-800'}
#   `}
# >
# New:
# we need to make deviceView === 'desktop' use full width if fullscreen, or just a wider max width normally.
# if deviceView === 'desktop', use `w-full h-full ${isFullscreen ? 'max-w-none rounded-none border-none' : 'max-w-[1600px]'}`
browser_wrapper_regex = r"<div\s+className=\{`bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col border border-slate-800 min-h-0\s+\$\{deviceView === 'desktop' \? 'w-full h-full max-w-\[1400px\]' :\s+deviceView === 'tablet' \? 'w-\[768px\] h-full max-h-\[960px\]' :\s+'w-\[380px\] h-full max-h-\[820px\] rounded-3xl border-4 border-slate-800'\}\s+`\}\s+>"

new_browser_wrapper = """<div 
                  className={`bg-white shadow-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-0
                    ${deviceView === 'desktop' 
                      ? `w-full h-full ${isFullscreen ? 'max-w-none rounded-none border-none' : 'max-w-[100%] xl:max-w-[1600px] sm:rounded-2xl border border-slate-800'}` 
                      : deviceView === 'tablet' 
                        ? 'w-[768px] h-full max-h-[960px] sm:rounded-2xl border border-slate-800' 
                        : 'w-[380px] h-full max-h-[820px] rounded-3xl border-4 border-slate-800'}
                  `}
                >"""

content = re.sub(browser_wrapper_regex, new_browser_wrapper, content)


with open("src/components/DemoShowroom.tsx", "w") as f:
    f.write(content)
