import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useContext(AuthContext);

  function handleSubmit() {
    // if (escreveu email e senha)
    Login(email);
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <img src="/logo.svg" alt="Logo da Nave.rs" />
        <label>E-mail</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <label>Senha</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button onClick={handleSubmit}>Entrar</button>
      </div>
    </div>
  );
}
