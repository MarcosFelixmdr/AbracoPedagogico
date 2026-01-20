import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <Link to="/" className="logo-text">
            Abraço Pedagógico
          </Link>
        </div>
        <nav className="navbar-links">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Início
          </Link>
          <Link
            to="/comunidade"
            className={
              location.pathname === "/comunidade"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Comunidade
          </Link>
          <Link
            to="/biblioteca"
            className={
              location.pathname === "/biblioteca"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Biblioteca
          </Link>
          <Link
            to="/acolhimento"
            className={
              location.pathname === "/acolhimento"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Acolhimento
          </Link>
          <Link
            to="/login"
            className={
              location.pathname === "/login"
                ? "btn primary"
                : "btn primary"
            }
            style={{ marginLeft: "0.5rem", padding: "0.5rem 1.2rem", fontSize: "0.9rem" }}
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
