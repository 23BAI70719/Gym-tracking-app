import React from "react";
import { Link } from "react-router-dom";

export default function Experiment7() {
  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-xl p-6 flex items-center justify-between border-b-4 border-red-600">
          <div>
            <p className="text-gray-700 font-semibold">Name: Jatin</p>
            <p className="text-gray-700 font-semibold">UID: 23BAi70719</p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-red-700">CHANDIGARH UNIVERSITY</h1>
            <p className="text-sm text-gray-500 italic">Discover. Learn. Empower.</p>
            <p className="text-xs text-gray-500 mt-1">NAAC GRADE A+ | QS World University Rankings — Ranked 1st Amongst Pvt. Universities in India</p>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white p-8 rounded-b-xl shadow-2xl text-gray-800">

          {/* Course Info */}
          <div className="text-center mb-6 border-b-2 border-gray-200 pb-4">
            <h2 className="text-xl font-bold">Course Name: Software Engineering</h2>
            <h3 className="text-lg font-semibold mt-1">Course Code: 23CSH-374</h3>
          </div>

          {/* Dates */}
          <div className="flex justify-between text-sm mb-8">
            <p><span className="font-semibold">Date of Issue:</span> <strong>25/03/2026</strong></p>
            <p><span className="font-semibold">Date of Submission:</span> <strong>31/03/2026</strong></p>
          </div>

          {/* Experiment No */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold bg-gray-100 py-3 rounded-lg">Experiment No. 07</h3>
          </div>

          {/* Title */}
          <div className="mb-5">
            <p className="text-base"><span className="font-bold">Title: </span>Development of Core Model based on Problem Statement</p>
          </div>

          {/* Aim */}
          <div className="mb-5">
            <p className="text-base"><span className="font-bold">Aim: </span>To design and develop a core model corresponding to the selected problem statement.</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">Description:</h4>
            <p className="leading-relaxed mb-3">
              Students are required to implement all essential core functional modules along with proper database integration relevant to their problem statement. The model should demonstrate the working of key functionalities in a structured and efficient manner.
            </p>
            <p className="leading-relaxed">
              For this experiment, the <strong>GymTracker</strong> application was developed as the core model. It implements a full-stack fitness tracking system with user authentication, workout management, and progress analytics — all backed by a MongoDB database.
            </p>
          </div>

          {/* Core Modules */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-3">Core Modules Implemented:</h4>
            <div className="ml-4 space-y-4">
              <div>
                <h5 className="font-bold">1. User Authentication Module:</h5>
                <p className="ml-4 leading-relaxed">Handles user registration and login with bcrypt password hashing and JWT token generation. Includes input validation and secure session management.</p>
              </div>
              <div>
                <h5 className="font-bold">2. Workout Management Module:</h5>
                <p className="ml-4 leading-relaxed">Allows users to create, read, and delete workout entries. Each entry stores exercise name, sets, reps, weight, date, and notes with proper MongoDB indexing.</p>
              </div>
              <div>
                <h5 className="font-bold">3. Statistics & Analytics Module:</h5>
                <p className="ml-4 leading-relaxed">Uses MongoDB aggregation pipelines to compute weekly/monthly workout volumes, frequency trends, and top exercises for dashboard visualization.</p>
              </div>
              <div>
                <h5 className="font-bold">4. BMI & Goal Tracking Module:</h5>
                <p className="ml-4 leading-relaxed">Calculates Body Mass Index from user height and weight. Supports setting and tracking fitness goals with progress percentage computation.</p>
              </div>
            </div>
          </div>

          {/* Database Design */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-3">Database Design & Integration:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-bold mb-2">User Schema:</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• name (String, required)</li>
                  <li>• email (String, unique, required)</li>
                  <li>• password (String, hashed)</li>
                  <li>• goalType, goalValue, goalExercise</li>
                  <li>• heightCm, weightKg</li>
                  <li>• timestamps (createdAt, updatedAt)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="font-bold mb-2">Workout Schema:</p>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• userId (ObjectId, ref: User)</li>
                  <li>• exerciseName (String, required)</li>
                  <li>• sets, reps, weight (Number)</li>
                  <li>• date (Date, default: now)</li>
                  <li>• notes (String, optional)</li>
                  <li>• Compound index: userId + date</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-3">Instructions Followed:</h4>
            <ul className="list-disc ml-6 space-y-2 leading-relaxed">
              <li>Problem statement clearly defined: Gym Progress Tracker for fitness enthusiasts</li>
              <li>All core modules developed with proper logic and MVC architecture</li>
              <li>Database design implemented with Mongoose schemas, validation, and indexing</li>
              <li>Clean, well-documented code with async/await and error handling throughout</li>
              <li>Source code submitted with full frontend and backend implementation</li>
            </ul>
          </div>

          {/* Notice box */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
            <p className="font-semibold text-yellow-800">📢 Notice:</p>
            <p className="text-yellow-700 mt-1">All students must submit the experiment report along with source code within the given deadline. <strong>Submission Deadline: 31/03/2026</strong></p>
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <Link to="/dashboard" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">← Back to Dashboard</Link>
            <Link to="/experiment-8" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">Experiment 8 →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}