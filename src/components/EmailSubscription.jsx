import React, { useState } from 'react';
import { db, collection, addDoc } from '../firebaseConfig'; // Adjust path as needed
import '../styles/EmailSubscription.css'; // Import the CSS file

const EmailSubscription = ({ className }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required.');
      return;
    }

    try {
      await addDoc(collection(db, 'subscribers'), {
        email,
        timestamp: new Date()
      });
      setSuccess('Thank you for subscribing!');
      setEmail('');
      setError(''); // Clear any previous error messages
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Failed to subscribe. Please try again.');
    }
  };

  return (
    <div className={`subscription-container ${className}`}>
      <h2 className="subscription-title">Never miss a story</h2>
      <p className="subscription-description">Stay updated about AjursInsight news as it happens.</p>
      <form onSubmit={handleSubmit} className="subscription-form">
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <div className="input-container">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            required
          />
          <button
            type="submit"
            className="subscribe-button"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailSubscription;
