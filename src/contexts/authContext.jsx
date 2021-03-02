import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function Login(user) {
    setUser(user);
  }

  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user: user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
