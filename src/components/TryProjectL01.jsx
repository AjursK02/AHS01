import '../styles/TryProjectL01.css'
import React, { useState } from 'react';
import gptLogo from '../assets/gptLogo.png';
import addBtn from '../assets/add-30.svg';
import msgIcon from '../assets/message.svg';
import rocket from '../assets/rocket.svg'; 
import sendBtn from '../assets/send.svg';
import userIcon from '../assets/user-icon.png';
import gptImgLogo from '../assets/gptLogo.png';
import { sendMsgToOpenAI } from './openai';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';

const TryProjectL01 = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I'm MGI. Any query answered instantly.",
      isBot: true,
    }
  ]);
  const [chatHistory, setChatHistory] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSummarizeChecked, setIsSummarizeChecked] = useState(false);
  const [isElaborateChecked, setIsElaborateChecked] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: "Thinking...", isBot: true }
    ]);
    setInput("");
    setIsSummarizeChecked(false);
    setIsElaborateChecked(false);

    const res = await sendMsgToOpenAI(input);

    setMessages(prevMessages =>
      prevMessages.map((msg, i) =>
        i === prevMessages.length - 1 ? { text: res, isBot: true } : msg
      )
    );
  };
  
  const handleNewChat = () => {
    if (messages.length > 1) {
      setChatHistory([ 
        ...chatHistory,
        {
          query: messages[messages.length - 2].text,
          reply: messages[messages.length - 1].text,
          id: Date.now()
        }
      ]);
    }
    setMessages([ 
      {
        text: "Hi, I'm MGI. Any query answered instantly.",
        isBot: true
      }
    ]);
    setInput("");
    setIsSummarizeChecked(false);
    setIsElaborateChecked(false);
  };

  const handleQueryClick = (chat) => {
    setMessages([
      { text: chat.query, isBot: false },
      { text: chat.reply, isBot: true }
    ]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCheckboxChange = (type) => {
    const textToAdd = type === "summarize" ? "summarize it" : "elaborate it";
    const oppositeText = type === "summarize" ? "elaborate it" : "summarize it";

    if (type === "summarize") {
      setIsElaborateChecked(false);
      setIsSummarizeChecked(true);
    } else {
      setIsSummarizeChecked(false);
      setIsElaborateChecked(true);
    }

    let newInput = input.replace(oppositeText, "").trim();
    if (!newInput.includes(textToAdd)) {
      newInput = `${newInput} ${textToAdd}`.trim();
    }

    setInput(newInput);
  };

  

  return (
    <div className="Application">
      <div className={`sideBar ${isSidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            {isSidebarOpen && <span className="brand">MGI</span>}
          </div>

          {isSidebarOpen && (
            <div className="myWorkSection">
              <h3 className="myWorkHeader">My Work</h3>
              <div className="myWorkChats">
                {chatHistory.map((chat) => (
                  <div key={chat.id} className="query">
                    <button onClick={() => handleQueryClick(chat)}>
                      <img src={msgIcon} alt="Query" />
                      {chat.query}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="toggleBtn" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <GridViewIcon className="sidebarIcon" />
          ) : (
            <MenuIcon className="sidebarIcon" />
          )}
        </button>

        {isSidebarOpen && (
          <div className="lowerSide">
            <div className="listItem">
              <img src={rocket} alt="Upgrade" className="listItemsImg" />
              Upgrade to Pro
            </div>
          </div>
        )}
      </div>

      <div className="main">
        <div className="chats">
          {messages.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img
                className="chatImg"
                src={message.isBot ? gptImgLogo : userIcon}
                alt=""
              />
              <p className="txt">{message.text}</p>
            </div>
          ))}
        </div>
        <div className="chatFooter">
          <div className="faqButtons">
            <label className='faqLabel'>
              <input
                type="checkbox"
                className="faqCheckbox"
                checked={isSummarizeChecked}
                onChange={() => handleCheckboxChange("summarize")}
              />
              Summarize
            </label>
            <label className='faqLabel'>
              <input
                type="checkbox"
                className="faqCheckbox"
                checked={isElaborateChecked}
                onChange={() => handleCheckboxChange("elaborate")}
              />
              Elaborate
            </label>
          </div>
          <div className="inp">
            <button className="addBtn" onClick={handleNewChat}>
              <img src={addBtn} alt="Add" />
            </button>
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>MGI can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default TryProjectL01;
