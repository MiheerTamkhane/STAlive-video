import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <nav className="nav-bar navbar">
      <div className="ct-nav-logo">
        <div className="logo">
          <h1>STAlive</h1>
        </div>
      </div>
      <div className="ct-right-nav">
        <div className="ct-nav-user">
          <h2 className="ct-nav-icons signin-text ct-btn">SIGN IN</h2>
          <div className="ct-nav-icons search-container">
            <input
              type="text"
              className={isSearch ? "ct-input search-input" : "ct-input hide"}
              placeholder="Type to search"
            />
            {isSearch ? (
              <button
                className="material-icons close-btn"
                onClick={() => setIsSearch(false)}
              >
                close
              </button>
            ) : (
              <button
                className="material-icons search-btn"
                onClick={() => setIsSearch(true)}
              >
                search
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
