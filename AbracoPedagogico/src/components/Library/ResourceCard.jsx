function ResourceCard({ resource, isFavorite, onToggleFavorite, onClick }) {
    const getTypeIcon = (type) => {
        switch (type) {
            case "video":
                return "🎥";
            case "podcast":
                return "🎧";
            case "text":
                return "📄";
            default:
                return "📚";
        }
    };

    return (
        <div className="resource-card" onClick={() => onClick(resource.id)}>
            <div className="resource-thumbnail">
                <img src={resource.thumbnail} alt={resource.title} />
                <span className="resource-type">
                    {getTypeIcon(resource.type)} {resource.type}
                </span>
            </div>

            <div className="resource-content">
                <div className="resource-meta">
                    <span className={`difficulty ${resource.difficulty.toLowerCase()}`}>
                        {resource.difficulty}
                    </span>
                    <span className="theme-tag">{resource.theme}</span>
                </div>

                <h3>{resource.title}</h3>

                <div className="resource-footer">
                    <span className="duration">⏱ {resource.duration}</span>
                    <button
                        className={`favorite-btn ${isFavorite ? "active" : ""}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleFavorite(resource.id);
                        }}
                        title="Favoritar"
                    >
                        {isFavorite ? "❤️" : "♡"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ResourceCard;
