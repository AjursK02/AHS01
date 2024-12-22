import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import AiBlog from './components/AiBlog';
import BlogDetail from './components/BlogDetail';
import BlogDisp from './components/BlogDisp';
import ContactForm from './components/ContactForm';
import CookiesPolicy from './components/CookiesPolicy';
import DemoProject from './components/DemoProject';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import ProblemStatement from './components/ProblemStatement';
import ProjectL01 from './components/ProjectL01';
import TryProjectL01 from './components/TryProjectL01';

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
        <Route path="/AiBlog" element={<AiBlog />} />
        <Route path="/try-l01" element={<TryProjectL01 />} />
        <Route path="/ProjectL01" element={<ProjectL01 />} />
        <Route path="/AboutPage" element={<AboutPage />} />
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
