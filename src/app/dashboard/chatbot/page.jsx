// pages/dashboard/chatbot.js
"use client";
import axios from "axios";
import { useState } from "react";

const page = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat", {
        session: "123", // Replace with your session ID
        input: userInput,
      });

      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }

      const data = response.data;
      console.log("Received data:", data);
      console.log("Received Data", response.data);

      const chatItem = {
        user: userInput,
        chatbot: data || "Chatbot response is currently unavailable",
      };

      setChatHistory([...chatHistory, chatItem]);
      setUserInput("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-4 text-center text-3xl font-semibold tracking-wider">
        Help Desk
      </h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className=" flex flex-col">
          <input
            type="text"
            id="userInput"
            name="userInput"
            placeholder="Enter your Query Here"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            className="mr-2 border-b border-gray-300 p-2 "
            required
          />
          <br />
          <button
            type="submit"
            className="mx-auto mt-4 w-1/4 rounded-2xl bg-rgb-yellow px-4 py-2 text-center font-medium text-rgb-green hover:bg-rgb-green hover:text-white"
          >
            Send
          </button>
        </div>
      </form>
      <label
        className="px-2 text-lg font-semibold tracking-wider text-green-950"
        htmlFor=""
      >
        Response
      </label>
      <div id="chatOutput" className="border-b border-gray-300 p-2">
        {chatHistory.map((chatItem, index) => (
          <div key={index} className="mb-2">
            {/* <p className="mb-1">User: {chatItem.user}</p> */}
            <p> {chatItem.chatbot}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
