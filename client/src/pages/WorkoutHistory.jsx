import React, { useState, useEffect, useCallback } from "react";
import { workoutService } from "../services/api";
import WorkoutCard from "../components/WorkoutCard";
import { Link } from "react-router-dom";

export default function WorkoutHistory() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [total, setTotal] = useState(0);
  const today = new Date().toISOString().split("T")[0];
  const thirtyAgo = new Date(Date.now() - 30*24*60*60*1000).toISOString().split("T")[0];
  const [filters, setFilters] = useState({ startDate: thirtyAgo, endDate: today, exercise: "" });

  const fetchWorkouts = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const params = {};
      if (filters.startDate) params.startDate = filters.startDate;
      if (filters.endDate) params.endDate = filters.endDate;
      if (filters.exercise.trim()) params.exercise = filters.exercise.trim();
      const { data } = await workoutService.getAll(params);
      setWorkouts(data.workouts); setTotal(data.total);
    } catch (err) { setError(err.response?.data?.message || "Failed to load."); }
    finally { setLoading(false); }
  }, [filters]);

  useEffect(() => { fetchWorkouts(); }, [fetchWorkouts]);

  const handleDelete = async (id) => {
    await workoutService.delete(id);
    setWorkouts(prev => prev.filter(w => w._id !== id));
    setTotal(prev => prev - 1);
  };

  const grouped = workouts.reduce((acc, w) => {
    const date = new Date(w.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
    if (!acc[date]) acc[date] = [];
    acc[date].push(w);
    return acc;
  }, {});

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold text-white">Workout History</h1><p className="text-gray-400 mt-1">{total} workout{total !== 1 ? "s" : ""} found</p></div>
        <Link to="/add-workout" className="btn-primary text-sm">+ Add Workout</Link>
      </div>
      <div className="card mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div><label className="text-gray-500 text-xs mb-1 block">From</label><input type="date" value={filters.startDate} onChange={e => setFilters({...filters, startDate: e.target.value})} className="input-field text-sm" /></div>
          <div><label className="text-gray-500 text-xs mb-1 block">To</label><input type="date" value={filters.endDate} onChange={e => setFilters({...filters, endDate: e.target.value})} max={today} className="input-field text-sm" /></div>
          <div><label className="text-gray-500 text-xs mb-1 block">Exercise</label><input type="text" value={filters.exercise} onChange={e => setFilters({...filters, exercise: e.target.value})} placeholder="Search..." className="input-field text-sm" /></div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center py-16"><div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500" /></div>
      ) : error ? (
        <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-6 text-center">{error}</div>
      ) : workouts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🏋️</div>
          <p className="text-gray-400 text-lg">No workouts found</p>
          <Link to="/add-workout" className="btn-primary inline-block mt-4 text-sm">Log First Workout</Link>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(grouped).map(([date, dayWorkouts]) => (
            <div key={date}>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-gray-400 text-sm font-medium">{date}</h3>
                <div className="flex-1 h-px bg-gray-800" />
                <span className="text-gray-600 text-xs">{dayWorkouts.length} exercise{dayWorkouts.length !== 1 ? "s" : ""}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dayWorkouts.map(w => <WorkoutCard key={w._id} workout={w} onDelete={handleDelete} />)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}