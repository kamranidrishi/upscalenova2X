import sys

with open('src/components/MegaExerciseLibrary.tsx', 'r') as f:
    content = f.read()

target = """                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-5 pb-6 pt-2 border-t border-slate-800/50 bg-[#070D18]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">"""

replacement = """                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-5 pb-6 pt-5 border-t border-slate-800/50 bg-[#070D18]">
                        
                        {/* AI Exercise Instructional Image Banner */}
                        <div className="w-full mb-8 rounded-xl overflow-hidden border border-amber-500/20 relative group bg-[#0A1426] aspect-video sm:aspect-[21/9]">
                          {/* Loading Skeleton */}
                          <div className="absolute inset-0 flex items-center justify-center bg-[#0A1426]">
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Generating AI Visual...</span>
                            </div>
                          </div>
                          
                          <img 
                            src={`https://image.pollinations.ai/prompt/${encodeURIComponent(`Professional instructional fitness photography demonstrating how to perform ${exercise.name}. Fit athlete showing correct starting position and movement. Premium dark modern gym environment, dramatic cinematic lighting, 8k resolution, photorealistic, anatomical clear posture, wide shot.`)}?width=1200&height=500&nologo=true&seed=${exercise.name.length * 42}`}
                            alt={`${exercise.name} demonstration`}
                            className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-700"
                            loading="lazy"
                            onLoad={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.classList.remove('opacity-0');
                              img.classList.add('opacity-90', 'group-hover:opacity-100');
                            }}
                          />
                          
                          {/* Overlay Gradient & Badge */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#070D18] via-[#070D18]/80 to-transparent z-20 pointer-events-none flex justify-between items-end">
                            <div>
                              <span className="bg-amber-500 text-black px-2.5 py-1 rounded-[4px] text-[10px] font-extrabold uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
                                AI Generated Visual
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"""

if target in content:
    content = content.replace(target, replacement)
    with open('src/components/MegaExerciseLibrary.tsx', 'w') as f:
        f.write(content)
    print("Success: Replaced target.")
else:
    print("Error: Target not found.")
