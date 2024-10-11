import React from 'react';
import '../styles/ProjectL01.css'; // Ensure you have a CSS file for custom styles
import { Link } from 'react-router-dom';


// Function to observe elements and add 'in-view' class when in viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // Stop observing once it's in view
    }
  });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Selecting all sections and applying observer
document.querySelectorAll('.section, .project-l01-container, .intro-section').forEach(section => {
  observer.observe(section);
});

const ProjectL01 = () => {

  return (
    <div className="project-l01-container">
      <section className="section intro-section">
        <p className="highlighted-text">
          L01 provides an in-depth explanation using reliable sources like textbooks and research papers to provide a foundational understanding.
        </p>
      </section>

      <section className="section">
        <p>
          <strong>Customized Model:</strong> In-depth detailed explanations + Comprehensive understanding of topics.
        </p>
        <div className="try-button-container">
          <Link to="/try-l01" className="try-button">Try Project L01</Link>
        </div>
      </section>

      <section className="section why-l01-section">
        <h3 className="section-heading">Why L01</h3>
        <div className="tabs">
          <div className="tab">
            <h4>Go-to Guide for Researchers</h4>
            <p>
              L01 integrates research papers, textbooks, and reliable sources for authentic interpretation of content, serving as a mentor for research work.
            </p>
          </div>
          <div className="tab">
            <h4>High-Level Explanations are Overrated</h4>
            <p>
              Students need a foundational understanding of topics with references to standard curriculum.
            </p>
          </div>
        </div>
      </section>

      <section className="section value-add-section">
        <h3 className="section-heading">Value Add of L01</h3>
        <div className="value-list">
          <p>
            90% of students report that AI models provide high-level explanations that detract from a fundamental understanding of topics, which L01 solves with in-depth explanations.
          </p>
          <p>
            Professors expressed that 70% of project and assignment submissions are derived from AI models without understanding the fundamental concepts. The implementation of L01 can restrict the usage of generic AI models.
          </p>
          <p>
            Improvement of teaching pedagogy can be achieved by leveraging the L01 model by researchers and professors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectL01;
