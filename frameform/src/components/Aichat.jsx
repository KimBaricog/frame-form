import React, { useState, useEffect } from "react";
import "../style/ai.css";
import Aiimg from "../assets/ai.png";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "Sorry! Our AI assistant doesn’t support this feature yet. We’re working on it!",
        },
      ]);
    }, 1000);
  };

  // Predefined messages
  const message1 = () => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: "What's your business description?" },
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "Frame & Form Designs is a student-run service business that offers printing, layout editing, presentation design, and encoding services to support students’ academic needs.",
        },
      ]);
    }, 1000);
  };

  const message2 = () => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: "What's your business objective?" },
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "To provide affordable, creative, and high-quality academic and design services for students.",
        },
      ]);
    }, 1000);
  };

  const message3 = () => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: "What are your business goals?" },
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: `- Help students complete academic requirements efficiently
- Maintain service quality
- Expand services as demand grows`,
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating AI icon */}
      <div className="chat-circle" onClick={handleOpen}>
        <img src={Aiimg} alt="AI Chat" />
      </div>

      {/* Chat box */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">AI Assistant</div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.from === "ai" ? "ai" : "user"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="set-message">
            <button onClick={message1}>Business Description</button>
            <button onClick={message2}>Business Objective</button>
            <button onClick={message3}>Business Goals</button>
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
