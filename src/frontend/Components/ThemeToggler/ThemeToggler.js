import React from "react";
import "./ThemeToggler.css";
import { useTheme } from "../../Contexts";
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="dark-light"
      onClick={() =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? (
        <span className="material-icons dark-icon">dark_mode</span>
      ) : (
        <span className="material-icons light-icon">wb_sunny</span>
      )}
    </div>
  );
};

export { ThemeToggler };
