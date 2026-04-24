import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { workoutService } from "../services/api";
import FormInput from "../components/FormInput";

const SUGGESTIONS = ["Bench Press","Squat","Deadlift","Overhead Press","Barbell Row","Pull-up","Dumbbell Curl","Tricep Dip","Leg Press","Lat Pulldown"];

export default function AddWorkout() {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({ exerciseName: "", sets: "", reps: "", weight: "", date: today, notes: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSug, setShowSug] = useState(false);
  const filtered = SUGGESTIONS.filter(e => e.toLowerCase().includes(form.exerciseName.toLowerCase()) && form.exerciseName);
  const validate = () => {
    const e = {};
    if (!form.exerciseName.trim()) e.exerciseName = "Required";
    if (!form.sets || parseInt(form.sets) < 1) e.sets = "Min 1";
    if (!form.reps || parseInt(form.reps) < 1) e.reps = "Min 1";
    if (form.weight === "" || parseFloat(form.weight) < 0) e.weight = "Required";
    return e;
  };
  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setErrors({ ...errors, [e.target.name]: "" }); };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    try {
      await workoutService.create({ ...form, sets: parseInt(form.sets), reps: parseInt(form.reps), weight: parseFloat(form.weight) });
      setSuccess(true);
      setTimeout(() => navigate("/history"), 1200);
    } catch (err) { setApiError(err.response?.data?.message || "Failed to save."); }
    finally { setLoading(false); }
  };
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6"><h1 className="text-2xl font-bold text-white">Log Workout</h1></div>
      <div className="card">
        {success && <div className="bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg px-4 py-3 mb-5 text-sm">Workout logged! Redirecting...</div>}
        {apiError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 mb-5 text-sm">{apiError}</div>}
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="relative">
            <FormInput label="Exercise Name" id="exerciseName" name="exerciseName" value={form.exerciseName} onChange={handleChange} onFocus={() => setShowSug(true)} onBlur={() => setTimeout(() => setShowSug(false), 150)} error={errors.exerciseName} placeholder="e.g. Bench Press" autoComplete="off" />
            {showSug && filtered.length > 0 && (
              <ul className="absolute z-10 w-full bg-gray-800 border border-gray-700 rounded-lg mt-1 shadow-xl max-h-48 overflow-y-auto">
                {filtered.map(ex => <li key={ex} onMouseDown={() => setForm({ ...form, exerciseName: ex })} className="px-4 py-2.5 text-gray-300 hover:bg-gray-700 cursor-pointer text-sm">{ex}</li>)}
              </ul>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            <FormInput label="Sets" id="sets" name="sets" type="number" value={form.sets} onChange={handleChange} error={errors.sets} placeholder="3" min="1" />
            <FormInput label="Reps" id="reps" name="reps" type="number" value={form.reps} onChange={handleChange} error={errors.reps} placeholder="10" min="1" />
            <FormInput label="Weight (kg)" id="weight" name="weight" type="number" value={form.weight} onChange={handleChange} error={errors.weight} placeholder="60" min="0" step="0.5" />
          </div>
          <FormInput label="Date" id="date" name="date" type="date" value={form.date} onChange={handleChange} error={errors.date} max={today} />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-300">Notes (optional)</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="input-field resize-none" placeholder="How did it feel?" />
          </div>
          <button type="submit" disabled={loading || success} className="btn-primary w-full flex items-center justify-center gap-2">
            {loading ? "Saving..." : "+ Log Workout"}
          </button>
        </form>
      </div>
    </div>
  );
}