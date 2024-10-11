import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import DemoProject from './components/DemoProject';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CookiesPolicy from './components/CookiesPolicy';
import ProblemStatement from './components/ProblemStatement';
import BlogDisp from './components/BlogDisp';
import AiBlog from './components/AiBlog';
import BlogDetail from './components/BlogDetail'; // Import your BlogDetail component
import ProjectL01 from './components/ProjectL01';
import TryProjectL01 from './components/TryProjectL01';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
          <Route path="/ai-blog/:id" element={<BlogDetail />} /> {/* Dynamic route for blog details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
