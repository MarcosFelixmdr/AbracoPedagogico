import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <h1>Um abraço digital para quem cuida de tantas vidas.</h1>
          <p>
            O Abraço pedagógico nasce para enfrentar a solidão docente,
            aproximar a formação da prática e criar uma rede de escuta e apoio
            entre educadores de todo o Brasil.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn primary">
              Começar agora
            </Link>
            <a href="#solucoes" className="btn ghost">
              Ver soluções
            </a>
          </div>
        </div>
        <div className="hero-card">
          <h2>Qual é a dor que queremos acolher?</h2>
          <ul>
            <li>Professores isolados, especialmente em áreas remotas.</li>
            <li>Formação continuada distante da realidade da sala de aula.</li>
            <li>Falta de comunidade, pertencimento e apoio emocional.</li>
          </ul>
          <p>
            Não estamos só codando: estamos construindo um espaço de cuidado
            para quem educa.
          </p>
        </div>
      </section>

      <section id="solucoes" className="section">
        <h2>Nossas propostas de solução</h2>
        <div className="cards-grid">
          <div className="feature-card">
            <h3>Plataforma de apoio entre educadores</h3>
            <p>
              Um espaço para conexão, troca de experiências e construção de
              comunidade entre professores.
            </p>
            <ul>
              <li>Feed de publicações como um mural de ideias e dicas.</li>
              <li>Sistema de comentários e curtidas para interação.</li>
              <li>Filtros por disciplina, região e nível de ensino.</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Biblioteca de formação prática</h3>
            <p>
              Conteúdos curtos, aplicáveis e feitos por professores para
              professores, focados no dia a dia da escola.
            </p>
            <ul>
              <li>Cards com vídeos, textos e podcasts.</li>
              <li>Busca por tema, dificuldade e contexto.</li>
              <li>Área de favoritos e histórico de aprendizado.</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>Espaço de escuta e apoio emocional</h3>
            <p>
              Um ambiente seguro para desabafos, acolhimento e trocas de apoio
              entre educadores.
            </p>
            <ul>
              <li>Chat anônimo entre professores.</li>
              <li>Botão “preciso conversar” que conecta com voluntários.</li>
              <li>Mensagens motivacionais e design acolhedor.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-ods">
        <h2>Contribuição para a ODS 4 (Meta 4.c)</h2>
        <p>
          O Abraço pedagógico contribui para ampliar o número de professores
          qualificados ao facilitar o acesso à formação continuada, reduzir o
          isolamento com redes de apoio e valorizar o educador como protagonista
          da inovação.
        </p>
        <div className="ods-pill">
          <span>ODS 4</span>
          <span>Formação, comunidade e cuidado para quem ensina.</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
