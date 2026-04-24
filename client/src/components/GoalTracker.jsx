import React, { useState } from "react";
import { authService } from "../services/api";
import { useAuth } from "../context/AuthContext";
import { getGoalProgress } from "../utils/bmi";

export default function GoalTracker({ stats }) {
  const { user, refreshUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [goalType, setGoalType] = useState(user?.goalType || "workouts");
  const [goalValue, setGoalValue] = useState(user?.goalValue || "");
  const [saving, setSaving] = useState(false);
  const handleSave = async () => {
    setSaving(true);
    try { await authService.updateProfile({ goalType, goalValue: parseFloat(goalValue) }); await refreshUser(); setEditing(false); }
    catch {} finally { setSaving(false); }
  };
  const current = user?.goalType === "workouts" ? (stats?.weeklyWorkouts || 0) : 0;
  const progress = getGoalProgress(current, user?.goalValue);
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-lg">🎯 Goal Tracker</h2>
        <button onClick={() => setEditing(!editing)} className="text-blue-400 hover:text-blue-300 text-sm">{editing ? "Cancel" : "Edit Goal"}</button>
      </div>
      {editing ? (
        <div className="space-y-3">
          <select value={goalType} onChange={e => setGoalType(e.target.value)} className="input-field">
            <option value="workouts">Weekly Workouts</option>
            <option value="weight">Target Weight</option>
            <option value="reps">Target Reps</option>
          </select>
          <input type="number" value={goalValue} onChange={e => setGoalValue(e.target.value)} placeholder="Target value" className="input-field" min="1" />
          <button onClick={handleSave} disabled={!goalValue || saving} className="btn-primary w-full text-sm">{saving ? "Saving..." : "Save Goal"}</button>
        </div>
      ) : user?.goalValue ? (
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm">{goalType === "workouts" ? "Weekly Workouts" : "Target"}</span>
            <span className="text-white font-medium text-sm">{current} / {user.goalValue}</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div className={`h-3 rounded-full transition-all ${progress >= 100 ? "bg-green-500" : "bg-blue-500"}`} style={{ width: `${progress}%` }} />
          </div>
          <p className="text-gray-500 text-xs mt-2">{progress}% complete {progress >= 100 && "🎉 Goal reached!"}</p>
        </div>
      ) : (
        <div className="text-center py-4">
          <p className="text-gray-500 text-sm">No goal set yet.</p>
          <button onClick={() => setEditing(true)} className="mt-2 text-blue-400 hover:text-blue-300 text-sm">Set a goal →</button>
        </div>
      )}
    </div>
  );
}
