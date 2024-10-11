import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas as ThreeCanvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import '../styles/BlogDisp.css';

// const Pushman = ({ onPushComplete, isPushing }) => {
//   const { scene, animations } = useGLTF('/pushman/untitled.glb');
//   const [mixer] = useState(() => new THREE.AnimationMixer(scene));

//   useEffect(() => {
//     if (animations && animations.length) {
//       const action = mixer.clipAction(animations[0]); // Assuming the first animation is the push animation
//       action.setLoop(THREE.LoopOnce); // Make the animation play only once
//       action.clampWhenFinished = true; // Clamp to the last frame after finishing

//       if (isPushing) {
//         action.reset().play(); // Play the animation if isPushing is true
//       }

//       mixer.addEventListener('finished', onPushComplete); // Trigger callback when push is complete

//       return () => {
//         mixer.removeEventListener('finished', onPushComplete); // Cleanup the event listener
//       };
//     }
//   }, [animations, mixer, onPushComplete, isPushing]);

//   useFrame((state, delta) => {
//     mixer.update(delta);
//   });

//   return <primitive object={scene} scale={0.8} position={[-0.25, -2, -1.5]} rotation={[0, -Math.PI / 4, 0]} />;
// };

// const Canvas = ({ onPushComplete, isPushing }) => {
//   return (
//     <ThreeCanvas
//       camera={{ position: [2, 2, 5], fov: 25 }}
//       gl={{ alpha: true }}
//     >
//       <Suspense fallback={null}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Pushman onPushComplete={onPushComplete} isPushing={isPushing} />
//         <OrbitControls enableZoom={false} />
//       </Suspense>
//     </ThreeCanvas>
//   );
// };

const BlogDisp = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);
  const [isPushing, setIsPushing] = useState(false);
  const blogRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const blogData = data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ''), // Remove HTML tags
          link: post.link
        }));
        setBlogs(blogData);
      } catch (error) {
        console.error('Fetch error:', error);
        setBlogs([
          { id: 1, title: 'Blog Post 1', excerpt: 'This is an excerpt for blog post 1.', link: '#' },
          { id: 2, title: 'Blog Post 2', excerpt: 'This is an excerpt for blog post 2.', link: '#' },
          { id: 3, title: 'Blog Post 3', excerpt: 'This is an excerpt for blog post 3.', link: '#' },
        ]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (blogs.length > 0 && !isPushing) {
      const timer = setTimeout(() => {
        setIsPushing(true); // Trigger the push animation
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentBlogIndex, blogs, isPushing]);

  const handlePushComplete = () => {
    setIsPushing(false); // Reset the push state
    setCurrentBlogIndex((prevIndex) => (prevIndex + 1) % blogs.length); // Move to the next blog

    // Trigger blog sliding effect
    if (blogRef.current) {
      blogRef.current.style.transition = 'transform 1s ease-in-out';
      blogRef.current.style.transform = 'translateX(-100%)';
      setTimeout(() => {
        blogRef.current.style.transition = 'none';
        blogRef.current.style.transform = 'translateX(100%)';
        setTimeout(() => {
          blogRef.current.style.transition = 'transform 1s ease-in-out';
          blogRef.current.style.transform = 'translateX(0)';
        }, 100);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className="blogs">
        {blogs.length > 0 && (
          <div
            key={blogs[currentBlogIndex].id}
            className="blog-item"
            ref={blogRef}
            style={{ transform: 'translateX(0)' }}
          >
            <h3>{blogs[currentBlogIndex].title}</h3>
            <p>{blogs[currentBlogIndex].excerpt}</p>
            <a href={blogs[currentBlogIndex].link}>Read More</a>
          </div>
        )}
      </div>
      {/* <div className="canvas-container">
        <Canvas onPushComplete={handlePushComplete} isPushing={isPushing} />
      </div> */}
    </div>
  );
};

export default BlogDisp;
