import React, { useState, useEffect } from 'react'; 
import '../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignIn from "./SignIn";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your logo image

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  const closeSignIn = () => {
    setShowSignIn(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

      if (isDropdownButton) {
        setActiveDropdown((prev) =>
          prev === e.target.closest("[data-dropdown]") ? null : e.target.closest("[data-dropdown]")
        );
      } else {
        setActiveDropdown(null);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <img src={logo} alt="Ajurs Insights & Company" onClick={toggleMobileMenu} className="navbar__logo-img" />
        <Link to="/" className="navbar__logo-link">
          <h1>
            <span className="logo-line1">Ajurs Insights</span>
          </h1>
        </Link>
      </div>
      <nav className={`navbar__nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/P01" className="ai-blog-button">MGI</Link></li>
          <li><Link to="/ai-blog" className="ai-blog-button">AI Blog</Link></li>
          <li><Link to="/about-page" className="ai-blog-button">About</Link></li>
        </ul>
      </nav>
      <div className="navbar__actions">
        <div className="navbar__actions-row">
          <button href="#" onClick={toggleSignIn}>Sign In</button>
          <h3>|</h3>
          <button href="#subscribe" className="subscribe">Subscribe</button>
        </div>
        <div className="navbar__search-container">
          <a href="#search" className="search-icon" onClick={toggleSearch}>
            <i className="fas fa-search"></i>
          </a>
          {searchOpen && (
            <input
              type="text"
              className={`search-bar ${searchOpen ? 'open' : ''}`}
              placeholder="Search..."
            />
          )}
        </div>
      </div>
      {showSignIn && <SignIn onClose={closeSignIn} />}
    </header>
  );
};

export default Navbar;
