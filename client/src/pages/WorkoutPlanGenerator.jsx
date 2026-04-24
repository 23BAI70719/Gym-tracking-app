import React, { useState } from "react";

const EXERCISE_DB = {
  chest: [
    { name: "Bench Press", sets: 4, reps: "8-10", type: "compound" },
    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", type: "compound" },
    { name: "Cable Flyes", sets: 3, reps: "12-15", type: "isolation" },
    { name: "Push-ups", sets: 3, reps: "15-20", type: "bodyweight" },
  ],
  back: [
    { name: "Deadlift", sets: 4, reps: "5-6", type: "compound" },
    { name: "Pull-ups", sets: 3, reps: "8-10", type: "compound" },
    { name: "Barbell Row", sets: 4, reps: "8-10", type: "compound" },
    { name: "Lat Pulldown", sets: 3, reps: "10-12", type: "isolation" },
  ],
  shoulders: [
    { name: "Overhead Press", sets: 4, reps: "8-10", type: "compound" },
    { name: "Lateral Raises", sets: 3, reps: "12-15", type: "isolation" },
    { name: "Front Raises", sets: 3, reps: "12-15", type: "isolation" },
    { name: "Face Pulls", sets: 3, reps: "15-20", type: "isolation" },
  ],
  legs: [
    { name: "Squat", sets: 4, reps: "8-10", type: "compound" },
    { name: "Romanian Deadlift", sets: 3, reps: "10-12", type: "compound" },
    { name: "Leg Press", sets: 3, reps: "12-15", type: "compound" },
    { name: "Leg Curl", sets: 3, reps: "12-15", type: "isolation" },
    { name: "Calf Raises", sets: 4, reps: "15-20", type: "isolation" },
  ],
  biceps: [
    { name: "Barbell Curl", sets: 3, reps: "10-12", type: "isolation" },
    { name: "Dumbbell Hammer Curl", sets: 3, reps: "12-15", type: "isolation" },
    { name: "Concentration Curl", sets: 3, reps: "12-15", type: "isolation" },
  ],
  triceps: [
    { name: "Tricep Dips", sets: 3, reps: "10-12", type: "compound" },
    { name: "Skull Crushers", sets: 3, reps: "10-12", type: "isolation" },
    { name: "Cable Pushdown", sets: 3, reps: "12-15", type: "isolation" },
  ],
  core: [
    { name: "Plank", sets: 3, reps: "45-60s", type: "bodyweight" },
    { name: "Cable Crunches", sets: 3, reps: "15-20", type: "isolation" },
    { name: "Hanging Leg Raises", sets: 3, reps: "12-15", type: "bodyweight" },
    { name: "Russian Twists", sets: 3, reps: "20", type: "bodyweight" },
  ],
};

const MUSCLE_ICONS = { chest: "💪", back: "🔙", shoulders: "🏔️", legs: "🦵", biceps: "💪", triceps: "💪", core: "🎯" };
const MUSCLE_COLORS = { chest: "blue", back: "purple", shoulders: "green", legs: "orange", biceps: "pink", triceps: "red", core: "yellow" };

const COLOR_MAP = {
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", badge: "bg-blue-500/20 text-blue-300" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", badge: "bg-purple-500/20 text-purple-300" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", badge: "bg-green-500/20 text-green-300" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", badge: "bg-orange-500/20 text-orange-300" },
  pink: { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", badge: "bg-pink-500/20 text-pink-300" },
  red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", badge: "bg-red-500/20 text-red-300" },
  yellow: { bg: "bg-yellow-500/10", border: "border-yellow-500/30", text: "text-yellow-400", badge: "bg-yellow-500/20 text-yellow-300" },
};

const getWeightForExercise = (exerciseName, bodyWeight, level) => {
  const multipliers = {
    beginner: { "Bench Press": 0.5, "Deadlift": 0.75, "Squat": 0.6, "Overhead Press": 0.3, "Barbell Row": 0.4, "Barbell Curl": 0.2, "Skull Crushers": 0.2, "Romanian Deadlift": 0.5, "Leg Press": 1.0, "Lat Pulldown": 0.4 },
    intermediate: { "Bench Press": 0.75, "Deadlift": 1.25, "Squat": 1.0, "Overhead Press": 0.5, "Barbell Row": 0.65, "Barbell Curl": 0.3, "Skull Crushers": 0.3, "Romanian Deadlift": 0.75, "Leg Press": 1.5, "Lat Pulldown": 0.6 },
    advanced: { "Bench Press": 1.0, "Deadlift": 1.75, "Squat": 1.4, "Overhead Press": 0.7, "Barbell Row": 0.9, "Barbell Curl": 0.4, "Skull Crushers": 0.4, "Romanian Deadlift": 1.0, "Leg Press": 2.0, "Lat Pulldown": 0.8 },
  };
  const m = multipliers[level][exerciseName];
  if (!m) return null;
  return Math.round((bodyWeight * m) / 2.5) * 2.5;
};

const SPLIT_PLANS = {
  "3-day": [
    { day: "Day 1", focus: "Push", muscles: ["chest", "shoulders", "triceps"] },
    { day: "Day 2", focus: "Pull", muscles: ["back", "biceps"] },
    { day: "Day 3", focus: "Legs & Core", muscles: ["legs", "core"] },
  ],
  "4-day": [
    { day: "Day 1", focus: "Chest & Triceps", muscles: ["chest", "triceps"] },
    { day: "Day 2", focus: "Back & Biceps", muscles: ["back", "biceps"] },
    { day: "Day 3", focus: "Legs", muscles: ["legs"] },
    { day: "Day 4", focus: "Shoulders & Core", muscles: ["shoulders", "core"] },
  ],
  "5-day": [
    { day: "Day 1", focus: "Chest", muscles: ["chest"] },
    { day: "Day 2", focus: "Back", muscles: ["back"] },
    { day: "Day 3", focus: "Shoulders", muscles: ["shoulders"] },
    { day: "Day 4", focus: "Legs", muscles: ["legs"] },
    { day: "Day 5", focus: "Arms & Core", muscles: ["biceps", "triceps", "core"] },
  ],
};

export default function WorkoutPlanGenerator() {
  const [bodyWeight, setBodyWeight] = useState("");
  const [level, setLevel] = useState("beginner");
  const [split, setSplit] = useState("3-day");
  const [plan, setPlan] = useState(null);
  const [activeDay, setActiveDay] = useState(0);

  const generatePlan = () => {
    if (!bodyWeight || parseFloat(bodyWeight) <= 0) return;
    const bw = parseFloat(bodyWeight);
    const days = SPLIT_PLANS[split].map(day => ({
      ...day,
      exercises: day.muscles.flatMap(muscle =>
        EXERCISE_DB[muscle].slice(0, muscle === "core" ? 2 : 3).map(ex => ({
          ...ex,
          muscle,
          suggestedWeight: getWeightForExercise(ex.name, bw, level),
        }))
      ),
    }));
    setPlan(days);
    setActiveDay(0);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">🤖 AI Workout Plan Generator</h1>
        <p className="text-gray-400 mt-1">Get a personalized workout plan based on your body weight and fitness level</p>
      </div>

      {/* Config Card */}
      <div className="card mb-8">
        <h2 className="text-white font-semibold text-lg mb-5">Configure Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Your Body Weight (kg)</label>
            <input type="number" value={bodyWeight} onChange={e => setBodyWeight(e.target.value)} placeholder="e.g. 75" className="input-field" min="30" max="300" />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Fitness Level</label>
            <select value={level} onChange={e => setLevel(e.target.value)} className="input-field">
              <option value="beginner">🌱 Beginner (0-1 year)</option>
              <option value="intermediate">⚡ Intermediate (1-3 years)</option>
              <option value="advanced">🔥 Advanced (3+ years)</option>
            </select>
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-2 block">Weekly Split</label>
            <select value={split} onChange={e => setSplit(e.target.value)} className="input-field">
              <option value="3-day">3-Day Split (Push/Pull/Legs)</option>
              <option value="4-day">4-Day Split (Bro Split)</option>
              <option value="5-day">5-Day Split (Full Split)</option>
            </select>
          </div>
        </div>
        <button onClick={generatePlan} disabled={!bodyWeight} className="btn-primary mt-5 px-8">
          ⚡ Generate My Plan
        </button>
      </div>

      {/* Generated Plan */}
      {plan && (
        <div>
          {/* Day Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {plan.map((day, i) => (
              <button key={i} onClick={() => setActiveDay(i)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeDay === i ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`}>
                {day.day} — {day.focus}
              </button>
            ))}
          </div>

          {/* Active Day Exercises */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {plan[activeDay].exercises.map((ex, i) => {
              const color = MUSCLE_COLORS[ex.muscle];
              const c = COLOR_MAP[color];
              return (
                <div key={i} className={`card border ${c.border} hover:scale-[1.02] transition-transform`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.badge} capitalize`}>
                        {MUSCLE_ICONS[ex.muscle]} {ex.muscle}
                      </span>
                      <h3 className="text-white font-semibold mt-2">{ex.name}</h3>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-lg bg-gray-800 text-gray-400 capitalize`}>{ex.type}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-gray-800 rounded-lg p-2 text-center">
                      <p className={`font-bold text-lg ${c.text}`}>{ex.sets}</p>
                      <p className="text-gray-500 text-xs">Sets</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 text-center">
                      <p className={`font-bold text-lg ${c.text}`}>{ex.reps}</p>
                      <p className="text-gray-500 text-xs">Reps</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 text-center">
                      <p className={`font-bold text-lg ${c.text}`}>{ex.suggestedWeight ? `${ex.suggestedWeight}kg` : "BW"}</p>
                      <p className="text-gray-500 text-xs">Weight</p>
                    </div>
                  </div>
                  {ex.suggestedWeight && (
                    <p className="text-gray-600 text-xs mt-2">💡 Suggested for {level} at {bodyWeight}kg bodyweight</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="mt-8 card">
            <h3 className="text-white font-semibold mb-4">📋 Weekly Plan Summary</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {plan.map((day, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4">
                  <p className="text-blue-400 font-semibold text-sm">{day.day}</p>
                  <p className="text-white font-medium mt-1">{day.focus}</p>
                  <p className="text-gray-500 text-xs mt-1">{day.exercises.length} exercises</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {day.muscles.map(m => (
                      <span key={m} className={`text-xs px-2 py-0.5 rounded-full ${COLOR_MAP[MUSCLE_COLORS[m]].badge} capitalize`}>{m}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!plan && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🏋️</div>
          <p className="text-gray-400 text-lg">Enter your body weight and generate your personalized plan</p>
          <p className="text-gray-600 text-sm mt-2">Exercises are automatically adjusted based on your weight and level</p>
        </div>
      )}
    </div>
  );
}