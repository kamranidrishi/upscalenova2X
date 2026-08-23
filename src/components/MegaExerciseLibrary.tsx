import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Play,
  CheckCircle2,
  AlertCircle,
  Dumbbell,
  Activity,
  Calendar,
  Clock,
  ChevronDown,
  ChevronUp,
  Layers,
  ChevronRight,
} from "lucide-react";
import {
  EXERCISE_LIBRARY,
  WORKOUT_PROGRAMS,
  ExerciseCategory,
  ExerciseDifficulty,
} from "../data/megaExerciseData";

export const MegaExerciseLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"exercises" | "programs">(
    "exercises",
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<
    ExerciseCategory | "All"
  >("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    ExerciseDifficulty | "All"
  >("All");
  const [selectedLocation, setSelectedLocation] = useState<
    "All" | "Home" | "Gym"
  >("All");

  const [expandedExerciseId, setExpandedExerciseId] = useState<string | null>(
    null,
  );
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(
    null,
  );

  const categories = [
    "All",
    ...Array.from(new Set(EXERCISE_LIBRARY.map((e) => e.category))),
  ];

  const filteredExercises = useMemo(() => {
    return EXERCISE_LIBRARY.filter((ex) => {
      const matchesSearch =
        ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ex.targetMuscle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || ex.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" || ex.difficulty === selectedDifficulty;
      const matchesLocation =
        selectedLocation === "All" ||
        (selectedLocation === "Home" ? ex.isHomeFriendly : true); // If gym, everything is gym friendly

      return (
        matchesSearch && matchesCategory && matchesDifficulty && matchesLocation
      );
    });
  }, [searchQuery, selectedCategory, selectedDifficulty, selectedLocation]);

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              Max Exclusive
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Elite{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              Training Library
            </span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Access our comprehensive database of professional exercises and
            complete workout programs designed for maximum results.
          </p>
        </div>

        {/* Toggle between Exercises & Programs */}
        <div className="flex bg-[#0A1426] p-1.5 rounded-xl border border-amber-500/10">
          <button
            onClick={() => setActiveTab("exercises")}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === "exercises"
                ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Exercises
          </button>
          <button
            onClick={() => setActiveTab("programs")}
            className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
              activeTab === "programs"
                ? "bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Programs
          </button>
        </div>
      </div>

      {activeTab === "exercises" && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="bg-[#0A1426] border border-amber-500/20 rounded-2xl p-4 md:p-6 shadow-xl shadow-black/40">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search exercises or muscles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#060B14] border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                />
              </div>

              {/* Filter Selects */}
              <div className="flex flex-wrap sm:flex-nowrap gap-3">
                <select
                  className="flex-1 sm:w-auto bg-[#060B14] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as any)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === "All" ? "All Muscles" : cat}
                    </option>
                  ))}
                </select>

                <select
                  className="flex-1 sm:w-auto bg-[#060B14] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as any)}
                >
                  <option value="All">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                <select
                  className="flex-1 sm:w-auto bg-[#060B14] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 appearance-none cursor-pointer"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value as any)}
                >
                  <option value="All">Gym & Home</option>
                  <option value="Home">Home Friendly</option>
                  <option value="Gym">Gym Required</option>
                </select>
              </div>
            </div>
          </div>

          {/* Exercise Grid */}
          <div className="grid grid-cols-1 gap-4">
            {filteredExercises.length === 0 ? (
              <div className="text-center py-20 bg-[#0A1426] rounded-2xl border border-slate-800">
                <Dumbbell className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  No exercises found
                </h3>
                <p className="text-slate-400">
                  Try adjusting your filters or search query.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                    setSelectedLocation("All");
                  }}
                  className="mt-6 px-6 py-2 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg text-sm font-bold transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredExercises.map((exercise) => {
                const isExpanded = expandedExerciseId === exercise.id;

                return (
                  <div
                    key={exercise.id}
                    className={`bg-[#0A1426] border overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "border-amber-500/40 shadow-[0_8px_30px_rgba(245,158,11,0.1)] rounded-2xl"
                        : "border-slate-800 hover:border-slate-700 rounded-xl"
                    }`}
                  >
                    {/* Header (Clickable) */}
                    <div
                      className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer select-none group"
                      onClick={() =>
                        setExpandedExerciseId(isExpanded ? null : exercise.id)
                      }
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isExpanded
                              ? "bg-amber-500 text-black"
                              : "bg-[#060B14] text-amber-400 group-hover:bg-[#121E36]"
                          }`}
                        >
                          <Play
                            className={`w-5 h-5 ${isExpanded ? "fill-black" : "fill-amber-400"}`}
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                            {exercise.name}
                          </h3>
                          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider flex items-center gap-2">
                            <span>{exercise.category}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                            <span className="text-cyan-400">
                              {exercise.targetMuscle}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto w-full border-t sm:border-t-0 border-slate-800 pt-3 sm:pt-0">
                        <div className="flex gap-2">
                          <span
                            className={`px-2.5 py-1 rounded border text-[10px] font-bold uppercase tracking-wider ${
                              exercise.difficulty === "Beginner"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                : exercise.difficulty === "Intermediate"
                                  ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                  : "bg-rose-500/10 text-rose-400 border-rose-500/20"
                            }`}
                          >
                            {exercise.difficulty}
                          </span>
                          {exercise.isHomeFriendly && (
                            <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">
                              Home
                            </span>
                          )}
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-5 pb-6 pt-5 border-t border-slate-800/50 bg-[#070D18]">
                        {/* AI Exercise Instructional Image Banner */}
                        <div className="w-full mb-8 rounded-xl overflow-hidden border border-amber-500/20 relative group bg-[#0A1426] aspect-video sm:aspect-[21/9]">
                          {/* Loading Skeleton */}
                          <div className="absolute inset-0 flex items-center justify-center bg-[#0A1426]">
                            <div className="flex flex-col items-center gap-3">
                              <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">
                                Generating AI Visual...
                              </span>
                            </div>
                          </div>

                          <img
                            src={`https://image.pollinations.ai/prompt/${encodeURIComponent(`Professional instructional fitness photography demonstrating how to perform ${exercise.name}. Fit athlete showing correct starting position and movement. Premium dark modern gym environment, dramatic cinematic lighting, 8k resolution, photorealistic, anatomical clear posture, wide shot.`)}?width=1200&height=500&nologo=true&seed=${exercise.name.charCodeAt(0) * exercise.name.length}`}
                            alt={`${exercise.name} demonstration`}
                            className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-700"
                            loading="lazy"
                            onLoad={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.classList.remove("opacity-0");
                              img.classList.add(
                                "opacity-90",
                                "group-hover:opacity-100",
                              );
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

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {/* Column 1: Specs */}
                          <div className="space-y-4">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                              Details
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400 flex items-center gap-2">
                                  <Dumbbell className="w-4 h-4" /> Equipment
                                </span>
                                <span className="text-sm font-medium text-white text-right">
                                  {exercise.equipment}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400 flex items-center gap-2">
                                  <Layers className="w-4 h-4" /> Sets
                                </span>
                                <span className="text-sm font-medium text-amber-400">
                                  {exercise.sets}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400 flex items-center gap-2">
                                  <Activity className="w-4 h-4" /> Reps
                                </span>
                                <span className="text-sm font-medium text-amber-400">
                                  {exercise.reps}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-400 flex items-center gap-2">
                                  <Clock className="w-4 h-4" /> Rest
                                </span>
                                <span className="text-sm font-medium text-white">
                                  {exercise.rest}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Column 2: Instructions */}
                          <div className="space-y-4 md:col-span-2">
                            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-800 pb-2">
                              Instructions
                            </h4>
                            <div className="space-y-3">
                              {exercise.steps.map((step, idx) => (
                                <div
                                  key={idx}
                                  className="flex gap-3 items-start"
                                >
                                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold shrink-0 mt-0.5 border border-amber-500/20">
                                    {idx + 1}
                                  </span>
                                  <p className="text-sm text-slate-300 leading-relaxed">
                                    {step}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Safety Tips */}
                            <div className="mt-6 bg-rose-500/5 border border-rose-500/10 rounded-xl p-4">
                              <h5 className="flex items-center gap-2 text-rose-400 text-sm font-bold mb-3">
                                <AlertCircle className="w-4 h-4" /> Form &
                                Safety
                              </h5>
                              <ul className="space-y-2">
                                {exercise.safetyTips.map((tip, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-2 items-start text-sm text-rose-200/80"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500/50 shrink-0 mt-1.5" />
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}

      {activeTab === "programs" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {WORKOUT_PROGRAMS.map((program) => {
            const isExpanded = expandedProgramId === program.id;

            return (
              <div
                key={program.id}
                className={`bg-[#0A1426] border overflow-hidden transition-all duration-300 flex flex-col ${
                  isExpanded
                    ? "border-amber-500/40 shadow-[0_8px_30px_rgba(245,158,11,0.1)] rounded-2xl"
                    : "border-slate-800 hover:border-slate-700 rounded-xl"
                }`}
              >
                {/* Program Header */}
                <div className="p-6 border-b border-slate-800/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(245,158,11,0.3)]">
                    <Calendar className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {program.name}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {program.description}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedProgramId(isExpanded ? null : program.id)
                    }
                    className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 bg-[#060B14] hover:bg-[#121E36] border border-slate-700 hover:border-amber-500/30 text-amber-400 rounded-lg text-sm font-bold transition-all"
                  >
                    {isExpanded ? "Close Program" : "View Workouts"}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Expanded Workouts */}
                {isExpanded && (
                  <div className="flex-1 bg-[#070D18] p-6 space-y-8">
                    {program.workouts.map((workout, idx) => (
                      <div key={idx}>
                        <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-6 bg-amber-500 rounded-full" />
                          {workout.day}
                        </h4>

                        <div className="space-y-3">
                          {workout.exercises.map((exItem, exIdx) => {
                            // Find the full exercise info
                            const fullEx = EXERCISE_LIBRARY.find(
                              (e) => e.id === exItem.exerciseId,
                            );
                            if (!fullEx) return null;

                            return (
                              <div
                                key={exIdx}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#0A1426] border border-slate-800/80"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-[#060B14] flex items-center justify-center border border-slate-700/50">
                                    <span className="text-xs font-bold text-slate-400">
                                      {exIdx + 1}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="text-sm font-bold text-white">
                                      {fullEx.name}
                                    </p>
                                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                                      {fullEx.targetMuscle}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 sm:gap-6 bg-[#060B14] px-4 py-2 rounded-lg border border-slate-800/80 w-max">
                                  <div className="text-center">
                                    <p className="text-[10px] text-slate-500 uppercase font-bold">
                                      Sets
                                    </p>
                                    <p className="text-xs font-bold text-amber-400">
                                      {exItem.sets}
                                    </p>
                                  </div>
                                  <div className="w-px h-6 bg-slate-800"></div>
                                  <div className="text-center">
                                    <p className="text-[10px] text-slate-500 uppercase font-bold">
                                      Reps
                                    </p>
                                    <p className="text-xs font-bold text-amber-400">
                                      {exItem.reps}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
