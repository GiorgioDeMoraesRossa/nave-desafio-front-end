import { Link } from "react-router-dom";

import "./styles.css";

export default function Header() {
  return (
    <header className="header-container">
      <img src="/logo.svg" alt="Logo da Nave.rs" />
      <Link to="/">Sair</Link>
    </header>
  );
}
