const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const genToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: errors.array()[0].msg });
    const { name, email, password } = req.body;
    if (await User.findOne({ email })) return res.status(400).json({ message: "Email already registered" });
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "Account created", token: genToken(user._id), user });
  } catch (e) { res.status(500).json({ message: "Server error" }); }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ message: errors.array()[0].msg });
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) return res.status(401).json({ message: "Invalid email or password" });
    res.json({ message: "Login successful", token: genToken(user._id), user });
  } catch (e) { res.status(500).json({ message: "Server error" }); }
};

const getMe = (req, res) => res.json({ user: req.user });

const updateProfile = async (req, res) => {
  try {
    const { goalType, goalValue, goalExercise, heightCm, weightKg } = req.body;
    const user = await User.findByIdAndUpdate(req.user._id, { goalType, goalValue, goalExercise, heightCm, weightKg }, { new: true });
    res.json({ message: "Profile updated", user });
  } catch (e) { res.status(500).json({ message: "Server error" }); }
};

module.exports = { signup, login, getMe, updateProfile };