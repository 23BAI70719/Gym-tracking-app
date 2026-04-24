import React from "react";
export default function StatCard({ label, value, icon, color = "blue", sub }) {
  const colors = { blue: "bg-blue-500/10 text-blue-400", purple: "bg-purple-500/10 text-purple-400", green: "bg-green-500/10 text-green-400", orange: "bg-orange-500/10 text-orange-400" };
  return (
    <div className="card flex items-center gap-4">
      <div className={`rounded-xl p-3 text-2xl ${colors[color]}`}>{icon}</div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-white font-bold text-2xl leading-tight">{value}</p>
        {sub && <p className="text-gray-500 text-xs mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}
