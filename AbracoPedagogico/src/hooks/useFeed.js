import { useState, useMemo } from "react";
import { MOCK_POSTS } from "../data/mockData";

export function useFeed() {
    const [posts, setPosts] = useState(MOCK_POSTS);
    const [filters, setFilters] = useState({
        discipline: "",
        level: "",
        region: ""
    });

    const toggleLike = (postId) => {
        setPosts((currentPosts) =>
            currentPosts.map((post) => {
                if (post.id === postId) {
                    const isLiked = post.isLiked;
                    return {
                        ...post,
                        likes: isLiked ? post.likes - 1 : post.likes + 1,
                        isLiked: !isLiked
                    };
                }
                return post;
            })
        );
    };

    const addComment = (postId, commentText) => {
        if (!commentText.trim()) return;

        const newComment = {
            id: Date.now(),
            author: "Você",
            avatar: "https://ui-avatars.com/api/?name=Voce&background=000&color=fff",
            text: commentText
        };

        setPosts((currentPosts) =>
            currentPosts.map((post) => {
                if (post.id === postId) {
                    return {
                        ...post,
                        comments: [...post.comments, newComment]
                    };
                }
                return post;
            })
        );
    };

    const updateFilter = (filterType, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: value
        }));
    };

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesDiscipline = filters.discipline
                ? post.tags.discipline === filters.discipline
                : true;
            const matchesLevel = filters.level
                ? post.tags.level === filters.level
                : true;
            const matchesRegion = filters.region
                ? post.tags.region === filters.region
                : true;

            return matchesDiscipline && matchesLevel && matchesRegion;
        });
    }, [posts, filters]);

    return {
        posts: filteredPosts,
        toggleLike,
        addComment,
        filters,
        updateFilter
    };
}
