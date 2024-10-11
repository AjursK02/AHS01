import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogPosts.json';
import '../styles/BlogDetail.css';

import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';

const images = {
  'assets/img1.jpeg': img1,
  'assets/img2.jpeg': img2,
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-detail">
        <h1>{post.title}</h1>
        <p className="blog-post-date">{post.date}</p>
        <img src={images[post.image]} alt={post.title} className="featured-image" />
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>

      {/* Grid for related blog posts */}
      <h2 className="related-posts-title">Related Posts</h2>
      <div className="blog-grid">
        {blogPosts.filter(relatedPost => relatedPost.id !== post.id).map((relatedPost) => (
          <div className="blog-post" key={relatedPost.id}>
            <Link to={`/ai-blog/${relatedPost.id}`}> {/* Link to the related post */}
              <img src={relatedPost.image} alt={relatedPost.title} />
              <h3>{relatedPost.title}</h3>
              <p className="date">{relatedPost.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
