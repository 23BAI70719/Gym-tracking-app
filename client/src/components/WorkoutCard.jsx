import React, { useState } from "react";
import { formatDate, calcVolume } from "../utils/bmi";

export default function WorkoutCard({ workout, onDelete }) {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    if (!window.confirm("Delete this workout?")) return;
    setDeleting(true);
    try { await onDelete(workout._id); } finally { setDeleting(false); }
  };
  const volume = calcVolume(workout.sets, workout.reps, workout.weight);
  return (
    <div className="card hover:border-gray-700 transition-colors group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-lg truncate capitalize">{workout.exerciseName}</h3>
          <p className="text-gray-400 text-sm mt-0.5">{formatDate(workout.date)}</p>
        </div>
        <button onClick={handleDelete} disabled={deleting} className="text-gray-600 hover:text-red-400 transition-colors p-1 opacity-0 group-hover:opacity-100 disabled:opacity-50">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="bg-gray-800 rounded-lg p-3 text-center"><p className="text-blue-400 font-bold text-xl">{workout.sets}</p><p className="text-gray-500 text-xs mt-0.5">Sets</p></div>
        <div className="bg-gray-800 rounded-lg p-3 text-center"><p className="text-purple-400 font-bold text-xl">{workout.reps}</p><p className="text-gray-500 text-xs mt-0.5">Reps</p></div>
        <div className="bg-gray-800 rounded-lg p-3 text-center"><p className="text-green-400 font-bold text-xl">{workout.weight}</p><p className="text-gray-500 text-xs mt-0.5">kg</p></div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-gray-500 text-xs">Volume: <span className="text-gray-300 font-medium">{volume.toLocaleString()} kg</span></span>
        {workout.notes && <span className="text-gray-500 text-xs italic truncate max-w-[60%]">"{workout.notes}"</span>}
      </div>
    </div>
  );
}
