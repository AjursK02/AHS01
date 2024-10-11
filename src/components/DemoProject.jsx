import React from "react";
import "../styles/DemoProject.css";

const DemoProject = () => {
  return (
    <div className="demo-project-container">
      <div className="demo-project-background">
        <h2 className="demo-title">Demo Product</h2>
        <p className="demo-description">
          The L01 model is a conversational AI model where users can get detailed explanations with an organized structure.
        </p>
        <a href="https://your-web-app-link.com" className="demo-link" target="_blank" rel="noopener noreferrer">
          Link to Web App
        </a>
      </div>
    </div>
  );
};

export default DemoProject;