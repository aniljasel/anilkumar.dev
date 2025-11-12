import React, { useState, useRef, useEffect } from "react";

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hello! I'm Sora, your AI assistant powered by Anil Kumar.", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = async () => {
        const text = input.trim();
        if (text === "") return;

        // Create the user message object (we'll append locally and also include in history we send)
        const userMessage = { text, sender: "user" };

        // Append user message locally (so UI updates immediately)
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            // Build history to send to server: include existing messages + the new userMessage
            // map your local message shape -> openai roles: user | assistant
            const combined = [...messages, userMessage]; // `messages` is the current state value captured from closure
            // keep only the last N messages to limit size (adjust N as needed)
            const MAX_HISTORY_MESSAGES = 10;
            const recent = combined.slice(-MAX_HISTORY_MESSAGES);

            const historyForApi = recent.map((m) => ({
                role: m.sender === "user" ? "user" : "assistant",
                content: m.text,
            }));

            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || window.location.origin;
            const resp = await fetch(`${apiBaseUrl}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // send both current message and the history (server should accept `history`)
                body: JSON.stringify({ message: text, history: historyForApi }),
            });

            let data = {};
            try { data = await resp.json(); } catch (_) { data = {}; }

            if (!resp.ok) {
                throw new Error(data?.error || `Request failed with status ${resp.status}`);
            }

            const botText = data.reply || "☹️ Sorry, I couldn't generate a response.";
            const botMessage = { text: botText, sender: "bot" };
            setIsTyping(false);
            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                { text: `API Error: ${err?.message || "Please try again later."}`, sender: "bot" },
            ]);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <span>Sora</span>
                <button className="chatbot-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
            </div>

            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}>
                        {msg.text}
                    </div>
                ))}

                {isTyping && (
                    <div className="chat-message bot typing">
                        <span></span><span></span><span></span>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    autoFocus
                />
                <button onClick={handleSend}>➤</button>
            </div>
        </div>
    );
};

export default Chatbot;
