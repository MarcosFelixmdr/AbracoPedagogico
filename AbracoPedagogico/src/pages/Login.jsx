import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Entrar no Abraço pedagógico</h1>
        <p>
          Acesse sua conta para participar da comunidade, explorar a biblioteca
          e encontrar apoio.
        </p>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            E-mail institucional
            <input type="email" placeholder="professor@escola.com" required />
          </label>

          <label>
            Senha
            <input type="password" placeholder="Sua senha" required />
          </label>

          <button type="submit" className="btn primary full">
            Entrar
          </button>
        </form>

        <div className="login-extra">
          <p>
            Ainda não tem acesso? Em breve abriremos convites para novas redes
            de escolas.
          </p>
          <Link to="/" className="back-link">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
