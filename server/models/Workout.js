const mongoose = require("mongoose");
const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  exerciseName: { type: String, required: true, trim: true },
  sets: { type: Number, required: true, min: 1 },
  reps: { type: Number, required: true, min: 1 },
  weight: { type: Number, required: true, min: 0 },
  date: { type: Date, required: true, default: Date.now },
  notes: { type: String, default: "" },
}, { timestamps: true });
workoutSchema.index({ userId: 1, date: -1 });
module.exports = mongoose.model("Workout", workoutSchema);