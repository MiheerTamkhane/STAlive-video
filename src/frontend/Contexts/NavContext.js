import { createContext, useContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <NavContext.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </NavContext.Provider>
  );
};

const useNav = () => {
  const context = useContext(NavContext);
  if (context === undefined) throw new Error("NavContext Error.");

  return context;
};

export { NavProvider, useNav };
