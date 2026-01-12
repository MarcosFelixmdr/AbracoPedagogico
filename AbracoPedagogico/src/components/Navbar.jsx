// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="logo-mark"></span>
        <span className="logo-text">Abraço pedagógico</span>
      </div>
      <nav className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Início
        </Link>
        <Link
          to="/login"
          className={
            location.pathname === "/login" ? "nav-link primary" : "nav-link"
          }
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
