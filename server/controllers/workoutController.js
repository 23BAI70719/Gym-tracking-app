const { validationResult } = require("express-validator");
const Workout = require("../models/Workout");

const createWorkout = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: errors.array()[0].msg });
    const { exerciseName, sets, reps, weight, date, notes } = req.body;
    const workout = await Workout.create({ userId: req.user._id, exerciseName, sets, reps, weight, date: date || new Date(), notes: notes || "" });
    res.status(201).json({ message: "Workout logged", workout });
  } catch (e) { res.status(500).json({ message: "Server error" }); }
};

const getWorkouts = async (req, res) => {
  try {
    const { startDate, endDate, exercise, page = 1, limit = 50 } = req.query;
    const filter = { userId: req.user._id };
    if (startDate || endDate) {
      filter.date = {};
      if (startDate) filter.date.$gte = new Date(startDate);
      if (endDate) { const e = new Date(endDate); e.setHours(23,59,59,999); filter.date.$lte = e; }
    }
    if (exercise) filter.exerciseName = { $regex: exercise, $options: "i" };
    const skip = (parseInt(page)-1) * parseInt(limit);
    const [workouts, total] = await Promise.all([
      Workout.find(filter).sort({ date: -1 }).skip(skip).limit(parseInt(limit)),
      Workout.countDocuments(filter)
    ]);
    res.json({ workouts, total, page: parseInt(page), pages: Math.ceil(total/parseInt(limit)) });
  } catch (e) { res.status(500).json({ message: "Server error" }); }
};

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({ _id: req.params.id, userId: req.user._id });
    if (!workout) return res.status(404).json({ message: "Workout not found" });
    await workout.deleteOne();
    res.json({ message: "Deleted" });
  } catch (e) {
    if (e.name === "CastError") return res.status(400).json({ message: "Invalid ID" });
    res.status(500).json({ message: "Server error" });
  }
};

const getStats = async (req, res) => {
  try {
    const userId = req.user._id;
    const now = new Date();
    const weekStart = new Date(now); weekStart.setDate(now.getDate()-7);
    const monthStart = new Date(now); monthStart.setDate(now.getDate()-30);
    const [total, weekly, monthly, breakdown] = await Promise.all([
      Workout.countDocuments({ userId }),
      Workout.countDocuments({ userId, date: { $gte: weekStart } }),
      Workout.countDocuments({ userId, date: { $gte: monthStart } }),
      Workout.aggregate([{ $match: { userId } }, { $group: { _id: "$exerciseName", count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 5 }])
    ]);
    const weeklyData = await Workout.aggregate([
      { $match: { userId, date: { $gte: weekStart } } },
      { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }, totalVolume: { $sum: { $multiply: ["$sets","$reps","$weight"] } }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    const monthlyData = await Workout.aggregate([
      { $match: { userId, date: { $gte: monthStart } } },
      { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } }, totalVolume: { $sum: { $multiply: ["$sets","$reps","$weight"] } }, count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);
    res.json({ totalWorkouts: total, weeklyWorkouts: weekly, monthlyWorkouts: monthly, exerciseBreakdown: breakdown, weeklyData, monthlyData });
  } catch (e) { res.status(500).json({ message: "Server error" }); }
};

module.exports = { createWorkout, getWorkouts, deleteWorkout, getStats };