import React, { useState, useEffect } from "react";
import "../styles/drop.css";

const DropdownMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

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

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="header">
      <div className={`dropdown ${activeDropdown ? "active" : ""}`} data-dropdown>
        <button className="link" data-dropdown-button>Information</button>
        <div className="dropdown-menu information-grid">
          <div>
            <div className="dropdown-heading">Free Tutorials</div>
            <div className="dropdown-links">
              <a href="#" className="link">All</a>
              <a href="#" className="link">Latest</a>
              <a href="#" className="link">Popular</a>
            </div>
          </div>
          <div>
            <div className="dropdown-heading">Courses</div>
            <div className="dropdown-links">
              <a href="#" className="link">JavaScript</a>
              <a href="#" className="link">CSS</a>
              <a href="#" className="link">React</a>
            </div>
          </div>
          <div>
            <div className="dropdown-heading">Blog</div>
            <div className="dropdown-links">
              <a href="#" className="link">All</a>
              <a href="#" className="link">Latest</a>
              <a href="#" className="link">Popular</a>
            </div>
          </div>
          <div>
            <div className="dropdown-heading">Other</div>
            <div className="dropdown-links">
              <a href="#" className="link">Twitter</a>
              <a href="#" className="link">Newsletter</a>
              <a href="#" className="link">Discord</a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="link">Pricing</a>
      <div className={`dropdown ${activeDropdown ? "active" : ""}`} data-dropdown>
        <button className="link" data-dropdown-button>Login</button>
        <div className="dropdown-menu">
          <form className="login-form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
