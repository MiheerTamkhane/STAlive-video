import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { useAuth } from "../../Contexts";
const Banner = () => {
  const {
    auth: { status },
  } = useAuth();
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h4>Your support makes a difference</h4>
          <p>
            STAlive exists because of support from people like you. When you
            become a member, you make our mission of spreading ideas from all
            over the world possible.
          </p>
          <div className="banner-btns-div">
            <Link to="/videos" className="ct-btn ct-blue main-cta">
              <p>Explore</p>
              <span className="material-icons-outlined">video_library</span>
            </Link>
            {!status && (
              <Link to="/join" className="ct-btn main-cta">
                <p>Join Today</p>
                <span className="material-icons-outlined">chevron_right</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export { Banner };
