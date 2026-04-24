import React, { useState } from "react";
import { calculateBMI, getBMICategory } from "../utils/bmi";
import { authService } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function BMICalculator() {
  const { user, refreshUser } = useAuth();
  const [height, setHeight] = useState(user?.heightCm || "");
  const [weight, setWeight] = useState(user?.weightKg || "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const bmi = calculateBMI(parseFloat(height), parseFloat(weight));
  const { label, color } = getBMICategory(bmi);
  const handleSave = async () => {
    setSaving(true);
    try { await authService.updateProfile({ heightCm: parseFloat(height), weightKg: parseFloat(weight) }); await refreshUser(); setSaved(true); setTimeout(() => setSaved(false), 2000); }
    catch {} finally { setSaving(false); }
  };
  return (
    <div className="card">
      <h2 className="text-white font-semibold text-lg mb-4">⚖️ BMI Calculator</h2>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div><label className="text-gray-400 text-xs mb-1 block">Height (cm)</label><input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="175" className="input-field" /></div>
        <div><label className="text-gray-400 text-xs mb-1 block">Weight (kg)</label><input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="75" className="input-field" /></div>
      </div>
      {bmi && (
        <div className="bg-gray-800 rounded-xl p-4 mb-4 text-center">
          <p className="text-gray-400 text-sm">Your BMI</p>
          <p className={`text-4xl font-bold mt-1 ${color}`}>{bmi}</p>
          <p className={`text-sm font-medium mt-1 ${color}`}>{label}</p>
        </div>
      )}
      <button onClick={handleSave} disabled={!height || !weight || saving} className="btn-primary w-full text-sm">
        {saving ? "Saving..." : saved ? "✓ Saved!" : "Save to Profile"}
      </button>
    </div>
  );
}
