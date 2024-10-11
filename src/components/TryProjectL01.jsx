import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/TryProjectL01.css'

const TryProjectL01 = () => {
  const [question, setQuestion] = useState("");
  const myChats = [
    { question: "What is Blockchain?" },
    { question: "What is Quantum Computing?" },
    { question: "How can Neural Network be implemented?" },
    // Add more chats as needed
  ];

  const copyToSearchBox = (id) => {
    const buttonText = document.getElementById(id).textContent;
    setQuestion(buttonText);
  };

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSendClick = () => {
    console.log(question); // You can handle form submission here
  };

  return (
    <div className="bg-[#a2eed0] h-[100vh] flex text-black">
      {/* Left Sidebar */}
      <div className="left bg-[#c5b9cd] w-2/12">
        <button className="w-[90%] py-2 m-2 px-10 space-x-2 border-white border rounded-md flex mx-4 justify-start items-center hover:opacity-70">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>New Chat</span>
        </button>
        <div className="text-xs m-4 mx-8 text-[#31114b]">Today</div>
        <div className="chats-scroll-container" style={{ maxHeight: "630px", overflowY: "auto" }}>
          <div className="chats-container">
            <div className="chats flex flex-col justify-center items-center space-y-2">
              {myChats.map((chat, index) => (
                <div
                  key={index}
                  className="chat space-x-2 opacity-80 w-[90%] px-5 py-2 rounded-md bg-[#FFF8DC] text-[#31114b] cursor-pointer flex justify-start items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>{chat.question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="right1 w-10/12 flex justify-center items-center flex-col">
        <div className="text-center w-full text-4xl font-bold my-10">SOLVUS GPT</div>
        <div className="itemsrow flex py-4 w-[43vw] justify-around">
          {/* Faq buttons */}
          <div className="examples flex flex-col justify-center items-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <div className="py-4">Faqs</div>
            <button
              id="button1"
              onClick={() => copyToSearchBox("button1")}
              className="bg-[#FFF8DC] w-[13vw] text-[#31114b] hover:bg-[#fdd8a0] py-4 px-4 mx-4 my-2 rounded-md"
            >
              What is Blockchain
            </button>
            <button
              id="button2"
              onClick={() => copyToSearchBox("button2")}
              className="bg-[#FFF8DC] w-[13vw] text-[#31114b] hover:bg-[#fdd8a0] py-4 px-4 mx-4 my-2 rounded-md"
            >
              What is Crypto Currency
            </button>
            <button
              id="button3"
              onClick={() => copyToSearchBox("button3")}
              className="bg-[#FFF8DC] w-[13vw] text-[#31114b] hover:bg-[#fdd8a0] py-4 px-4 mx-4 my-2 rounded-md"
            >
              What is Quantum Computing
            </button>
          </div>
          {/* Add more FAQ sections as needed */}
        </div>

        {/* Input Section */}
        <div className="input w-full text-center my-24 flex items-center justify-center flex-col">
          <div className="buttonsvg pl-16 w-[50vw] flex">
            <input
              className="w-full p-4 bg-[#FFF8DC] text-[#31114b] rounded-md"
              placeholder="Send a Message"
              type="text"
              name="text"
              id="questionInput"
              value={question}
              onChange={handleInputChange}
            />
            <button id="sendButton" className="relative -left-20 pl-10" onClick={handleSendClick}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryProjectL01;
