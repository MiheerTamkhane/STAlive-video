import { createContext, useContext, useState } from "react";

const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [isNav, setIsNav] = useState(false);
  return (
    <NavContext.Provider value={{ isNav, setIsNav }}>
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
