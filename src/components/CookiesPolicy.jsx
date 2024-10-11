import React, { useState, useEffect } from 'react';
import '../styles/CookiesPolicy.css';

const CookiesPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  // useEffect to check if cookies have been accepted
  useEffect(() => {
    const acceptedCookies = localStorage.getItem('acceptedCookies');
    console.log('Accepted Cookies:', acceptedCookies); // Debugging line
    if (acceptedCookies !== 'true') {
      setIsVisible(true);
    }
  }, []);

  // Function to handle cookies acceptance
  const acceptCookies = () => {
    console.log('Cookies accepted'); // Debugging line
    localStorage.setItem('acceptedCookies', 'true');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="cookies-policy">
        <p>
          At Ajur's Insight, we utilize cookies to enhance your browsing experience and provide tailored content. By continuing to browse our site, you consent to our use of cookies. To learn more, read our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
        <button onClick={acceptCookies}>Accept</button>
      </div>
    )
  );
};

export default CookiesPolicy;
