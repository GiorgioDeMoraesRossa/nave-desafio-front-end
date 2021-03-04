/* 
Contexto de autenticação, controla o login e logout de um usuário, e provê as 
informações para a aplicação
*/
import { createContext, useState, useEffect } from "react";
import api from "../services/api";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");

  // procura no localStorage por um token e se tiver seta o header da api
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      api.defaults.headers.common["Authorization"] = storedToken;
      setToken(storedToken);
    }
  }, []);

  /* chama API com dados passsados, seta header auth */
  async function Login(user) {
    const loginResponse = await api
      .post("/users/login", user)
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.status === 400) {
          // bad resquest => problema de escrita ou request
          return 400;
        } else if (error.response.status === 401) {
          // Unauthorized => senha ou email incorretos
          return 401;
        }
        // outros
        return 500;
      });

    // testa se deu certo e seta token e header
    if (loginResponse.token) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${loginResponse.token}`;

      setToken(`Bearer ${loginResponse.token}`);
      localStorage.setItem("token", `Bearer ${loginResponse.token}`);
      return 200;
    }
    return loginResponse;
  }

  /* Limpa storage, header e estado do contexto */
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
