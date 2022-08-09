import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("THEME"));

  useEffect(() => {
    localStorage.setItem("THEME", theme);
    if (theme === "light") {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  }, [theme]);
  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isSidebar, setIsSidebar }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("Error from theme context");
  }
  return context;
};

export { useTheme, ThemeProvider };
