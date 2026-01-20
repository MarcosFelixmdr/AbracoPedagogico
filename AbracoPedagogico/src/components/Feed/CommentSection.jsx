import { useState } from "react";

function CommentSection({ comments, onAddComment }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAddComment(text);
            setText("");
        }
    };

    return (
        <div className="comment-section">
            <div className="comments-list">
                {comments.length === 0 && (
                    <p className="no-comments">Seja o primeiro a comentar!</p>
                )}
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <img src={comment.avatar} alt={comment.author} className="comment-avatar" />
                        <div className="comment-content">
                            <strong>{comment.author}</strong>
                            <p>{comment.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="comment-form">
                <input
                    type="text"
                    placeholder="Escreva um comentário..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" disabled={!text.trim()}>
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default CommentSection;
