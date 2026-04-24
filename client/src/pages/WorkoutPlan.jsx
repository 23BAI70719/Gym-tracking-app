import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const exerciseData = {
  fatLoss: {
    chest: [
      { name: "Push-ups", sets: "4x20", rest: "30s", type: "Cardio Strength" },
      { name: "Incline Push-ups", sets: "3x15", rest: "30s", type: "Cardio Strength" },
      { name: "Burpee Push-ups", sets: "3x10", rest: "45s", type: "HIIT" },
    ],
    back: [
      { name: "Superman Hold", sets: "4x15", rest: "30s", type: "Bodyweight" },
      { name: "Resistance Band Row", sets: "4x20", rest: "30s", type: "Cardio Strength" },
      { name: "Mountain Climbers", sets: "4x30s", rest: "20s", type: "HIIT" },
    ],
    legs: [
      { name: "Jump Squats", sets: "4x20", rest: "30s", type: "HIIT" },
      { name: "Lunges", sets: "4x16", rest: "30s", type: "Cardio Strength" },
      { name: "High Knees", sets: "4x45s", rest: "15s", type: "Cardio" },
      { name: "Box Jumps", sets: "3x15", rest: "45s", type: "HIIT" },
    ],
    shoulders: [
      { name: "Pike Push-ups", sets: "4x12", rest: "30s", type: "Bodyweight" },
      { name: "Arm Circles", sets: "3x30s", rest: "20s", type: "Cardio" },
      { name: "Jumping Jacks", sets: "4x45s", rest: "15s", type: "Cardio" },
    ],
    arms: [
      { name: "Diamond Push-ups", sets: "4x12", rest: "30s", type: "Bodyweight" },
      { name: "Tricep Dips (Chair)", sets: "4x15", rest: "30s", type: "Bodyweight" },
      { name: "Shadow Boxing", sets: "4x45s", rest: "15s", type: "Cardio" },
    ],
    core: [
      { name: "Crunches", sets: "4x25", rest: "20s", type: "Core" },
      { name: "Plank", sets: "4x45s", rest: "20s", type: "Core" },
      { name: "Russian Twists", sets: "4x20", rest: "20s", type: "Core" },
      { name: "Bicycle Crunches", sets: "4x20", rest: "20s", type: "Core" },
    ],
  },
  muscleBuild: {
    chest: [
      { name: "Bench Press", sets: "4x8", rest: "90s", type: "Compound" },
      { name: "Incline Dumbbell Press", sets: "4x10", rest: "75s", type: "Compound" },
      { name: "Cable Flyes", sets: "3x12", rest: "60s", type: "Isolation" },
      { name: "Dips", sets: "3x10", rest: "75s", type: "Compound" },
    ],
    back: [
      { name: "Deadlift", sets: "4x6", rest: "120s", type: "Compound" },
      { name: "Pull-ups", sets: "4x8", rest: "90s", type: "Compound" },
      { name: "Barbell Row", sets: "4x8", rest: "90s", type: "Compound" },
      { name: "Lat Pulldown", sets: "3x12", rest: "60s", type: "Isolation" },
    ],
    legs: [
      { name: "Squat", sets: "4x8", rest: "120s", type: "Compound" },
      { name: "Romanian Deadlift", sets: "4x10", rest: "90s", type: "Compound" },
      { name: "Leg Press", sets: "4x10", rest: "90s", type: "Compound" },
      { name: "Leg Curl", sets: "3x12", rest: "60s", type: "Isolation" },
    ],
    shoulders: [
      { name: "Overhead Press", sets: "4x8", rest: "90s", type: "Compound" },
      { name: "Lateral Raises", sets: "4x12", rest: "60s", type: "Isolation" },
      { name: "Front Raises", sets: "3x12", rest: "60s", type: "Isolation" },
      { name: "Face Pulls", sets: "3x15", rest: "60s", type: "Isolation" },
    ],
    arms: [
      { name: "Barbell Curl", sets: "4x10", rest: "60s", type: "Isolation" },
      { name: "Hammer Curl", sets: "3x12", rest: "60s", type: "Isolation" },
      { name: "Tricep Pushdown", sets: "4x12", rest: "60s", type: "Isolation" },
      { name: "Skull Crushers", sets: "3x10", rest: "75s", type: "Isolation" },
    ],
    core: [
      { name: "Weighted Plank", sets: "4x45s", rest: "30s", type: "Core" },
      { name: "Cable Crunches", sets: "4x15", rest: "45s", type: "Core" },
      { name: "Hanging Leg Raises", sets: "4x12", rest: "45s", type: "Core" },
      { name: "Ab Wheel Rollout", sets: "3x10", rest: "60s", type: "Core" },
    ],
  },
};

const weekPlan = {
  fatLoss: ["Chest + Core", "Back + Cardio", "Legs", "Shoulders + Arms", "Full Body HIIT", "Active Recovery", "Rest"],
  muscleBuild: ["Chest + Triceps", "Back + Biceps", "Legs", "Shoulders + Core", "Arms + Core", "Full Body", "Rest"],
};

const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { label: "Underweight", color: "text-blue-400", bg: "bg-blue-500/10", goal: "muscleBuild" };
  if (bmi < 25) return { label: "Normal", color: "text-green-400", bg: "bg-green-500/10", goal: "muscleBuild" };
  if (bmi < 30) return { label: "Overweight", color: "text-yellow-400", bg: "bg-yellow-500/10", goal: "fatLoss" };
  return { label: "Obese", color: "text-red-400", bg: "bg-red-500/10", goal: "fatLoss" };
};

const muscleGroups = ["chest", "back", "legs", "shoulders", "arms", "core"];
const muscleIcons = { chest: "💪", back: "🔙", legs: "🦵", shoulders: "🏋️", arms: "💪", core: "🎯" };
const typeColors = {
  "Compound": "bg-blue-500/20 text-blue-300",
  "Isolation": "bg-purple-500/20 text-purple-300",
  "HIIT": "bg-red-500/20 text-red-300",
  "Cardio": "bg-orange-500/20 text-orange-300",
  "Cardio Strength": "bg-yellow-500/20 text-yellow-300",
  "Bodyweight": "bg-green-500/20 text-green-300",
  "Core": "bg-pink-500/20 text-pink-300",
};

export default function WorkoutPlan() {
  const { user } = useAuth();
  const [height, setHeight] = useState(user?.heightCm || "");
  const [weight, setWeight] = useState(user?.weightKg || "");
  const [activeGroup, setActiveGroup] = useState("chest");
  const [goalOverride, setGoalOverride] = useState(null);

  const bmi = height && weight ? (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(1) : null;
  const bmiInfo = bmi ? getBMICategory(parseFloat(bmi)) : null;
  const goal = goalOverride || bmiInfo?.goal || "muscleBuild";
  const exercises = exerciseData[goal][activeGroup];
  const plan = weekPlan[goal];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">🏋️ Smart Workout Planner</h1>
        <p className="text-gray-400 mt-2">Get a personalized workout plan based on your body metrics</p>
      </div>

      {/* BMI Input */}
      <div className="card mb-6">
        <h2 className="text-white font-semibold text-lg mb-4">📊 Your Body Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Height (cm)</label>
            <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 175" className="input-field" />
          </div>
          <div>
            <label className="text-gray-400 text-sm mb-1 block">Weight (kg)</label>
            <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 75" className="input-field" />
          </div>
          {bmi && (
            <div className={`rounded-xl p-4 ${bmiInfo.bg} flex flex-col justify-center`}>
              <p className="text-gray-400 text-sm">Your BMI</p>
              <p className={`text-3xl font-bold ${bmiInfo.color}`}>{bmi}</p>
              <p className={`text-sm font-medium ${bmiInfo.color}`}>{bmiInfo.label}</p>
            </div>
          )}
        </div>

        {bmi && (
          <div className="mt-4 flex gap-3">
            <button onClick={() => setGoalOverride("fatLoss")} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${goal === "fatLoss" ? "bg-orange-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"}`}>
              🔥 Fat Loss Plan
            </button>
            <button onClick={() => setGoalOverride("muscleBuild")} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${goal === "muscleBuild" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"}`}>
              💪 Muscle Building Plan
            </button>
          </div>
        )}
      </div>

      {bmi && (
        <>
          {/* Recommendation Banner */}
          <div className={`card mb-6 border-l-4 ${goal === "fatLoss" ? "border-orange-500" : "border-blue-500"}`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{goal === "fatLoss" ? "🔥" : "💪"}</span>
              <div>
                <h3 className="text-white font-bold text-lg">
                  {goal === "fatLoss" ? "Fat Loss & Toning Plan Recommended" : "Muscle Building Plan Recommended"}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {goal === "fatLoss"
                    ? "High intensity cardio + strength training to burn fat and tone muscles"
                    : "Progressive overload with compound movements to build lean muscle mass"}
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="card mb-6">
            <h2 className="text-white font-semibold text-lg mb-4">📅 Weekly Schedule</h2>
            <div className="grid grid-cols-7 gap-2">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((day, i) => (
                <div key={day} className={`rounded-lg p-2 text-center ${i === 6 ? "bg-gray-800/50" : goal === "fatLoss" ? "bg-orange-500/10 border border-orange-500/20" : "bg-blue-500/10 border border-blue-500/20"}`}>
                  <p className="text-gray-400 text-xs font-medium">{day}</p>
                  <p className={`text-xs mt-1 font-medium ${i === 6 ? "text-gray-500" : goal === "fatLoss" ? "text-orange-300" : "text-blue-300"}`}>{plan[i]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Muscle Group Selector */}
          <div className="card mb-6">
            <h2 className="text-white font-semibold text-lg mb-4">🎯 Exercises by Muscle Group</h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
              {muscleGroups.map(g => (
                <button key={g} onClick={() => setActiveGroup(g)} className={`py-3 rounded-xl text-sm font-medium transition-all capitalize flex flex-col items-center gap-1 ${activeGroup === g ? (goal === "fatLoss" ? "bg-orange-600 text-white" : "bg-blue-600 text-white") : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"}`}>
                  <span className="text-xl">{muscleIcons[g]}</span>
                  {g}
                </button>
              ))}
            </div>

            {/* Exercise List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {exercises.map((ex, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-colors border border-gray-700">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-semibold">{ex.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${typeColors[ex.type] || "bg-gray-700 text-gray-300"}`}>{ex.type}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-900 rounded-lg p-2 text-center">
                      <p className="text-blue-400 font-bold">{ex.sets}</p>
                      <p className="text-gray-500 text-xs">Sets x Reps</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-2 text-center">
                      <p className="text-green-400 font-bold">{ex.rest}</p>
                      <p className="text-gray-500 text-xs">Rest</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="card">
            <h2 className="text-white font-semibold text-lg mb-4">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(goal === "fatLoss" ? [
                { icon: "🥗", tip: "Maintain a 300-500 calorie deficit daily" },
                { icon: "💧", tip: "Drink 3-4 litres of water per day" },
                { icon: "⏱️", tip: "Keep rest periods short (20-45 seconds)" },
                { icon: "🏃", tip: "Add 20-30 min cardio after weight training" },
                { icon: "��", tip: "Sleep 7-8 hours for optimal fat burning" },
                { icon: "🍗", tip: "Eat high protein (1.6g per kg bodyweight)" },
              ] : [
                { icon: "🍗", tip: "Eat 1.8-2.2g protein per kg bodyweight" },
                { icon: "📈", tip: "Progressive overload — increase weight weekly" },
                { icon: "💧", tip: "Drink 3-4 litres of water per day" },
                { icon: "😴", tip: "Sleep 8 hours — muscles grow during rest" },
                { icon: "🍚", tip: "Eat in a 200-300 calorie surplus" },
                { icon: "⏱️", tip: "Rest 60-120 seconds between sets" },
              ]).map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-800 rounded-lg p-3">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-gray-300 text-sm">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {!bmi && (
        <div className="card text-center py-16">
          <div className="text-6xl mb-4">📏</div>
          <h3 className="text-white text-xl font-semibold">Enter your height and weight</h3>
          <p className="text-gray-400 mt-2">We will generate a personalized workout plan based on your BMI</p>
        </div>
      )}
    </div>
  );
}