import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-redesigned">
      <section className="hero-modern">
        <div className="hero-content">
          <h1>
            Cuidando de quem <span className="gradient-text">transforma o mundo</span>.
          </h1>
          <p>
            O Abraço Pedagógico é sua rede de apoio, formação e conexão.
            Porque para educar, você também precisa ser acolhido.
          </p>
          <a href="#features" className="btn primary lg">
            Explorar a Plataforma
          </a>
        </div>
      </section>
      <section id="features" className="features-portal-section">
        <h2>O que você encontra aqui</h2>
        <div className="portal-grid">
          <Link to="/comunidade" className="portal-card community">
            <div className="portal-icon">🤝</div>
            <h3>Comunidade</h3>
            <p>
              Troque experiências, planos de aula e dicas com educadores de todo o Brasil.
            </p>
            <span className="portal-link">Acessar Feed &rarr;</span>
          </Link>
          <Link to="/biblioteca" className="portal-card library">
            <div className="portal-icon">📚</div>
            <h3>Biblioteca Prática</h3>
            <p>
              Conteúdos diretos e aplicáveis: vídeos, textos e podcasts para o seu dia a dia.
            </p>
            <span className="portal-link">Estudar Agora &rarr;</span>
          </Link>
          <Link to="/acolhimento" className="portal-card support">
            <div className="portal-icon">💚</div>
            <h3>Espaço de Acolhimento</h3>
            <p>
              Um ambiente seguro e anônimo para desabafar e cuidar da sua saúde emocional.
            </p>
            <span className="portal-link">Preciso Conversar &rarr;</span>
          </Link>

        </div>
      </section>
      <section className="ods-highlight">
        <div className="ods-badge">ODS 4</div>
        <div className="ods-text">
          <h3>Compromisso com a Educação de Qualidade</h3>
          <p>
            Contribuímos para a meta 4.c: valorização e formação de professores
            para um futuro sustentável.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
