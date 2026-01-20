import { useState, useRef, useEffect } from "react";

function ChatInterface({ messages, onSendMessage, isTyping }) {
    const [inputText, setInputText] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText("");
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-header">
                <div className="chat-status">
                    <span className="status-dot"></span>
                    <span>Conectado com Voluntário</span>
                </div>
            </div>

            <div className="chat-messages">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`message ${msg.sender === "user" ? "user" : "volunteer"}`}
                    >
                        <div className="message-bubble">{msg.text}</div>
                    </div>
                ))}
                {isTyping && (
                    <div className="message volunteer">
                        <div className="message-bubble typing">
                            <span>.</span><span>.</span><span>.</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="chat-input-area">
                <input
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button type="submit" disabled={!inputText.trim()}>
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default ChatInterface;
