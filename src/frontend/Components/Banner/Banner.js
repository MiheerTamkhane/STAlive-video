import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h4>Your support makes a difference</h4>
          <p>
            STALIVE exists because of support from people like you. When you
            become a member, you make our mission of spreading ideas from all
            over the world possible.
          </p>
          <div className="banner-btns-div">
            <button className="ct-btn ct-blue main-cta">
              <a href="#" className="banner-link">
                Explore
              </a>
              <span className="material-icons-outlined">video_library</span>
            </button>
            <button className="ct-btn main-cta">
              <a href="#" className="banner-link">
                Join Today
              </a>
              <span className="material-icons-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Banner };
