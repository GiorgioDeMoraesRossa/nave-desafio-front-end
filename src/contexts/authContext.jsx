import { createContext, useState, useEffect } from "react";
import api from "../services/api";
export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  // procura no localStorage por um token
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      api.defaults.headers.common["Authorization"] = storedToken;
      setToken(storedToken);
    }
  }, []);

  async function Login(user) {
    // chama API com dados passsados, seta header auth
    const loginResponse = await api
      .post("/users/login", user)
      .then((response) => response.data)
      .catch((error) => console.log("Err: ", error.message));

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${loginResponse.token}`;

    setToken(`Bearer ${loginResponse.token}`);
    localStorage.setItem("token", `Bearer ${loginResponse.token}`);
  }

  function Logout() {
    setToken("");
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = "";
  }

  return (
    <AuthContext.Provider value={{ token, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}
