import React from "react";
import { Link } from "react-router-dom";

export default function ProjectReport() {
  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page 1 - Cover Page */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-2xl min-h-[1000px] flex flex-col">
          <div className="flex items-center justify-between mb-8 border-b-4 border-blue-600 pb-6">
            <div>
              <p className="text-gray-700 font-semibold">Name: Jatin</p>
              <p className="text-gray-700 font-semibold">UID: 23BAi70719</p>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-800">CHANDIGARH UNIVERSITY</h1>
              <p className="text-sm text-gray-600">NAAC GRADE A+ | QS World University Rankings</p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">PROJECT REPORT</h1>
              <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">GymTracker</h2>
              <p className="text-xl text-gray-700 mb-2">Fitness Progress Tracking Application</p>
              <p className="text-lg text-gray-600">Full-Stack MERN Development</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 w-full max-w-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Course Details</h3>
              <div className="text-left space-y-2">
                <p className="text-gray-700"><span className="font-semibold">Course:</span> Software Engineering</p>
                <p className="text-gray-700"><span className="font-semibold">Course Code:</span> 23CSH-374</p>
                <p className="text-gray-700"><span className="font-semibold">Semester:</span> 4th</p>
                <p className="text-gray-700"><span className="font-semibold">Academic Year:</span> 2025-2026</p>
              </div>
            </div>

            <div className="text-gray-600 text-sm">
              <p>Submitted in partial fulfillment of the requirements</p>
              <p>for the Software Engineering Laboratory</p>
            </div>
          </div>

          <div className="text-center text-gray-600 text-sm border-t pt-4">
            <p>Department of Computer Science & Engineering</p>
            <p>Chandigarh University, Punjab, India</p>
          </div>
        </div>

        {/* Page 2 - Abstract & Introduction */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">ABSTRACT</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            GymTracker is a comprehensive full-stack web application designed to help fitness enthusiasts track their 
            workout progress, monitor performance metrics, and achieve their fitness goals. Built using the MERN stack 
            (MongoDB, Express.js, React, Node.js), the application provides a seamless user experience with features 
            including workout logging, progress visualization through interactive charts, BMI calculation, and 
            personalized goal tracking. The system implements secure JWT-based authentication, RESTful API architecture, 
            and responsive design principles to ensure accessibility across all devices. This project demonstrates 
            practical application of modern web development technologies, database management, and software engineering 
            best practices.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 mt-8">1. INTRODUCTION</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1 Background</h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            In the modern fitness landscape, tracking workout progress is essential for achieving fitness goals. 
            Traditional paper-based logging methods are inefficient and lack analytical capabilities. Digital solutions 
            often require expensive subscriptions or lack customization. GymTracker addresses these challenges by 
            providing a free, open-source, and feature-rich platform for fitness tracking.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2 Problem Statement</h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            Fitness enthusiasts need a reliable, user-friendly system to:
          </p>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 mb-4">
            <li>Log workout details including exercises, sets, reps, and weights</li>
            <li>Visualize progress over time through charts and statistics</li>
            <li>Track body metrics like BMI and set personalized goals</li>
            <li>Access their data securely from any device</li>
            <li>Maintain historical records for long-term progress analysis</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">1.3 Objectives</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 mb-4">
            <li>Develop a secure user authentication system with JWT tokens</li>
            <li>Implement CRUD operations for workout management</li>
            <li>Create interactive data visualizations using Chart.js</li>
            <li>Design a responsive UI with Tailwind CSS</li>
            <li>Build RESTful APIs following industry standards</li>
            <li>Integrate MongoDB for efficient data storage and retrieval</li>
            <li>Implement BMI calculator and goal tracking features</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">1.4 Scope</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The application covers user registration and authentication, workout logging with detailed metrics, 
            historical data management with filtering capabilities, statistical analysis with weekly and monthly views, 
            BMI calculation and storage, goal setting and progress tracking, and responsive design for mobile and 
            desktop platforms.
          </p>
        </div>

        {/* Page 3 - System Architecture & Design */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">2. SYSTEM ARCHITECTURE</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Architecture Overview</h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            GymTracker follows a three-tier architecture pattern consisting of Presentation Layer (React frontend), 
            Application Layer (Express.js backend), and Data Layer (MongoDB database). This separation ensures 
            maintainability, scalability, and clear separation of concerns.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Technology Stack</h3>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Frontend Technologies</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• React 18.2.0 - UI library</li>
                <li>• React Router DOM 6.21.0 - Routing</li>
                <li>• Axios 1.6.2 - HTTP client</li>
                <li>• Chart.js 4.4.1 - Data visualization</li>
                <li>• Tailwind CSS 3.4.0 - Styling</li>
                <li>• Vite 5.0.8 - Build tool</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Backend Technologies</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Node.js - Runtime environment</li>
                <li>• Express.js 4.18.2 - Web framework</li>
                <li>• MongoDB - NoSQL database</li>
                <li>• Mongoose 8.0.3 - ODM</li>
                <li>• JWT 9.0.2 - Authentication</li>
                <li>• bcryptjs 2.4.3 - Password hashing</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Database Design</h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-bold text-gray-800 mb-2">User Schema</h4>
            <pre className="text-xs text-gray-700 overflow-x-auto">
{`{
  name: String (required),
  email: String (required, unique),
  password: String (hashed, required),
  goalType: String (enum: weight/reps/workouts),
  goalValue: Number,
  heightCm: Number,
  weightKg: Number,
  timestamps: true
}`}
            </pre>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="font-bold text-gray-800 mb-2">Workout Schema</h4>
            <pre className="text-xs text-gray-700 overflow-x-auto">
{`{
  userId: ObjectId (ref: User),
  exerciseName: String (required),
  sets: Number (min: 1),
  reps: Number (min: 1),
  weight: Number (min: 0),
  date: Date (default: now),
  notes: String,
  timestamps: true
}`}
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.4 API Endpoints</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-2 text-left">Method</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Endpoint</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-3 py-2 text-left">Auth</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="border border-gray-300 px-3 py-2">POST</td><td className="border border-gray-300 px-3 py-2">/api/auth/signup</td><td className="border border-gray-300 px-3 py-2">Register user</td><td className="border border-gray-300 px-3 py-2">No</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">POST</td><td className="border border-gray-300 px-3 py-2">/api/auth/login</td><td className="border border-gray-300 px-3 py-2">Login user</td><td className="border border-gray-300 px-3 py-2">No</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">GET</td><td className="border border-gray-300 px-3 py-2">/api/auth/me</td><td className="border border-gray-300 px-3 py-2">Get profile</td><td className="border border-gray-300 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">PUT</td><td className="border border-gray-300 px-3 py-2">/api/auth/profile</td><td className="border border-gray-300 px-3 py-2">Update profile</td><td className="border border-gray-300 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">POST</td><td className="border border-gray-300 px-3 py-2">/api/workouts</td><td className="border border-gray-300 px-3 py-2">Create workout</td><td className="border border-gray-300 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">GET</td><td className="border border-gray-300 px-3 py-2">/api/workouts</td><td className="border border-gray-300 px-3 py-2">Get workouts</td><td className="border border-gray-300 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">DELETE</td><td className="border border-gray-300 px-3 py-2">/api/workouts/:id</td><td className="border border-gray-300 px-3 py-2">Delete workout</td><td className="border border-gray-300 px-3 py-2">Yes</td></tr>
                <tr><td className="border border-gray-300 px-3 py-2">GET</td><td className="border border-gray-300 px-3 py-2">/api/workouts/stats</td><td className="border border-gray-300 px-3 py-2">Get statistics</td><td className="border border-gray-300 px-3 py-2">Yes</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Page 4 - Implementation & Features */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">3. IMPLEMENTATION</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Authentication System</h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            The authentication system uses JWT (JSON Web Tokens) for stateless authentication. Passwords are hashed 
            using bcrypt with a salt factor of 12 before storage. Upon successful login, a JWT token is generated 
            with a 7-day expiration and sent to the client. The token is stored in localStorage and included in 
            subsequent API requests via Authorization headers. Protected routes verify the token using middleware 
            before granting access.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Core Features</h3>
          
          <h4 className="font-semibold text-gray-800 mb-2">3.2.1 Workout Logging</h4>
          <ul className="list-disc ml-8 text-gray-700 space-y-1 mb-4 text-sm">
            <li>Exercise name with autocomplete suggestions</li>
            <li>Sets, reps, and weight tracking</li>
            <li>Date selection with calendar picker</li>
            <li>Optional notes for workout details</li>
            <li>Real-time volume calculation (sets × reps × weight)</li>
            <li>Form validation with error messages</li>
          </ul>

          <h4 className="font-semibold text-gray-800 mb-2">3.2.2 Dashboard Analytics</h4>
          <ul className="list-disc ml-8 text-gray-700 space-y-1 mb-4 text-sm">
            <li>Total workout count across all time</li>
            <li>Weekly and monthly workout statistics</li>
            <li>Top 5 most performed exercises</li>
            <li>Interactive bar charts for training volume</li>
            <li>Line charts for workout frequency trends</li>
            <li>Toggle between 7-day and 30-day views</li>
          </ul>

          <h4 className="font-semibold text-gray-800 mb-2">3.2.3 Workout History</h4>
          <ul className="list-disc ml-8 text-gray-700 space-y-1 mb-4 text-sm">
            <li>Chronological display grouped by date</li>
            <li>Date range filtering (start and end dates)</li>
            <li>Exercise name search functionality</li>
            <li>Workout cards with hover-to-delete feature</li>
            <li>Volume calculation display per workout</li>
            <li>Pagination support for large datasets</li>
          </ul>

          <h4 className="font-semibold text-gray-800 mb-2">3.2.4 BMI Calculator</h4>
          <ul className="list-disc ml-8 text-gray-700 space-y-1 mb-4 text-sm">
            <li>Height (cm) and weight (kg) input</li>
            <li>Automatic BMI calculation</li>
            <li>Category classification (Underweight/Normal/Overweight/Obese)</li>
            <li>Color-coded results for quick interpretation</li>
            <li>Save to profile functionality</li>
            <li>Reference ranges display</li>
          </ul>

          <h4 className="font-semibold text-gray-800 mb-2">3.2.5 Goal Tracking</h4>
          <ul className="list-disc ml-8 text-gray-700 space-y-1 mb-4 text-sm">
            <li>Goal type selection (weekly workouts/target weight/target reps)</li>
            <li>Target value setting</li>
            <li>Progress bar visualization</li>
            <li>Percentage completion display</li>
            <li>Motivational insights based on progress</li>
            <li>Goal achievement celebration</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Security Measures</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 text-sm">
            <li><strong>Password Security:</strong> bcrypt hashing with salt rounds</li>
            <li><strong>JWT Tokens:</strong> Signed tokens with expiration</li>
            <li><strong>Input Validation:</strong> express-validator for all inputs</li>
            <li><strong>CORS Protection:</strong> Configured allowed origins</li>
            <li><strong>MongoDB Injection:</strong> Mongoose sanitization</li>
            <li><strong>Error Handling:</strong> Generic error messages to prevent information leakage</li>
          </ul>
        </div>

        {/* Page 5 - Testing, Results & Conclusion */}
        <div className="bg-white rounded-xl p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">4. TESTING</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Testing Approach</h3>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            The application underwent comprehensive testing including unit testing of individual components, 
            integration testing of API endpoints, functional testing of user workflows, and UI/UX testing across 
            multiple devices and browsers.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Test Cases</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-2 py-2 text-left">Module</th>
                  <th className="border border-gray-300 px-2 py-2 text-left">Test Case</th>
                  <th className="border border-gray-300 px-2 py-2 text-left">Result</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="border border-gray-300 px-2 py-2">Auth</td><td className="border border-gray-300 px-2 py-2">Valid signup with unique email</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">Auth</td><td className="border border-gray-300 px-2 py-2">Duplicate email rejection</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">Auth</td><td className="border border-gray-300 px-2 py-2">Login with correct credentials</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">Auth</td><td className="border border-gray-300 px-2 py-2">Login with incorrect password</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">Workout</td><td className="border border-gray-300 px-2 py-2">Create workout with valid data</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">Workout</td><td className="border border-gray-300 px-2 py-2">Validation for negative values</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">Workout</td><td className="border border-gray-300 px-2 py-2">Delete own workout</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">Dashboard</td><td className="border border-gray-300 px-2 py-2">Statistics calculation accuracy</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
                <tr><td className="border border-gray-300 px-2 py-2">BMI</td><td className="border border-gray-300 px-2 py-2">BMI calculation correctness</td><td className="border border-gray-300 px-2 py-2 text-green-600">✓ Pass</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 mt-8">5. RESULTS & DISCUSSION</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Achievements</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-2 mb-4">
            <li>Successfully implemented full-stack MERN application</li>
            <li>Achieved responsive design working on all screen sizes</li>
            <li>Implemented secure authentication with JWT</li>
            <li>Created interactive data visualizations</li>
            <li>Built RESTful API following best practices</li>
            <li>Achieved fast page load times with Vite</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Challenges & Solutions</h3>
          <div className="space-y-3 mb-6">
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm">Challenge: Chart rendering performance</p>
              <p className="text-gray-700 text-sm">Solution: Implemented data aggregation on backend and memoization on frontend</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm">Challenge: Date filtering across timezones</p>
              <p className="text-gray-700 text-sm">Solution: Standardized to UTC on backend and local display on frontend</p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="font-semibold text-gray-800 text-sm">Challenge: Mobile responsiveness</p>
              <p className="text-gray-700 text-sm">Solution: Used Tailwind CSS responsive utilities and mobile-first approach</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2 mt-8">6. CONCLUSION</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            GymTracker successfully demonstrates the implementation of a full-stack web application using modern 
            technologies. The project achieved all stated objectives including secure authentication, comprehensive 
            workout tracking, data visualization, and responsive design. The application provides a practical solution 
            for fitness enthusiasts while showcasing proficiency in MERN stack development, RESTful API design, and 
            software engineering principles.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Future Enhancements</h3>
          <ul className="list-disc ml-8 text-gray-700 space-y-1 mb-6 text-sm">
            <li>Social features for sharing workouts with friends</li>
            <li>Exercise library with instructions and videos</li>
            <li>Workout plan templates and recommendations</li>
            <li>Mobile app development using React Native</li>
            <li>Integration with fitness wearables</li>
            <li>AI-powered workout suggestions based on history</li>
            <li>Nutrition tracking integration</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Learning Outcomes</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            This project provided hands-on experience with full-stack development, database design, API development, 
            authentication systems, state management, responsive design, and deployment processes. It reinforced 
            understanding of software engineering principles including modularity, separation of concerns, and 
            code maintainability.
          </p>

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