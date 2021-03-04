/* Pagina de login, utiliza da funcao do contexto AuthContext para autenticar o usuário */

import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* controle de possiveis erros */
  const [error, setError] = useState(0);

  const { Login } = useContext(AuthContext);

  /* Checa se as informações foram preenchidas, usa o Login do Context e verifica erros */
  async function handleSubmit() {
    if (email !== "" && password !== "") {
      const response = await Login({ email, password });
      setError(response);
    } else {
      alert("Preencha os dois campos!");
    }
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/logo.svg" alt="Logo da Nave.rs" />

        <label htmlFor="email">E-mail</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          id="email"
        />

        <label htmlFor="senha">Senha</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          id="senha"
          type="password"
        />
        {/* se tiver um erro vai ser um desses dois (definido no AuthContext) */}
        {error !== 0 ? (
          <p>
            {error === 400
              ? "Ocorreu um erro. Por favor tente novamente."
              : error === 401
              ? "Email ou senha inválidos."
              : "Erro interno. Por favor tente novamente."}
          </p>
        ) : null}
        <button onClick={handleSubmit}>Entrar</button>
      </div>
    </div>
  );
}
