import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/api";
import { useAuth } from "../context/AuthContext";
import FormInput from "../components/FormInput";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.password) e.password = "Password is required";
    return e;
  };

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); setErrors({ ...errors, [e.target.name]: "" }); setApiError(""); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    try { const { data } = await authService.login(form); login(data.token, data.user); navigate("/dashboard"); }
    catch (err) { setApiError(err.response?.data?.message || "Login failed."); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8"><div className="text-5xl mb-3">🏋️</div><h1 className="text-3xl font-bold text-white">GymTracker</h1><p className="text-gray-400 mt-2">Sign in to your account</p></div>
        <div className="card">
          {apiError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg px-4 py-3 mb-5 text-sm">{apiError}</div>}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <FormInput label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
            <FormInput label="Password" id="password" name="password" type="password" value={form.password} onChange={handleChange} error={errors.password} placeholder="••••••••" />
            <button type="submit" disabled={loading} className="btn-primary w-full flex items-center justify-center gap-2">
              {loading ? <><div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Signing in...</> : "Sign In"}
            </button>
          </form>
          <p className="text-center text-gray-400 text-sm mt-5">Don&apos;t have an account? <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}
