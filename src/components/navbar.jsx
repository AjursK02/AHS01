import React, { useState, useEffect } from 'react'; // Import useEffect and useState
import '../styles/Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SignIn from "./SignIn";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Declare activeDropdown
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll status

  // const handleDropdownToggle = (dropdownId) => {
  //   setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  // };

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // const closeAllDropdowns = () => {
  //   setOpenDropdown(null);
  // };

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
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;

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
      document.removeEventListener("click", handleClickOutside); // Cleanup
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <span className="material-icons" onClick={toggleMobileMenu}>menu</span>
        <Link to="/" className="navbar__logo-link">
          <h1>
            <span className="logo-line1">Ajurs Insights</span>
            <span className="logo-line2">& Company</span>
          </h1>
        </Link>
      </div>
      <nav className={`navbar__nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/P01" className="ai-blog-button">Project L01</Link></li>
          <li><Link to="/ai-blog" className="ai-blog-button">AI Blog</Link></li>
          <div className={`dropdown ${activeDropdown ? "active" : ""}`} data-dropdown>
            <button className="link" data-dropdown-button onClick={() => toggleDropdown("about")}>About</button>
            {/* <div className="dropdown-menu information-grid">
              <div className='dropdown-column'>
                <div className="dropdown-heading">Who Are We</div>
                <div className="dropdown-links">
                  <a href="#" className="link">Our Leadership</a>
                  <a href="#" className="link">Purpose, Mission, and Values</a>
                </div>
                <div className="dropdown-heading">How We Work</div>
                <div className="dropdown-links">
                  <a href="#" className="link">Projects</a>
                  <a href="#" className="link">Case Studies</a>
                </div> */}
              {/* </div>
            </div> */}
          </div>
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
