import React, { useState } from "react";
import "./Chatbox.css";

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  function handleInputChange(event) {
    setNewMessage(event.target.value);
  }

  function handleInputKeyDown(event) {
    if (event.keyCode === 13) {
      // 13 is the key code for "enter"
      event.preventDefault();
      if (newMessage !== "") {
        setMessages([...messages, newMessage]);
        setNewMessage("");
      }
    }
  }
  return (
    <section className="Chatbox">
      <div>
        <h1>Welcome to AI Chat!</h1>
        <div className="message-list">
          {messages.map((message, index) => (
            <div className="Message" key={index}>{message}</div>
          ))}
        </div>
        <div className="InputChatHolder">
          <input
            className="Input"
            type="text"
            placeholder="Type your message here..."
            value={newMessage}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        </div>
      </div>
    </section>
  );
}

export default Chatbox;
