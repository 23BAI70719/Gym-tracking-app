import React from "react";
import { Link } from "react-router-dom";

export default function ProjectInfo() {
  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header with logos */}
        <div className="bg-white rounded-t-xl p-6 flex items-center justify-between border-b-4 border-blue-600">
          <div>
            <p className="text-gray-700 font-semibold">Name: Jatin</p>
            <p className="text-gray-700 font-semibold">UID: 23BAi70719</p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-800">CHANDIGARH UNIVERSITY</h1>
            <p className="text-sm text-gray-600">NAAC GRADE A+ | QS World University Rankings</p>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white p-8 rounded-b-xl shadow-2xl">
          <div className="text-center mb-8 border-b-2 border-gray-200 pb-6">
            <h2 className="text-xl font-bold text-gray-800">Course Name: Software Engineering</h2>
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Course Code: 23CSH-374</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Date of Issue:</span>
              <span className="ml-2 text-gray-600">30/04/2026</span>
            </div>
            <div className="text-right">
              <span className="font-semibold text-gray-700">Date of Submission:</span>
              <span className="ml-2 text-gray-600">06/04/2026</span>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 bg-gray-100 py-3 rounded-lg">
              Project: GymTracker - Fitness Progress Tracker
            </h3>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Subject:</h4>
            <p className="text-gray-700 leading-relaxed">
              Full-Stack Web Application Development using MERN Stack (MongoDB, Express.js, React, Node.js) 
              with JWT Authentication, RESTful API Design, and Real-time Data Visualization.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Description:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              GymTracker is a comprehensive fitness progress tracking application that enables users to log workouts, 
              monitor progress through interactive charts, calculate BMI, and set personalized fitness goals. 
              The application demonstrates modern web development practices including responsive design, 
              state management, and secure authentication.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">The system consists of two major components:</h4>
            
            <div className="ml-6 mb-6">
              <h5 className="font-bold text-gray-800 mb-2">1. Frontend Module (User Interface Layer):</h5>
              <p className="text-gray-700 leading-relaxed mb-3">
                Built with React 18 and Vite, this module handles all user interactions including authentication, 
                workout logging, and data visualization. The interface is styled using Tailwind CSS for a modern, 
                responsive design that works seamlessly across desktop and mobile devices.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Login & Signup pages with form validation</li>
                <li>Dashboard with statistics and interactive charts (Chart.js)</li>
                <li>Add Workout page with exercise autocomplete</li>
                <li>Workout History with date filtering</li>
                <li>BMI Calculator and Goal Tracker components</li>
                <li>Responsive Navbar with mobile menu</li>
              </ul>
            </div>

            <div className="ml-6">
              <h5 className="font-bold text-gray-800 mb-2">2. Backend Module (API & Database Layer):</h5>
              <p className="text-gray-700 leading-relaxed mb-3">
                Developed using Node.js and Express.js, this module manages all server-side operations including 
                user authentication, data persistence, and business logic. MongoDB with Mongoose ODM is used for 
                flexible data storage and efficient querying.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>RESTful API endpoints for auth and workouts</li>
                <li>JWT-based authentication with bcrypt password hashing</li>
                <li>MongoDB aggregation pipelines for statistics</li>
                <li>Input validation using express-validator</li>
                <li>CORS configuration for secure cross-origin requests</li>
                <li>Error handling and logging middleware</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Key Features:</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>User Authentication:</strong> Secure signup/login with JWT tokens and password encryption</li>
              <li><strong>Workout Logging:</strong> Record exercises with sets, reps, weight, date, and notes</li>
              <li><strong>Progress Visualization:</strong> Weekly and monthly charts showing volume and frequency</li>
              <li><strong>BMI Calculator:</strong> Calculate and save body mass index to profile</li>
              <li><strong>Goal Tracking:</strong> Set weekly workout targets with progress bars</li>
              <li><strong>Workout History:</strong> Filter and view past workouts grouped by date</li>
              <li><strong>Statistics Dashboard:</strong> Total workouts, top exercises, and insights</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Technology Stack:</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Frontend:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                  <li>React 18.2.0</li>
                  <li>React Router DOM 6.21.0</li>
                  <li>Axios 1.6.2</li>
                  <li>Chart.js 4.4.1</li>
                  <li>Tailwind CSS 3.4.0</li>
                  <li>Vite 5.0.8</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Backend:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                  <li>Node.js with Express 4.18.2</li>
                  <li>MongoDB with Mongoose 8.0.3</li>
                  <li>JWT (jsonwebtoken 9.0.2)</li>
                  <li>bcryptjs 2.4.3</li>
                  <li>express-validator 7.0.1</li>
                  <li>CORS 2.8.5</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Project Architecture:</h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              The application follows the MVC (Model-View-Controller) pattern with clear separation of concerns:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><strong>Models:</strong> User and Workout schemas with validation and indexing</li>
              <li><strong>Controllers:</strong> Business logic for authentication and workout operations</li>
              <li><strong>Routes:</strong> API endpoints with middleware protection</li>
              <li><strong>Middleware:</strong> JWT verification and error handling</li>
              <li><strong>Views:</strong> React components with context-based state management</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-gray-800 font-semibold">
              This project demonstrates proficiency in full-stack development, RESTful API design, 
              database management, authentication security, and modern frontend frameworks.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/dashboard" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}