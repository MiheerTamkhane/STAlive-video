import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="ct-nav-logo">
          <NavLink to="/" className="logo">
            <h1>STALIVE.</h1>
          </NavLink>
          <small>Stalive © 2019 - 2022</small>
          <div className="social-div">
            <a href="https://github.com/MiheerTamkhane">
              <img
                src="/assets/github.svg"
                alt="github"
                className="social-links"
              />
            </a>
            <a href="https://www.linkedin.com/in/miheer-tamkhane-19417b19a/">
              <img
                src="/assets/linkedin.svg"
                alt="linkedin"
                className="social-links"
              />
            </a>
            <a href="https://twitter.com/MiheerTamkhane">
              <img
                src="/assets/twitter.svg"
                alt="twitter"
                className="social-links"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-links">
          <h3>TO MORE INFO</h3>
          <p>Search</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy</p>
        </div>
        <div className="footer-links">
          <h3>SITEMAP</h3>
          <NavLink to="/" className="footer-link">
            <p>Home</p>
          </NavLink>
          <NavLink to="/videos" className="footer-link">
            <p>Videos</p>
          </NavLink>
        </div>
        <div className="footer-links">
          <h3>DEVELOPER</h3>
          <p>CODE BY MIHEER</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
