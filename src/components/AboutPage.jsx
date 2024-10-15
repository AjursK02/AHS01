import React from 'react';
import '../styles/AboutPage.css'; // Link to external CSS file

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-content">
        <strong>Building Domain Specific AI Agent for Education & Research</strong>
        <br />
        AjursInsights is a research intelligence platform designed for the research and education sectors. We are reimagining how users discover insights and detailed information from reliable sources effectively.
      </p>
      <h2>WHY US</h2>
      <ul className="about-list">
        <li>
          <strong>Domain-specific AI Agent</strong>
          <br />
          We provide precise information with high-value output.
        </li>
        <li>
          <strong>Streamline Information from Multiple Sources</strong>
          <br />
          We blend data, AI, and domain expertise to obtain tailored responses.
        </li>
        <li>
          <strong>Reducing Costs</strong>
          <br />
          We are implementing reasoning intelligence to reduce costs for users and clients compared to traditional methods.
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
