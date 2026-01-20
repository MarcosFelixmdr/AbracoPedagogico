import { LIBRARY_THEMES, DIFFICULTIES } from "../../data/mockData";

function LibraryFilters({
    searchQuery,
    setSearchQuery,
    selectedTheme,
    setSelectedTheme,
    selectedDifficulty,
    setSelectedDifficulty,
    showFavoritesOnly,
    setShowFavoritesOnly
}) {
    return (
        <div className="library-filters">
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Buscar por tema ou título..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="search-icon">🔍</span>
            </div>

            <div className="filters-row">
                <div className="filter-select">
                    <select
                        value={selectedTheme}
                        onChange={(e) => setSelectedTheme(e.target.value)}
                    >
                        <option value="">Todos os Temas</option>
                        {LIBRARY_THEMES.map((theme) => (
                            <option key={theme} value={theme}>
                                {theme}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-select">
                    <select
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                    >
                        <option value="">Todas Dificuldades</option>
                        {DIFFICULTIES.map((diff) => (
                            <option key={diff} value={diff}>
                                {diff}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className={`toggle-favorites ${showFavoritesOnly ? "active" : ""}`}
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                >
                    {showFavoritesOnly ? "❤️ Meus Favoritos" : "♡ Meus Favoritos"}
                </button>
            </div>
        </div>
    );
}

export default LibraryFilters;
