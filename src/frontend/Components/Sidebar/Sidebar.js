import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useNav } from "../../index";
export const Sidebar = () => {
  const { showSidebar } = useNav();
  return (
    <div
      className={
        showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
      }
    >
      <ul className="sidebar-list">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons">home</span>
          <span>HOME</span>
        </NavLink>
        <NavLink
          to="/videos"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons-outlined">video_library</span>
          <span>WATCH</span>
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons">history</span>
          <span>HISTORY</span>
        </NavLink>
        <NavLink
          to="/liked"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons">favorite_border</span>
          <span>LIKED</span>
        </NavLink>
        <NavLink
          to="/playlist"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons-outlined">playlist_add</span>
          <span>PLAYLIST</span>
        </NavLink>
        <NavLink
          to="/watchlater"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons-outlined">watch_later</span>
          <span>WATCH LATER</span>
        </NavLink>
      </ul>
    </div>
  );
};
