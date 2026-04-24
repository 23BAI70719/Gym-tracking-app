import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, getUser, setToken, setUser, logout as doLogout } from "../utils/auth";
import { authService } from "../services/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(getUser());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      authService.getMe()
        .then(({ data }) => { setUserState(data.user); setUser(data.user); })
        .catch(() => { doLogout(); setUserState(null); })
        .finally(() => setLoading(false));
    } else { setLoading(false); }
  }, []);

  const login = (token, userData) => { setToken(token); setUser(userData); setUserState(userData); };
  const logout = () => { doLogout(); setUserState(null); };
  const refreshUser = async () => {
    try { const { data } = await authService.getMe(); setUserState(data.user); setUser(data.user); } catch {}
  };

  return <AuthContext.Provider value={{ user, loading, login, logout, refreshUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
