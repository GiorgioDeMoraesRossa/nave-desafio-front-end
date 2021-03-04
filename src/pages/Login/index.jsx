import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import "./styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useContext(AuthContext);

  async function handleSubmit() {
    if (email !== "" && password !== "") {
      await Login({ email, password });
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
        <button onClick={handleSubmit}>Entrar</button>
      </div>
    </div>
  );
}
