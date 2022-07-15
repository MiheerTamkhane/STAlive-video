import { useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth, useNav, useVideos, useFilter } from "../../Contexts";

import "./Navbar.css";
const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { setSearchInput } = useVideos();
  const { dispatch } = useFilter();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    auth: { status, user },
    logoutHandler,
  } = useAuth();
  const { showSidebar, setShowSidebar } = useNav();

  const searchProcess = (e) => {
    navigate("/videos");
    dispatch({ type: "BY_SEARCH" });
    setSearchInput(e.target.value);
  };

  const debounce = (callback, delay) => {
    let timeout = null;
    return (...args) => {
      clearInterval(timeout);
      timeout = setTimeout(() => callback.apply(this, args), delay);
    };
  };

  const searchHandler = debounce(searchProcess, 500);
  return (
    <nav className="nav-bar navbar">
      <div className="ct-nav-logo">
        <div className="logo">
          {location.pathname !== "/" && location.pathname !== "/join" && (
            <div className="sidebar-btn">
              {showSidebar ? (
                <span
                  className="material-icons"
                  onClick={() => setShowSidebar(false)}
                >
                  close
                </span>
              ) : (
                <span
                  className="material-icons"
                  onClick={() => setShowSidebar(true)}
                >
                  menu
                </span>
              )}
            </div>
          )}
          <h1>STALIVE.</h1>
        </div>
      </div>
      <div className="ct-right-nav">
        <div className="ct-nav-user">
          {!status ? (
            <NavLink to="/join" className="ct-nav-icons signin-text ct-btn">
              SIGN IN
            </NavLink>
          ) : (
            <div className="dropdown">
              <button className="material-icons-outlined dropbtn">
                account_circle
              </button>
              <div className="dropdown-content">
                <button className="dropdown-item">
                  <h4>Hi, {user}</h4>
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    logoutHandler();
                    toast.success("Logged Out!", {
                      style: {
                        fontSize: "16px",
                      },
                    });
                  }}
                >
                  <p>Logout</p>
                  <span className="material-icons-outlined">logout</span>
                </button>
              </div>
            </div>
          )}
          {location.pathname !== "/" && (
            <div className="ct-nav-icons search-container">
              <input
                type="text"
                onChange={searchHandler}
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
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
