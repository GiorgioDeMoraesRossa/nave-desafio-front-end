import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import "./styles.css";

export default function Header() {
  const { Logout } = useContext(AuthContext);

  return (
    <header className="header-container">
      <img src="/logo.svg" alt="Logo da Nave.rs" />
      <Link to="/" onClick={Logout}>
        Sair
      </Link>
    </header>
  );
}
