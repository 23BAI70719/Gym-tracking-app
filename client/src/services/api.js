import axios from "axios";
import { getToken, logout } from "../utils/auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: { "Content-Type": "application/json" }
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (error) => {
    if (error.response?.status === 401) { logout(); window.location.href = "/login"; }
    return Promise.reject(error);
  }
);

export const authService = {
  signup: (d) => api.post("/auth/signup", d),
  login: (d) => api.post("/auth/login", d),
  getMe: () => api.get("/auth/me"),
  updateProfile: (d) => api.put("/auth/profile", d),
};

export const workoutService = {
  create: (d) => api.post("/workouts", d),
  getAll: (p) => api.get("/workouts", { params: p }),
  delete: (id) => api.delete(`/workouts/${id}`),
  getStats: () => api.get("/workouts/stats"),
};

export default api;
