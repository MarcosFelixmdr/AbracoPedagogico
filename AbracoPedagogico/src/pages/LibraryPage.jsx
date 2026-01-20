import { useLibrary } from "../hooks/useLibrary";
import LibraryFilters from "../components/Library/LibraryFilters";
import ResourceCard from "../components/Library/ResourceCard";

function LibraryPage() {
    const {
        resources,
        searchQuery,
        setSearchQuery,
        selectedTheme,
        setSelectedTheme,
        selectedDifficulty,
        setSelectedDifficulty,
        favorites,
        toggleFavorite,
        addToHistory,
        showFavoritesOnly,
        setShowFavoritesOnly
    } = useLibrary();

    return (
        <div className="library-page">
            <div className="library-header">
                <h1>Biblioteca de Formação</h1>
                <p>Conteúdos práticos e diretos para o seu dia a dia.</p>
            </div>

            <LibraryFilters
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedTheme={selectedTheme}
                setSelectedTheme={setSelectedTheme}
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
                showFavoritesOnly={showFavoritesOnly}
                setShowFavoritesOnly={setShowFavoritesOnly}
            />

            <div className="library-grid">
                {resources.length === 0 ? (
                    <div className="empty-library">
                        <p>Nenhum conteúdo encontrado com esses filtros.</p>
                    </div>
                ) : (
                    resources.map((resource) => (
                        <ResourceCard
                            key={resource.id}
                            resource={resource}
                            isFavorite={favorites.includes(resource.id)}
                            onToggleFavorite={toggleFavorite}
                            onClick={addToHistory}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default LibraryPage;
