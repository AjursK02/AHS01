import React from 'react';
import { Link } from 'react-router-dom';
import EmailSubscription from './EmailSubscription';
import blogPosts from '../data/blogPosts.json';
import { FaCalendarAlt } from 'react-icons/fa'; // Importing icons

const AiBlog = () => {
  // Sort blog posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="container">
      <main>
        <h1>New at Ajurs Insight Blog</h1>
        <p>A collection of stories about our people, our capabilities, our research, and the ever-changing face of our firm.</p>

        <div className="grid">
          {sortedPosts.map((post, index) => (
            <div className={`blog-post ${index < 2 ? 'two-column' : ''}`} key={post.id}>
              <Link to={`/ai-blog/${post.id}`}>
                <img src={post.image} alt={post.title} />
                <div className="blog-post-content">
                  <h3>{post.title}</h3>
                  <p className="date">
                    <FaCalendarAlt /> {post.date}
                  </p>
                  <button className="read-more">Read More</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <EmailSubscription />
    </div>
  );
};

export default AiBlog;

