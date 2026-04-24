import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const NavLink = ({ to, children, onClick }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link to={to} onClick={onClick} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"}`}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogout = () => { logout(); navigate("/login"); };
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/dashboard" className="flex items-center gap-2">
          <span className="text-2xl">🏋️</span>
          <span className="text-white font-bold text-lg hidden sm:block">GymTracker</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/add-workout">Add Workout</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/project-info">
            <span className="flex items-center gap-1">📄 Project Info</span>
          </NavLink>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <span className="text-gray-400 text-sm">Hi, <span className="text-white font-medium">{user?.name?.split(" ")[0]}</span></span>
          <button onClick={handleLogout} className="btn-secondary text-sm py-1.5 px-3">Logout</button>
        </div>
        <button className="md:hidden text-gray-400 hover:text-white p-2" onClick={() => setOpen(!open)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-3 space-y-1">
          <NavLink to="/dashboard" onClick={() => setOpen(false)}>Dashboard</NavLink>
          <NavLink to="/add-workout" onClick={() => setOpen(false)}>Add Workout</NavLink>
          <NavLink to="/history" onClick={() => setOpen(false)}>History</NavLink>
          <NavLink to="/project-info" onClick={() => setOpen(false)}>📄 Project Info</NavLink>
          <div className="pt-2 border-t border-gray-800 flex items-center justify-between">
            <span className="text-gray-400 text-sm">Hi, {user?.name?.split(" ")[0]}</span>
            <button onClick={handleLogout} className="btn-secondary text-sm py-1.5 px-3">Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
}