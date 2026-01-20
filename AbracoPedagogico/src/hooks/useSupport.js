import { useState, useEffect } from "react";
import { MOTIVATIONAL_QUOTES } from "../data/mockData";

export function useSupport() {
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [quote, setQuote] = useState("");

    useEffect(() => {
        const randomQuote =
            MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
        setQuote(randomQuote);
    }, []);

    const connectToVolunteer = () => {
        setIsTyping(true);
        setTimeout(() => {
            setIsConnected(true);
            setIsTyping(false);
            setMessages([
                {
                    id: 1,
                    sender: "volunteer",
                    text: "Olá! Sou um voluntário do Abraço Pedagógico. Estou aqui para te ouvir. Como você está se sentindo hoje?"
                }
            ]);
        }, 2000);
    };

    const sendMessage = (text) => {
        const newUserMsg = { id: Date.now(), sender: "user", text };
        setMessages((prev) => [...prev, newUserMsg]);
        setIsTyping(true);
        setTimeout(() => {
            const response =
                "Entendo o que você diz. É muito importante colocar isso para fora. Quer me contar mais sobre esse sentimento?";
            const newVolMsg = { id: Date.now() + 1, sender: "volunteer", text: response };
            setMessages((prev) => [...prev, newVolMsg]);
            setIsTyping(false);
        }, 3000);
    };

    return {
        messages,
        isConnected,
        isTyping,
        connectToVolunteer,
        sendMessage,
        quote
    };
}
