import React, { useState, useEffect } from 'react';
import '../styles/SignIn.css';
import { auth, googleProvider, signInWithPopup, db, collection, addDoc } from '../firebaseConfig'; 
import googleIcon from '../assets/google-icon.png';
import appleIcon from '../assets/apple-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';

const SignIn = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required.');
      return;
    }

    try {
      await addDoc(collection(db, 'subscribers'), {
        email,
        timestamp: new Date(),
      });
      setSuccess('Thank you for subscribing!');
      setEmail('');
      setError('');
    } catch (error) {
      console.error('Error adding document: ', error);
      setError('Failed to subscribe. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Google sign-in result:', result);
    } catch (error) {
      console.error('Error during Google sign-in:', error);
    }
  };

  const handleAppleSignIn = () => {
    window.location.href = 'https://appleid.apple.com/auth/authorize?...'; 
  };

  const handleLinkedInSignIn = () => {
    // const clientId = 'YOUR_CLIENT_ID';
    // const redirectUri = 'YOUR_REDIRECT_URI';
    // const state = 'YOUR_RANDOM_STATE';
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?...`;
  };

  return (
    <div className="modal">
      <div className="modal-content glass-effect">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Sign in or Create an account</h2>
        <p>If you have an account, your password will be requested</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit" className="continue-button">Continue</button>
        </form>
        <div className="social-login">
          <button type="button" className="social-button google" onClick={handleGoogleSignIn}>
            <img src={googleIcon} alt="Google icon" /> Continue with Google
          </button>
          <button type="button" className="social-button apple" onClick={handleAppleSignIn}>
            <img src={appleIcon} alt="Apple icon" /> Continue with Apple
          </button>
          <button type="button" className="social-button linkedin" onClick={handleLinkedInSignIn}>
            <img src={linkedinIcon} alt="LinkedIn icon" /> Continue with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
