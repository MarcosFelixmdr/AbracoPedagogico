import { useState, useMemo } from "react";
import { MOCK_RESOURCES } from "../data/mockData";

export function useLibrary() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTheme, setSelectedTheme] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [history, setHistory] = useState([]);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
        );
    };

    const addToHistory = (id) => {
        setHistory((prev) => {
            const newHistory = [id, ...prev.filter((hid) => hid !== id)];
            return newHistory.slice(0, 10);
        });
    };

    const filteredResources = useMemo(() => {
        return MOCK_RESOURCES.filter((resource) => {
            const matchesSearch = resource.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesTheme = selectedTheme ? resource.theme === selectedTheme : true;
            const matchesDifficulty = selectedDifficulty
                ? resource.difficulty === selectedDifficulty
                : true;
            const matchesFavorites = showFavoritesOnly
                ? favorites.includes(resource.id)
                : true;

            return (
                matchesSearch && matchesTheme && matchesDifficulty && matchesFavorites
            );
        });
    }, [searchQuery, selectedTheme, selectedDifficulty, showFavoritesOnly, favorites]);

    return {
        resources: filteredResources,
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
    };
}
