import React from "react";
import "../styles/DemoProject.css";
import { Link } from 'react-router-dom';

const DemoProject = () => {
  return (
    <div className="demo-project-container">
      <div className="demo-project-background">
        <h2 className="demo-title">Demo Product</h2>
        <p className="demo-description">
          The MGI model is a conversational AI model where users can get detailed explanations with an organized structure.
        </p>
        <Link to="/try-l01" className="demo-link" target="_parent" rel="noopener noreferrer">
          Link to Web App
        </Link>
      </div>
    </div>
  );
};

export default DemoProject;