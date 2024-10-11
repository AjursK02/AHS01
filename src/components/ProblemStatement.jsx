import React from 'react';
import '../styles/ProblemStatement.css';

const ProblemStatement = () => {
  return (
    <div className="problem-statement-container">
      <div className="problem-statement-content">
        <h2 className="problem-title">Problem Statement</h2>
        <p className="problem-description">
          90% of AI models are interpreted with generic sources.
          <br />
          What if AI models provided tailored responses to users, referencing reliable sources?
        </p>
      </div>
    </div>
  );
};

export default ProblemStatement;