require("dotenv").config();
    const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();
connectDB();
app.use(cors({
  origin: [
    process.env.CLIENT_URL || "http://localhost:5173",
    /\.vercel\.app$/,
    "http://localhost:5173"
  ],
  credentials: true
}));
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.get("/api/health", (req, res) => res.json({ status: "OK" }));
app.use((req, res) => res.status(404).json({ message: "Not found" }));
app.use((err, req, res, next) => res.status(500).json({ message: "Server error" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));                              7-ll;ns