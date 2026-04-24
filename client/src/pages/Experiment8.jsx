import React from "react";
import { Link } from "react-router-dom";

export default function Experiment8() {
  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-xl p-6 flex items-center justify-between border-b-4 border-red-600">
          <div>
            <p className="text-gray-800 font-bold text-sm">Name: Jatin</p>
            <p className="text-gray-800 font-bold text-sm">UID: 23BAi70719</p>
          </div>
          <div className="text-center">
            <p className="text-red-700 font-extrabold text-xl">CHANDIGARH UNIVERSITY</p>
            <p className="text-gray-600 text-xs">Discover. Learn. Empower.</p>
            <p className="text-gray-700 text-xs font-semibold mt-1">NAAC GRADE A+ | QS World University Rankings — Ranked 1st Amongst Pvt. Universities in India</p>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white px-10 py-8 rounded-b-xl shadow-2xl text-gray-800">
          {/* Course Info */}
          <div className="text-center mb-6">
            <p className="font-bold text-lg">Course Name: Software Engineering</p>
            <p className="font-bold text-lg">Course Code: 23CSH-374</p>
          </div>

          <div className="flex justify-between text-sm mb-8">
            <p>Date of Issue: <strong>30/04/2026</strong></p>
            <p>Date of Submission: <strong>06/04/2026</strong></p>
          </div>

          <div className="text-center mb-8">
            <p className="font-bold text-xl">Experiment No. 08</p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-base mb-2">Subject: <span className="font-bold">Apply White Box and Black Box Testing techniques on the given problem statement to evaluate both internal logic and external functionality effectively.</span></p>
          </div>

          <div className="mb-6">
            <p className="font-bold text-base mb-2">Description:</p>
            <p className="text-sm leading-relaxed mb-3">
              In this experiment, students are required to perform Black Box Testing and White Box Testing on the Login and Registration System (GymTracker), including its core functional modules such as user authentication, input validation, and password recovery.
            </p>
            <p className="text-sm leading-relaxed">The system consists of two major components:</p>
          </div>

          <div className="mb-6 ml-4">
            <p className="font-bold text-sm mb-2">1. Login Module (Functional Interface):</p>
            <p className="text-sm leading-relaxed ml-4 mb-4">
              This module handles user interactions such as registration, login, and password recovery. Using <strong>Black Box Testing</strong>, students will validate system behavior by testing various input scenarios such as valid/invalid credentials, boundary conditions (e.g., password length, mobile number format), and error handling. The focus will be on ensuring that the system produces correct outputs without analyzing internal code.
            </p>

            <p className="font-bold text-sm mb-2">2. Core Module (Internal Logic &amp; Security Layer):</p>
            <p className="text-sm leading-relaxed ml-4">
              This module includes backend processes such as credential verification, database interaction, encryption/validation logic, and decision-making structures. Using <strong>White Box Testing</strong>, students will examine internal code structure, control flow, and logical paths. Techniques such as path testing, condition coverage, and loop testing will be applied to ensure that all possible execution paths and decision points are functioning correctly.
            </p>
          </div>

          {/* Test Cases Table */}
          <div className="mb-6">
            <p className="font-bold text-base mb-3">Black Box Test Cases — GymTracker Login Module:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-3 py-2 text-left">TC ID</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Test Case</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Input</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Expected Output</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["TC01","Valid Login","Valid email + password","Redirect to Dashboard","Pass"],
                    ["TC02","Invalid Password","Valid email + wrong password","Error: Invalid email or password","Pass"],
                    ["TC03","Empty Email","Empty email field","Error: Email is required","Pass"],
                    ["TC04","Invalid Email Format","abc@","Error: Invalid email","Pass"],
                    ["TC05","Short Password","Password < 6 chars","Error: Min 6 characters","Pass"],
                    ["TC06","Valid Signup","Name, email, password","Account created, redirect","Pass"],
                    ["TC07","Duplicate Email","Existing email signup","Error: Email already registered","Pass"],
                    ["TC08","Empty Fields","All fields empty","Validation errors shown","Pass"],
                    ["TC09","Password Mismatch","Different confirm password","Error: Passwords do not match","Pass"],
                    ["TC10","Valid Workout Log","Exercise, sets, reps, weight","Workout logged successfully","Pass"],
                  ].map(([id, tc, input, expected, result]) => (
                    <tr key={id} className="hover:bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2">{id}</td>
                      <td className="border border-gray-400 px-3 py-2">{tc}</td>
                      <td className="border border-gray-400 px-3 py-2">{input}</td>
                      <td className="border border-gray-400 px-3 py-2">{expected}</td>
                      <td className={`border border-gray-400 px-3 py-2 font-semibold ${result === "Pass" ? "text-green-600" : "text-red-600"}`}>{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-bold text-base mb-3">White Box Test Cases — Core Module:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-3 py-2 text-left">TC ID</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Module</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Path Tested</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Expected</th>
                    <th className="border border-gray-400 px-3 py-2 text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["WB01","JWT Middleware","Valid token → user found → next()","Request proceeds","Pass"],
                    ["WB02","JWT Middleware","No token → return 401","Unauthorized error","Pass"],
                    ["WB03","JWT Middleware","Expired token → catch block","Token expired message","Pass"],
                    ["WB04","Password Hash","Pre-save hook → bcrypt.hash()","Password encrypted","Pass"],
                    ["WB05","Auth Controller","Email exists → return 400","Duplicate email error","Pass"],
                    ["WB06","Workout Controller","Valid data → Workout.create()","Workout saved to DB","Pass"],
                    ["WB07","Stats Aggregation","userId match → aggregate pipeline","Stats returned","Pass"],
                    ["WB08","Delete Workout","Wrong userId → 404","Not found error","Pass"],
                  ].map(([id, mod, path, expected, result]) => (
                    <tr key={id} className="hover:bg-gray-50">
                      <td className="border border-gray-400 px-3 py-2">{id}</td>
                      <td className="border border-gray-400 px-3 py-2">{mod}</td>
                      <td className="border border-gray-400 px-3 py-2">{path}</td>
                      <td className="border border-gray-400 px-3 py-2">{expected}</td>
                      <td className={`border border-gray-400 px-3 py-2 font-semibold ${result === "Pass" ? "text-green-600" : "text-red-600"}`}>{result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm mt-6 border-t pt-4">
            All students must submit the experiment report on or before the deadline. <strong>Late submissions will not be entertained.</strong>
          </p>

          <div className="mt-6 flex gap-4">
            <Link to="/dashboard" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm">← Back to Dashboard</Link>
            <Link to="/experiment9" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-sm">Experiment 9 →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}