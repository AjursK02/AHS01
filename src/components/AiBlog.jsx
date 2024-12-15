import React from 'react';
import { Link } from 'react-router-dom';
import EmailSubscription from './EmailSubscription';
import blogPosts from '../data/blogPosts.json';
import { FaCalendarAlt } from 'react-icons/fa';
import '../styles/AiBlog.css';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';

const images = {
  'assets/img1.jpeg': img1,
  'assets/img2.jpeg': img2,
};

const AiBlog = () => {
  // Sort posts by date
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container">
      <main>
        <h1 className="top">New at Ajurs Insight Blog</h1>
        <p className="top">
          A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.
        </p>

        {/* Grid layout */}
        <div className="blog-grid">
          {sortedPosts.map((post, index) => (
            <React.Fragment key={post.id}>
              {/* Inject Email Subscription at position 2 */}
              {index === 2 && (
                <div className="email-subscription">
                  <EmailSubscription />
                </div>
              )}
              <div className="blog-post">
                <Link to={`/ai-blog/${post.id}`}>
                  <img src={images[post.image]} alt={post.title} />
                  <div className="blog-post-content">
                    <h3>{post.title}</h3>
                    <p className="date">
                      <FaCalendarAlt /> {post.date}
                    </p>
                    <button className="read-more">Read More</button>
                  </div>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AiBlog;
