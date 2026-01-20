function SupportHero({ quote, onConnect }) {
    return (
        <div className="support-hero">
            <div className="hero-content">
                <h1>Um espaço seguro para você.</h1>
                <p className="hero-subtitle">
                    Aqui você pode compartilhar seus sentimentos, desabafar e encontrar apoio emocional de forma anônima e gratuita.
                </p>

                <div className="quote-container">
                    <p className="quote">"{quote}"</p>
                </div>

                <button className="connect-btn" onClick={onConnect}>
                    Preciso Conversar 💬
                </button>
                <span className="anon-badge">🔒 Atendimento 100% Anônimo</span>
            </div>
        </div>
    );
}

export default SupportHero;
