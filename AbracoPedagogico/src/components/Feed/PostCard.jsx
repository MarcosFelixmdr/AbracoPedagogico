import { useState } from "react";
import CommentSection from "./CommentSection";

function PostCard({ post, onLike, onAddComment }) {
    const [showComments, setShowComments] = useState(false);

    return (
        <div className="post-card">
            <div className="post-header">
                <img src={post.avatar} alt={post.author} className="avatar" />
                <div className="post-info">
                    <h3>{post.author}</h3>
                    <span className="post-role">{post.role}</span>
                    <span className="post-time">{post.time}</span>
                </div>
                <div className="post-tags">
                    <span className="tag">{post.tags.discipline}</span>
                    <span className="tag">{post.tags.region}</span>
                </div>
            </div>

            <p className="post-content">{post.content}</p>

            <div className="post-actions">
                <button
                    className={`action-btn ${post.isLiked ? "liked" : ""}`}
                    onClick={() => onLike(post.id)}
                >
                    <span className="icon">♥</span> {post.likes} Curtidas
                </button>
                <button
                    className="action-btn"
                    onClick={() => setShowComments(!showComments)}
                >
                    <span className="icon">💬</span> {post.comments.length} Comentários
                </button>
            </div>

            {showComments && (
                <CommentSection
                    comments={post.comments}
                    onAddComment={(text) => onAddComment(post.id, text)}
                />
            )}
        </div>
    );
}

export default PostCard;
