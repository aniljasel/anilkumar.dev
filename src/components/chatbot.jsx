import React, { useState, useRef, useEffect } from "react";

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { text: "Hello! I'm Anil Kumar, a MERN stack developer. How can I assist you today?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (input.trim() === "") return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            setIsTyping(false);

            const botMessage = {
                text: data.reply || "Sorry, I couldn't generate a response.",
                sender: "bot",
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                { text: "⚠️ API Error! Please try again later.", sender: "bot" },
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
                    <div
                        key={index}
                        className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
                    >
                        {msg.text}
                    </div>
                ))}
                {isTyping && (
                    <div className="chat-message bot typing">
                        <span></span><span></span><span></span>
                    </div>
                )}
                <div ref={messagesEndRef}></div>
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button onClick={handleSend}>➤</button>
            </div>
        </div>
    );
};

export default Chatbot;