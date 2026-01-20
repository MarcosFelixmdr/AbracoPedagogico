import { useFeed } from "../hooks/useFeed";
import FilterBar from "../components/Feed/FilterBar";
import PostCard from "../components/Feed/PostCard";

function FeedPage() {
    const { posts, filters, updateFilter, toggleLike, addComment } = useFeed();

    return (
        <div className="feed-page">
            <div className="feed-header">
                <h1>Comunidade de Educadores</h1>
                <p>Troque experiências, tire dúvidas e conecte-se com colegas.</p>
            </div>

            <div className="feed-layout">
                <aside className="feed-sidebar">
                    <FilterBar filters={filters} onFilterChange={updateFilter} />
                </aside>

                <section className="feed-content">
                    {posts.length === 0 ? (
                        <div className="empty-state">
                            <p>Nenhuma publicação encontrada com esses filtros.</p>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onLike={toggleLike}
                                onAddComment={addComment}
                            />
                        ))
                    )}
                </section>
            </div>
        </div>
    );
}

export default FeedPage;
