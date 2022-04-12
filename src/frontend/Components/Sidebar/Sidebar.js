import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-list">
        <li className="sidebar-items">
          <span class="material-icons">home</span>
          <span>HOME</span>
        </li>
        <li className="sidebar-items">
          <span class="material-icons">history</span>
          <span>HISTORY</span>
        </li>
        <li className="sidebar-items">
          <span className="material-icons">favorite_border</span>
          <span>LIKED</span>
        </li>
        <li className="sidebar-items">
          <span class="material-icons-outlined">playlist_add</span>
          <span>PLAYLIST</span>
        </li>
        <li className="sidebar-items">
          <span className="material-icons-outlined">watch_later</span>
          <span>WATCH LATER</span>
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
