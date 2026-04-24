import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { workoutService } from "../services/api";
import { useAuth } from "../context/AuthContext";
import StatCard from "../components/StatCard";
import { BarChart, LineChart } from "../components/ChartComponent";
import BMICalculator from "../components/BMICalculator";
import GoalTracker from "../components/GoalTracker";

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [chartView, setChartView] = useState("weekly");

  useEffect(() => {
    workoutService.getStats()
      .then(({ data }) => setStats(data))
      .catch(err => setError(err.response?.data?.message || "Failed to load stats."))
      .finally(() => setLoading(false));
  }, []);

  const source = chartView === "weekly" ? stats?.weeklyData : stats?.monthlyData;
  const labels = source?.map(d => new Date(d._id).toLocaleDateString("en-US", { month: "short", day: "numeric" })) || [];
  const volumeDatasets = [{ label: "Volume (kg)", data: source?.map(d => d.totalVolume) || [], backgroundColor: "rgba(59,130,246,0.6)", borderColor: "#3b82f6", borderWidth: 2, borderRadius: 6 }];
  const countDatasets = [{ label: "Workouts", data: source?.map(d => d.count) || [], borderColor: "#8b5cf6", backgroundColor: "rgba(139,92,246,0.1)", borderWidth: 2, fill: true, tension: 0.4, pointBackgroundColor: "#8b5cf6", pointRadius: 4 }];
  const exLabels = stats?.exerciseBreakdown?.map(e => e._id) || [];
  const exDatasets = [{ label: "Times", data: stats?.exerciseBreakdown?.map(e => e.count) || [], backgroundColor: ["rgba(59,130,246,0.7)","rgba(139,92,246,0.7)","rgba(16,185,129,0.7)","rgba(245,158,11,0.7)","rgba(239,68,68,0.7)"], borderColor: ["#3b82f6","#8b5cf6","#10b981","#f59e0b","#ef4444"], borderWidth: 2, borderRadius: 6 }];

  if (loading) return <div className="flex justify-center items-center min-h-[60vh]"><div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500" /></div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-bold text-white">Welcome back, {user?.name?.split(" ")[0]} 👋</h1><p className="text-gray-400 mt-1">Here is your fitness overview</p></div>
        <Link to="/add-workout" className="btn-primary hidden sm:block">+ Log Workout</Link>
      </div>
      {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-6 text-sm">{error}</div>}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Workouts" value={stats?.totalWorkouts ?? 0} icon="🏋️" color="blue" />
        <StatCard label="This Week" value={stats?.weeklyWorkouts ?? 0} icon="📅" color="purple" sub="last 7 days" />
        <StatCard label="This Month" value={stats?.monthlyWorkouts ?? 0} icon="📈" color="green" sub="last 30 days" />
        <StatCard label="Top Exercise" value={stats?.exerciseBreakdown?.[0]?._id ?? "—"} icon="⭐" color="orange" sub={stats?.exerciseBreakdown?.[0] ? `${stats.exerciseBreakdown[0].count}x` : ""} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2 card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold">Progress Overview</h2>
            <div className="flex bg-gray-800 rounded-lg p-1 gap-1">
              {["weekly","monthly"].map(v => (
                <button key={v} onClick={() => setChartView(v)} className={`px-3 py-1 rounded text-xs font-medium transition-colors ${chartView === v ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}>
                  {v === "weekly" ? "7 Days" : "30 Days"}
                </button>
              ))}
            </div>
          </div>
          {source && source.length > 0 ? (
            <div className="space-y-6">
              <div><p className="text-gray-500 text-xs mb-2">Training Volume (kg)</p><BarChart labels={labels} datasets={volumeDatasets} height={200} /></div>
              <div><p className="text-gray-500 text-xs mb-2">Workout Frequency</p><LineChart labels={labels} datasets={countDatasets} height={160} /></div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-48 text-center">
              <p className="text-gray-500">No workout data yet</p>
              <Link to="/add-workout" className="text-blue-400 text-sm mt-2 hover:text-blue-300">Log your first workout</Link>
            </div>
          )}
        </div>
        <div className="card">
          <h2 className="text-white font-semibold mb-4">Top Exercises</h2>
          {exLabels.length > 0 ? (
            <>
              <BarChart labels={exLabels} datasets={exDatasets} height={200} />
              <div className="mt-4 space-y-2">
                {stats.exerciseBreakdown.map((ex, i) => (
                  <div key={ex._id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2"><span className="text-gray-500 text-xs w-4">{i+1}.</span><span className="text-gray-300 text-sm capitalize truncate max-w-[140px]">{ex._id}</span></div>
                    <span className="text-gray-500 text-xs">{ex.count}x</span>
                  </div>
                ))}
              </div>
            </>
          ) : <div className="flex items-center justify-center h-48"><p className="text-gray-500 text-sm">No data yet</p></div>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BMICalculator />
        <GoalTracker stats={stats} />
      </div>
      <div className="sm:hidden mt-6"><Link to="/add-workout" className="btn-primary w-full block text-center">+ Log Workout</Link></div>
    </div>
  );
}