import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import SignIn from './SignIn';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const closeDropdown = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Handle clicks outside dropdown and menu to close them
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar')) {
        closeDropdown();
      }
    };

    // Detect scroll to add sticky effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <a href='/'><img src={logo} alt="logo" className="logo"  /></a>
        <span className="brand-name"><a href="/">Ajurs Insights</a></span>
      </div>

      {/* Hamburger menu for mobile */}
      <button className="hamburger" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <div className={`navbar-center ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="desktop-menu">
          <ul className="nav-links">
            <Link to="/ProjectL01" onClick={closeDropdown}>
              <li>MGI</li>
            </Link>
            <Link to="/AiBlog" onClick={closeDropdown}>
              <li>AI Blog</li>
            </Link>
            <Link to="/AboutPage" onClick={closeDropdown}>
              <li>About</li>
            </Link>
          </ul>
        </div>

        <div className="desktop-actions">
          <ul className="actions">
            <li href="#" onClick={toggleSignIn}>Sign In |</li>
            <li href="#subscribe">Subscribe |</li>
            <a href="#search">
              <li className="search-icon" onClick={toggleSearch}>
                <i className="fas fa-search"></i>
              </li>
            </a>
            {searchOpen && (
              <input
                type="text"
                className={`search-bar ${searchOpen ? 'open' : ''}`}
                placeholder="Search..."
              />
            )}
          </ul>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <Link to="/ProjectL01" onClick={closeDropdown}>
              <li>MGI</li>
            </Link>
            <Link to="/AiBlog" onClick={closeDropdown}>
              <li>AI Blog</li>
            </Link>
            <Link to="/AboutPage" onClick={closeDropdown}>
              <li>About</li>
            </Link>
            <li href="#" onClick={toggleSignIn}>Sign In |</li>
            <li href="#subscribe">Subscribe |</li>
            <a href="#search">
              <li className="search-icon && navbar__search-container" onClick={toggleSearch}>
                <i className="fas fa-search"></i>
              </li>
            </a>
            {searchOpen && (
              <input
                type="text"
                className={`search-bar ${searchOpen ? 'open' : ''}`}
                placeholder="Search..."
              />
            )}
          </ul>
        </div>
      </div>

      {/* Sign In Modal */}
      {showSignIn && <SignIn onClose={closeSignIn} />}
    </nav>
  );
};

export default Navbar;
