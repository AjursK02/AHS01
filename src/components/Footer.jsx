import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore methods
import { db } from '../firebaseConfig'; 
import '../styles/Footer.css';
import img from '../assets/ajursLogo.png'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle the subscribe button click
  const handleSubscribe = async () => {
    if (email) {
      try {
        // Add the email to Firestore under a collection named "subscribers"
        await addDoc(collection(db, 'subscribers'), {
          email: email,
          timestamp: new Date()
        });
        setSuccessMessage('You have successfully subscribed!');
        setEmail(''); // Clear the input field after successful subscription
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="footer-container">
      <div className="newsletter-section">
        <div>
          <h2>Join Our Newsletter</h2>
          <p>Keep up to date with everything</p>
        </div>
        <div className="newsletter-input">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="subscribe-btn" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img src={img} alt="Ajurs Insights & Company Logo" />
        </div>

        <div className="footer-contact">
          <a href="mailto:ajursinsights@gmail.com">
            <i className="far fa-envelope"></i> ajursinsights@gmail.com
          </a>
          <a href="tel:+17046202886">
            <i className="fas fa-phone-alt"></i> +1 704 620 2886
          </a>
        </div>

        <div className="footer-social">
          <a href="https://www.linkedin.com/company/ajursinsights/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/AjursInsights">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom-line">
        <p>©2024 Ajurs Insights & Company ® All rights reserved. Privacy Policy</p>
        {/* <a href="#">Privacy Policy</a> */}
      </div>
    </div>
  );
};

export default Footer;
