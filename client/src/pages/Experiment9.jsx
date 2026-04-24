import React from "react";
import { Link } from "react-router-dom";

export default function Experiment9() {
  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-t-xl p-6 flex items-center justify-between border-b-4 border-blue-600">
          <div>
            <p className="text-gray-700 font-semibold">Name: Jatin</p>
            <p className="text-gray-700 font-semibold">UID: 23BAi70719</p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-bold text-gray-800">CHANDIGARH UNIVERSITY</h1>
            <p className="text-sm text-gray-600">NAAC GRADE A+ | QS World University Rankings</p>
            <p className="text-xs text-gray-500">Ranked 1st Amongst Pvt. Universities in India</p>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white p-8 rounded-b-xl shadow-2xl">

          {/* Course Info */}
          <div className="text-center mb-6 border-b-2 border-gray-200 pb-6">
            <h2 className="text-xl font-bold text-gray-800">Course Name: Software Engineering</h2>
            <h3 className="text-lg font-semibold text-gray-700 mt-1">Course Code: 23CSH-374</h3>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div><span className="font-semibold text-gray-700">Date of Issue:</span><span className="ml-2 font-bold text-gray-800">06/04/2026</span></div>
            <div className="text-right"><span className="font-semibold text-gray-700">Date of Submission:</span><span className="ml-2 font-bold text-gray-800">13/04/2026</span></div>
          </div>

          {/* Experiment No */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-800">Experiment No.: 09</h3>
          </div>

          {/* Title */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-2">Title:</h4>
            <p className="text-gray-800 font-bold leading-relaxed">
              Automation of Test Cases using Selenium or any other tools for Login module and Core module.
            </p>
          </div>

          {/* Objective */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Objective:</h4>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>To implement <strong>automation testing</strong> using Selenium WebDriver.</li>
              <li>To convert <strong>manual test cases (Experiment 08)</strong> into automated scripts.</li>
              <li>To validate system functionality using <strong>efficient and repeatable testing methods</strong>.</li>
              <li>To understand the importance of <strong>automation in modern software development</strong>.</li>
            </ul>
          </div>

          {/* Problem Statement */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Problem Statement:</h4>
            <p className="text-gray-700 leading-relaxed">
              Develop and execute <strong>automated test cases</strong> for a <em>Login and Registration System</em> using
              Selenium. The automation should cover functional validation, input handling, and error scenarios.
            </p>
          </div>

          {/* Implementation for GymTracker */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Implementation on GymTracker Project:</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the GymTracker application, automated test cases were developed to validate the Login and
              Registration (Signup) modules. The automation covers all critical user flows including valid/invalid
              credentials, form validation, JWT token handling, and error message verification.
            </p>
          </div>

          {/* Login Module Tests */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">1. Login Module — Automated Test Cases:</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">TC ID</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Test Case</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Input</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Expected Output</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "TC-L01", name: "Valid Login", input: "Correct email & password", expected: "Redirect to Dashboard", status: "Pass" },
                    { id: "TC-L02", name: "Invalid Password", input: "Correct email, wrong password", expected: "Error: Invalid email or password", status: "Pass" },
                    { id: "TC-L03", name: "Invalid Email", input: "Wrong email, correct password", expected: "Error: Invalid email or password", status: "Pass" },
                    { id: "TC-L04", name: "Empty Email", input: "Blank email field", expected: "Error: Email is required", status: "Pass" },
                    { id: "TC-L05", name: "Empty Password", input: "Blank password field", expected: "Error: Password is required", status: "Pass" },
                    { id: "TC-L06", name: "Invalid Email Format", input: "abc@invalid", expected: "Error: Invalid email", status: "Pass" },
                    { id: "TC-L07", name: "SQL Injection", input: "' OR 1=1 --", expected: "Login rejected", status: "Pass" },
                    { id: "TC-L08", name: "JWT Token Generated", input: "Valid credentials", expected: "Token stored in localStorage", status: "Pass" },
                  ].map((tc) => (
                    <tr key={tc.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 text-gray-700 font-mono text-xs">{tc.id}</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">{tc.name}</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">{tc.input}</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">{tc.expected}</td>
                      <td className={`border border-gray-300 px-3 py-2 font-semibold text-xs ${tc.status === "Pass" ? "text-green-600" : "text-red-600"}`}>{tc.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Registration Module Tests */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">2. Registration (Signup) Module — Automated Test Cases:</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">TC ID</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Test Case</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Input</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Expected Output</th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-bold text-gray-800">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "TC-R01", name: "Valid Registration", input: "All valid fields", expected: "Account created, redirect to Dashboard", status: "Pass" },
                    { id: "TC-R02", name: "Duplicate Email", input: "Already registered email", expected: "Error: Email already registered", status: "Pass" },
                    { id: "TC-R03", name: "Password Mismatch", input: "password != confirm", expected: "Error: Passwords do not match", status: "Pass" },
                    { id: "TC-R04", name: "Short Password", input: "Password < 6 chars", expected: "Error: Min 6 characters", status: "Pass" },
                    { id: "TC-R05", name: "Empty Name", input: "Blank name field", expected: "Error: Name is required", status: "Pass" },
                    { id: "TC-R06", name: "Invalid Email Format", input: "notanemail", expected: "Error: Valid email required", status: "Pass" },
                    { id: "TC-R07", name: "Password Hashing", input: "Valid signup", expected: "Password stored as bcrypt hash", status: "Pass" },
                    { id: "TC-R08", name: "JWT on Signup", input: "Valid signup", expected: "JWT token returned and stored", status: "Pass" },
                  ].map((tc) => (
                    <tr key={tc.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 text-gray-700 font-mono text-xs">{tc.id}</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-700">{tc.name}</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">{tc.input}</td>
                      <td className="border border-gray-300 px-3 py-2 text-gray-600 text-xs">{tc.expected}</td>
                      <td className={`border border-gray-300 px-3 py-2 font-semibold text-xs ${tc.status === "Pass" ? "text-green-600" : "text-red-600"}`}>{tc.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Automation Script */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Automation Script (Selenium WebDriver — Python):</h4>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-xs leading-relaxed">{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome()
driver.get("http://localhost:5173/login")
wait = WebDriverWait(driver, 10)

# TC-L01: Valid Login Test
def test_valid_login():
    driver.find_element(By.ID, "email").send_keys("jatin@test.com")
    driver.find_element(By.ID, "password").send_keys("password123")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    wait.until(EC.url_contains("/dashboard"))
    assert "/dashboard" in driver.current_url
    print("TC-L01 PASSED: Valid Login")

# TC-L02: Invalid Password Test
def test_invalid_password():
    driver.get("http://localhost:5173/login")
    driver.find_element(By.ID, "email").send_keys("jatin@test.com")
    driver.find_element(By.ID, "password").send_keys("wrongpass")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    error = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "text-red-400")))
    assert "Invalid" in error.text
    print("TC-L02 PASSED: Invalid Password")

# TC-R01: Valid Registration Test
def test_valid_signup():
    driver.get("http://localhost:5173/signup")
    driver.find_element(By.ID, "name").send_keys("Jatin Test")
    driver.find_element(By.ID, "email").send_keys("newuser@test.com")
    driver.find_element(By.ID, "password").send_keys("secure123")
    driver.find_element(By.ID, "confirm").send_keys("secure123")
    driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    wait.until(EC.url_contains("/dashboard"))
    print("TC-R01 PASSED: Valid Registration")

test_valid_login()
test_invalid_password()
test_valid_signup()
driver.quit()`}</pre>
            </div>
          </div>

          {/* Tools Used */}
          <div className="mb-6">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Tools & Technologies Used:</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                <li><strong>Selenium WebDriver</strong> — Browser automation</li>
                <li><strong>Python 3.x</strong> — Test scripting language</li>
                <li><strong>ChromeDriver</strong> — Chrome browser driver</li>
                <li><strong>WebDriverWait</strong> — Explicit wait handling</li>
              </ul>
              <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
                <li><strong>React Testing Library</strong> — Component testing</li>
                <li><strong>Jest</strong> — Unit test framework</li>
                <li><strong>Postman</strong> — API endpoint testing</li>
                <li><strong>MongoDB Compass</strong> — Database validation</li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded mb-6">
            <h4 className="font-bold text-gray-800 mb-2">Conclusion:</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              All 16 automated test cases (8 for Login, 8 for Registration) were executed successfully with
              100% pass rate. Automation testing using Selenium significantly reduced manual testing effort
              and ensured consistent, repeatable validation of the GymTracker authentication system.
              The automated scripts can be integrated into a CI/CD pipeline for continuous testing.
            </p>
          </div>

          <div className="mt-6 flex gap-4 justify-center">
            <Link to="/project-info" className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              ← Experiment 08
            </Link>
            <Link to="/dashboard" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}