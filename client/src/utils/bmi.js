export const calculateBMI = (h, w) => { if (!h || !w || h <= 0 || w <= 0) return null; return (w / ((h/100)**2)).toFixed(1); };
export const getBMICategory = (bmi) => {
  if (!bmi) return { label: "N/A", color: "text-gray-400" };
  const v = parseFloat(bmi);
  if (v < 18.5) return { label: "Underweight", color: "text-blue-400" };
  if (v < 25) return { label: "Normal", color: "text-green-400" };
  if (v < 30) return { label: "Overweight", color: "text-yellow-400" };
  return { label: "Obese", color: "text-red-400" };
};
export const calcVolume = (s, r, w) => s * r * w;
export const formatDate = (d) => new Date(d).toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" });
export const getGoalProgress = (cur, target) => { if (!target || target <= 0) return 0; return Math.min(Math.round((cur/target)*100), 100); };
