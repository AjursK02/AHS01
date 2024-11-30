import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import DemoProject from './components/DemoProject';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookiesPolicy from './components/CookiesPolicy';
import ProblemStatement from './components/ProblemStatement';
import BlogDisp from './components/BlogDisp';
import AiBlog from './components/AiBlog';
import BlogDetail from './components/BlogDetail'; 
import ProjectL01 from './components/ProjectL01';
import TryProjectL01 from './components/TryProjectL01';
import AboutPage from './components/AboutPage';

const App = () => {
  const location = useLocation();

  const hideNavbarPaths = ["/try-l01"];

  return (
    <div className="App">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <BlogDisp />
            <ProblemStatement />
            <DemoProject />
            <ContactForm />
            <Footer />
            <CookiesPolicy />
          </>
        } />
        <Route path="/ai-blog" element={<AiBlog />} />
        <Route path="/try-l01" element={<TryProjectL01 />} />
        <Route path="/P01" element={<ProjectL01 />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/ai-blog/:id" element={<BlogDetail />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
