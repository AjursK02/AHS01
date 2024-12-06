import React from 'react';
import '../styles/ProjectL01.css'; 
import { Link } from 'react-router-dom';


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.1 }); 


document.querySelectorAll('.section, .project-MGI-container, .intro-section').forEach(section => {
  observer.observe(section);
});

const ProjectMGI = () => {

  return (
    <div className="project-MGI-container">
      <section className="section intro-section">
        <p className="highlighted-text">
          MGI provides an in-depth explanation using reliable sources like textbooks and research papers to provide a foundational understanding.
        </p>
      </section>

      <section className="section">
        <p>
          <strong>Customized Model:</strong> In-depth detailed explanations + Comprehensive understanding of topics.
        </p>
        <div className="try-button-container">
          <Link to="/try-l01" className="try-button">Try MGI</Link>
        </div>
      </section>

      <section className="section why-MGI-section">
        <h3 className="section-heading">Why MGI</h3>
        <div className="tabs">
          <div className="tab">
            <h4>Go-to Guide for Researchers</h4>
            <p>
              MGI integrates research papers, textbooks, and reliable sources for authentic interpretation of content, serving as a mentor for research work.
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
        <h3 className="section-heading">Value Add of MGI</h3>
        <div className="value-list">
          <p>
            90% of students report that AI models provide high-level explanations that detract from a fundamental understanding of topics, which MGI solves with in-depth explanations.
          </p>
          <p>
            Professors expressed that 70% of project and assignment submissions are derived from AI models without understanding the fundamental concepts. The implementation of MGI can restrict the usage of generic AI models.
          </p>
          <p>
            Improvement of teaching pedagogy can be achieved by leveraging the MGI model by researchers and professors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectMGI;
