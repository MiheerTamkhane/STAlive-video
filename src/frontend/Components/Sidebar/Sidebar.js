import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useNav } from "../../Contexts";
export const Sidebar = () => {
  const { showSidebar } = useNav();
  const getStyled = ({ isActive }) => {
    return isActive ? "sidebar-items active" : "sidebar-items";
  };
  return (
    <div
      className={
        showSidebar ? "sidebar-wrapper show-sidebar" : "sidebar-wrapper"
      }
    >
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <ul className="sidebar-list">
          <NavLink to="/" className={getStyled}>
            <span className="material-icons">home</span>
            <span>HOME</span>
          </NavLink>
          <NavLink to="/videos" className={getStyled}>
            <span className="material-icons-outlined">video_library</span>
            <span>WATCH</span>
          </NavLink>
          <NavLink to="/history" className={getStyled}>
            <span className="material-icons">history</span>
            <span>HISTORY</span>
          </NavLink>
          <NavLink to="/liked" className={getStyled}>
            <span className="material-icons">favorite_border</span>
            <span>LIKED</span>
          </NavLink>
          <NavLink to="/playlist" className={getStyled}>
            <span className="material-icons-outlined">playlist_add</span>
            <span>PLAYLIST</span>
          </NavLink>
          <NavLink to="/watchlater" className={getStyled}>
            <span className="material-icons-outlined">watch_later</span>
            <span>WATCH LATER</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};
