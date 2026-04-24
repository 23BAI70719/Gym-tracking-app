import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler);

const opts = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { labels: { color: "#9ca3af" } }, tooltip: { backgroundColor: "#1f2937", titleColor: "#f9fafb", bodyColor: "#d1d5db", borderColor: "#374151", borderWidth: 1 } },
  scales: { x: { ticks: { color: "#6b7280" }, grid: { color: "#1f2937" } }, y: { ticks: { color: "#6b7280" }, grid: { color: "#1f2937" } } }
};

export function BarChart({ labels, datasets, height = 250 }) {
  return <div style={{ height }}><Bar data={{ labels, datasets }} options={opts} /></div>;
}
export function LineChart({ labels, datasets, height = 250 }) {
  return <div style={{ height }}><Line data={{ labels, datasets }} options={opts} /></div>;
}
