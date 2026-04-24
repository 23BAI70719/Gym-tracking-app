export const getToken = () => localStorage.getItem("gym_token");
export const setToken = (t) => localStorage.setItem("gym_token", t);
export const removeToken = () => localStorage.removeItem("gym_token");
export const getUser = () => { const u = localStorage.getItem("gym_user"); return u ? JSON.parse(u) : null; };
export const setUser = (u) => localStorage.setItem("gym_user", JSON.stringify(u));
export const removeUser = () => localStorage.removeItem("gym_user");
export const isAuthenticated = () => !!getToken();
export const logout = () => { removeToken(); removeUser(); };
