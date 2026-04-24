import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const EXERCISE_DB = {
  chest: [
    { name: "Bench Press", sets: 4, repsRange: "8-10", type: "Compound", tip: "Keep shoulder blades retracted" },
    { name: "Incline Dumbbell Press", sets: 3, repsRange: "10-12", type: "Compound", tip: "30-45 degree incline" },
    { name: "Cable Fly", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Squeeze at the top" },
    { name: "Push-up", sets: 3, repsRange: "15-20", type: "Bodyweight", tip: "Full range of motion" },
    { name: "Dips", sets: 3, repsRange: "10-12", type: "Compound", tip: "Lean forward for chest focus" },
  ],
  back: [
    { name: "Deadlift", sets: 4, repsRange: "5-6", type: "Compound", tip: "Keep back straight, drive through heels" },
    { name: "Barbell Row", sets: 4, repsRange: "8-10", type: "Compound", tip: "Pull to lower chest" },
    { name: "Lat Pulldown", sets: 3, repsRange: "10-12", type: "Compound", tip: "Pull elbows down and back" },
    { name: "Seated Cable Row", sets: 3, repsRange: "12-15", type: "Compound", tip: "Keep chest up" },
    { name: "Pull-up", sets: 3, repsRange: "6-10", type: "Bodyweight", tip: "Full hang at bottom" },
  ],
  legs: [
    { name: "Squat", sets: 4, repsRange: "8-10", type: "Compound", tip: "Break parallel, knees track toes" },
    { name: "Romanian Deadlift", sets: 3, repsRange: "10-12", type: "Compound", tip: "Feel hamstring stretch" },
    { name: "Leg Press", sets: 3, repsRange: "12-15", type: "Compound", tip: "Don't lock knees at top" },
    { name: "Leg Curl", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Slow eccentric" },
    { name: "Calf Raise", sets: 4, repsRange: "15-20", type: "Isolation", tip: "Full stretch at bottom" },
    { name: "Hip Thrust", sets: 3, repsRange: "12-15", type: "Compound", tip: "Squeeze glutes at top" },
  ],
  shoulders: [
    { name: "Overhead Press", sets: 4, repsRange: "8-10", type: "Compound", tip: "Brace core, don't arch back" },
    { name: "Lateral Raise", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Lead with elbows" },
    { name: "Front Raise", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Control the descent" },
    { name: "Face Pull", sets: 3, repsRange: "15-20", type: "Isolation", tip: "Great for rear delts" },
    { name: "Arnold Press", sets: 3, repsRange: "10-12", type: "Compound", tip: "Rotate palms as you press" },
  ],
  arms: [
    { name: "Barbell Curl", sets: 3, repsRange: "10-12", type: "Isolation", tip: "No swinging" },
    { name: "Hammer Curl", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Neutral grip" },
    { name: "Tricep Pushdown", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Keep elbows tucked" },
    { name: "Skull Crusher", sets: 3, repsRange: "10-12", type: "Isolation", tip: "Lower to forehead slowly" },
    { name: "Concentration Curl", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Full squeeze at top" },
    { name: "Overhead Tricep Extension", sets: 3, repsRange: "12-15", type: "Isolation", tip: "Keep elbows close" },
  ],
  core: [
    { name: "Plank", sets: 3, repsRange: "30-60s", type: "Bodyweight", tip: "Keep hips level" },
    { name: "Cable Crunch", sets: 3, repsRange: "15-20", type: "Isolation", tip: "Round the spine" },
    { name: "Hanging Leg Raise", sets: 3, repsRange: "12-15", type: "Bodyweight", tip: "Control the swing" },
    { name: "Russian Twist", sets: 3, repsRange: "20-30", type: "Bodyweight", tip: "Rotate fully each side" },
    { name: "Ab Wheel Rollout", sets: 3, repsRange: "10-12", type: "Bodyweight", tip: "Keep core braced" },
  ],
};

const SPLIT_PLANS = {
  "3": [
    { day: "Day 1", label: "Push", muscles: ["chest", "shoulders", "arms"], focus: "chest" },
    { day: "Day 2", label: "Pull", muscles: ["back", "arms"], focus: "back" },
    { day: "Day 3", label: "Legs + Core", muscles: ["legs", "core"], focus: "legs" },
  ],
  "4": [
    { day: "Day 1", label: "Chest + Triceps", muscles: ["chest", "arms"], focus: "chest" },
    { day: "Day 2", label: "Back + Biceps", muscles: ["back", "arms"], focus: "back" },
    { day: "Day 3", label: "Legs", muscles: ["legs"], focus: "legs" },
    { day: "Day 4", label: "Shoulders + Core", muscles: ["shoulders", "core"], focus: "shoulders" },
  ],
  "5": [
    { day: "Day 1", label: "Chest", muscles: ["chest"], focus: "chest" },
    { day: "Day 2", label: "Back", muscles: ["back"], focus: "back" },
    { day: "Day 3", label: "Legs", muscles: ["legs"], focus: "legs" },
    { day: "Day 4", label: "Shoulders", muscles: ["shoulders"], focus: "shoulders" },
    { day: "Day 5", label: "Arms + Core", muscles: ["arms", "core"], focus: "arms" },
  ],
};

const muscleIcons = { chest: "💪", back: "🔙", legs: "🦵", shoulders: "🏋️", arms: "💪", core: "��" };
const muscleColors = { chest: "blue", back: "purple", legs: "green", shoulders: "orange", arms: "pink", core: "red" };
const colorMap = {
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  green: "bg-green-500/10 border-green-500/30 text-green-400",
  orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
  pink: "bg-pink-500/10 border-pink-500/30 text-pink-400",
  red: "bg-red-500/10 border-red-500/30 text-red-400",
};

const getWeightMultiplier = (weight) => {
  if (weight < 60) return 0.3;
  if (weight < 75) return 0.4;
  if (weight < 90) return 0.5;
  if (weight < 110) return 0.6;
  return 0.7;
};

const getSuggestedWeight = (exerciseName, bodyWeight, multiplier) => {
  const compound = ["Bench Press","Squat","Deadlift","Barbell Row","Overhead Press","Romanian Deadlift","Hip Thrust","Leg Press"];
  const isCompound = compound.includes(exerciseName);
  const base = isCompound ? bodyWeight * multiplier : bodyWeight * multiplier * 0.4;
  return Math.round(base / 2.5) * 2.5;
};

export default function WorkoutPlanner() {
  const { user } = useAuth();
  const [weight, setWeight] = useState(user?.weightKg || "");
  const [goal, setGoal] = useState("muscle");
  const [days, setDays] = useState("4");
  const [plan, setPlan] = useState(null);
  const [activeDay, setActiveDay] = useState(0);
  const [generated, setGenerated] = useState(false);

  const generatePlan = () => {
    if (!weight || parseFloat(weight) <= 0) return;
    const bw = parseFloat(weight);
    const multiplier = getWeightMultiplier(bw);
    const split = SPLIT_PLANS[days];

    const fullPlan = split.map(dayPlan => {
      const exercises = [];
      dayPlan.muscles.forEach(muscle => {
        const pool = [...EXERCISE_DB[muscle]];
        // pick top exercises based on goal
        const count = muscle === dayPlan.focus ? 3 : 2;
        const picked = goal === "strength"
          ? pool.filter(e => e.type === "Compound").slice(0, count)
          : pool.slice(0, count);
        picked.forEach(ex => {
          exercises.push({
            ...ex,
            muscle,
            suggestedWeight: getSuggestedWeight(ex.name, bw, multiplier),
            sets: goal === "endurance" ? ex.sets + 1 : ex.sets,
            repsRange: goal === "strength" ? "4-6" : goal === "endurance" ? "15-20" : ex.repsRange,
          });
        });
      });
      return { ...dayPlan, exercises };
    });

    setPlan(fullPlan);
    setActiveDay(0);
    setGenerated(true);
  };

  const goalInfo = {
    muscle: { label: "Muscle Gain", icon: "💪", desc: "Hypertrophy focus, 8-12 reps" },
    strength: { label: "Strength", icon: "🏆", desc: "Heavy compound lifts, 4-6 reps" },
    endurance: { label: "Endurance", icon: "🏃", desc: "Higher reps, shorter rest" },
    fat_loss: { label: "Fat Loss", icon: "🔥", desc: "Circuit style, 12-20 reps" },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">🤖 AI Workout Planner</h1>
        <p className="text-gray-400 mt-1">Get a personalized workout plan based on your body weight and goals</p>
      </div>

      {/* Config Card */}
      <div className="card mb-8">
        <h2 className="text-white font-semibold mb-5">Configure Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Weight */}
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Your Body Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="e.g. 75"
              className="input-field"
              min="30" max="200"
            />
            {weight && <p className="text-gray-500 text-xs mt-1">Suggested weights will be calculated for you</p>}
          </div>

          {/* Goal */}
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Fitness Goal</label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(goalInfo).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setGoal(key)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${goal === key ? "bg-blue-600/20 border-blue-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600"}`}
                >
                  <div className="text-lg">{val.icon}</div>
                  <div className="text-xs font-medium mt-1">{val.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Days */}
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Days Per Week</label>
            <div className="flex gap-2">
              {["3","4","5"].map(d => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  className={`flex-1 py-3 rounded-lg border font-bold text-lg transition-all ${days === d ? "bg-blue-600 border-blue-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600"}`}
                >
                  {d}
                </button>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-2">
              {days === "3" ? "Push / Pull / Legs" : days === "4" ? "Upper/Lower Split" : "5-Day Bro Split"}
            </p>
          </div>
        </div>

        <button
          onClick={generatePlan}
          disabled={!weight}
          className="btn-primary mt-6 px-8 flex items-center gap-2 disabled:opacity-50"
        >
          <span>⚡</span> Generate My Plan
        </button>
      </div>

      {/* Generated Plan */}
      {generated && plan && (
        <div>
          {/* Summary */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2"><span className="text-blue-400">⚖️</span><span className="text-gray-300 text-sm">Body Weight: <span className="text-white font-semibold">{weight} kg</span></span></div>
            <div className="flex items-center gap-2"><span className="text-blue-400">🎯</span><span className="text-gray-300 text-sm">Goal: <span className="text-white font-semibold">{goalInfo[goal].label}</span></span></div>
            <div className="flex items-center gap-2"><span className="text-blue-400">📅</span><span className="text-gray-300 text-sm">Split: <span className="text-white font-semibold">{days} days/week</span></span></div>
            <div className="flex items-center gap-2"><span className="text-blue-400">💡</span><span className="text-gray-400 text-sm">{goalInfo[goal].desc}</span></div>
          </div>

          {/* Day Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {plan.map((dayPlan, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${activeDay === i ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"}`}
              >
                <div>{dayPlan.day}</div>
                <div className="text-xs opacity-75">{dayPlan.label}</div>
              </button>
            ))}
          </div>

          {/* Active Day Exercises */}
          {plan[activeDay] && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-white font-bold text-xl">{plan[activeDay].day}: {plan[activeDay].label}</h2>
                <span className="text-gray-500 text-sm">{plan[activeDay].exercises.length} exercises</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plan[activeDay].exercises.map((ex, i) => {
                  const color = colorMap[muscleColors[ex.muscle]] || colorMap.blue;
                  return (
                    <div key={i} className="card hover:border-gray-700 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${color}`}>{muscleIcons[ex.muscle]} {ex.muscle}</span>
                            <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded-full">{ex.type}</span>
                          </div>
                          <h3 className="text-white font-semibold text-base">{ex.name}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-bold text-lg">{ex.suggestedWeight} kg</p>
                          <p className="text-gray-500 text-xs">suggested</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="bg-gray-800 rounded-lg p-2 text-center">
                          <p className="text-blue-400 font-bold">{ex.sets}</p>
                          <p className="text-gray-500 text-xs">Sets</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-2 text-center">
                          <p className="text-purple-400 font-bold text-sm">{ex.repsRange}</p>
                          <p className="text-gray-500 text-xs">Reps</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-2 text-center">
                          <p className="text-orange-400 font-bold text-xs">{goal === "strength" ? "3 min" : goal === "endurance" ? "45s" : "90s"}</p>
                          <p className="text-gray-500 text-xs">Rest</p>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg px-3 py-2">
                        <p className="text-gray-400 text-xs"><span className="text-yellow-400">💡 Tip:</span> {ex.tip}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Weekly Overview */}
              {activeDay === 0 && (
                <div className="mt-8 card">
                  <h3 className="text-white font-semibold mb-4">📋 Full Week Overview</h3>
                  <div className="space-y-3">
                    {plan.map((d, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg">
                        <span className="text-gray-400 text-sm w-14 font-medium">{d.day}</span>
                        <span className="text-white text-sm font-semibold flex-1">{d.label}</span>
                        <div className="flex gap-1 flex-wrap">
                          {d.muscles.map(m => (
                            <span key={m} className={`text-xs px-2 py-0.5 rounded-full border ${colorMap[muscleColors[m]]}`}>{muscleIcons[m]} {m}</span>
                          ))}
                        </div>
                        <span className="text-gray-500 text-xs">{d.exercises.length} exercises</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg border border-dashed border-gray-700">
                      <span className="text-gray-600 text-sm w-14">Rest</span>
                      <span className="text-gray-600 text-sm">Active Recovery / Rest Day</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Empty state */}
      {!generated && (
        <div className="text-center py-16 card">
          <div className="text-6xl mb-4">🤖</div>
          <h3 className="text-white font-semibold text-lg">Ready to build your plan</h3>
          <p className="text-gray-400 mt-2 text-sm">Enter your weight, pick a goal and days per week, then hit Generate</p>
        </div>
      )}
    </div>
  );
}