import React from 'react';
import '../styles/ClientStories.css';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.png';

function ClientStories() {
  return (
    <div className="main-container">
      <h1 className="main-title">Client Stories</h1>
      <div className="top-section">
        <div className="image-container">
          <img src={img1} alt="Magazine covers" className="cover-image" />
        </div>
        <div className="text-container">
          <h2 className="story-title">How to win with Gen AI</h2>
          <p className="story-description">
            A powerful new technology can be a game changer, but it can’t stand alone. In this issue of the McKinsey Quarterly, we explore how to make the most of generative AI by smart approaches to talent, partners, and design.
          </p>
          <a href="#read" className="link">Sign up to read</a>
        </div>
      </div>
      <div className="bottom-section">
        <div className="text-container">
          <h2 className="story-title">Think you know today's consumer? Think again.</h2>
          <p className="story-description">
            Despite lingering concerns about inflation and the high cost of living, consumers across all ages and product categories still want to spend—thoughtfully.
          </p>
          <a href="#price" className="link">The price is right</a>
        </div>
        <div className="image-container">
          <img src={img2} alt="People" className="cover-image" />
        </div>
      </div>
      <div className="full-width-section">
        <div className="text-container">
          <h2 className="story-title">Together, we have what it takes</h2>
          <p className="story-description">
            At McKinsey, we don’t just point the way—we help you get where you need to go. From transforming your performance to powering new growth, we turn your ambition into action. We know what it takes. We do it every day.
          </p>
          <a href="#learn" className="link">Learn more</a>
        </div>
        <div className="image-container">
          <img src={img3} alt="Illustration" className="cover-image" />
        </div>
      </div>
    </div>
  );
}

export default ClientStories;
