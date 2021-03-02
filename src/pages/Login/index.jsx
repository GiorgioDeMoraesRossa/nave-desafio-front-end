import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const { Login } = useContext(AuthContext);

  function handleSubmit() {
    // if (escreveu email e senha)
    Login(email);
  }

  return (
    <div>
      Login
      <input onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
}
