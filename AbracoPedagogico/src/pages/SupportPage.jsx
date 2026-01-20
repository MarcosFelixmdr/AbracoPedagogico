import { useSupport } from "../hooks/useSupport";
import SupportHero from "../components/Support/SupportHero";
import ChatInterface from "../components/Support/ChatInterface";

function SupportPage() {
    const {
        quote,
        isConnected,
        isTyping,
        connectToVolunteer,
        sendMessage,
        messages
    } = useSupport();

    return (
        <div className={`support-page ${isConnected ? "chat-active" : ""}`}>
            {!isConnected ? (
                <SupportHero quote={quote} onConnect={connectToVolunteer} />
            ) : (
                <div className="chat-container">
                    <div className="chat-intro-bar">
                        <h2>Espaço de Acolhimento</h2>
                        <button className="close-chat" onClick={() => window.location.reload()}>Encerrar</button>
                    </div>
                    <ChatInterface
                        messages={messages}
                        onSendMessage={sendMessage}
                        isTyping={isTyping}
                    />
                </div>
            )}
        </div>
    );
}

export default SupportPage;
