import React, { useState } from "react";
import "../style/ai.css";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Simulate AI response
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

  function message1() {
    setMessages([
      ...messages,
      { from: "user", text: "What's you business Description?" },
    ]);
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "Frame & Form Designs is a student-run service business that offers printing, layout editing, presentation design, and encoding services to support students’ academic needs.",
        },
      ]);
    }, 1000);
  }

  function message2() {
    setMessages([
      ...messages,
      { from: "user", text: "What's you business Objective?" },
    ]);
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "To provide affordable, creative, and high-quality academic and design services for students.",
        },
      ]);
    }, 1000);
  }

  function message3() {
    setMessages([
      ...messages,
      { from: "user", text: "What's you business Goals?" },
    ]);
    // Simulate AI response
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
  }

  return (
    <>
      {/* Floating button */}
      <div className="chat-circle" onClick={() => setOpen((prev) => !prev)}>
        💬
      </div>

      {/* Chat box */}
      {open && (
        <div className="chat-box">
          {/* Header */}
          <div className="chat-header">🤖 AI Assistant</div>

          {/* Messages */}
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
          {/* Input */}
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
