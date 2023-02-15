import React, { useState } from "react";
import ChatHistory from "./ChatHistory";
import LogoutButton from "./LogoutButton";

const ChatView = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);

  // TODO: load the chat history for the user and render it on the page
  const fetchHistory = async () => {
    try {
      const response = await fetch("./history");
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
  event.preventDefault();
  // TODO: Send the input to an API to get the response from AI
  fetch(
    "/api/response",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      setOutput(data.response);
      setHistory([...history, { input, output: data.response }]);
      setInput("");
    })
    .catch((error) => {
      console.error(error);
    });


  return (
    <div className="chat-view">
      <div className="left-panel">
        <ChatHistory history={history} />
        <LogoutButton></LogoutButton>
      </div>
      <div className="right-panel">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div className="output">{output}</div>
      </div>
    </div>
  );
};

export default ChatView;}
