import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: localStorage.getItem("user"),
    status: localStorage.getItem("authToken") ? true : false,
    authToken: localStorage.getItem("authToken"),
  });
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setAuth((prevAuth) => ({
      ...prevAuth,
      user: "",
      status: false,
      authToken: null,
    }));
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext error!");

  return context;
};

export { useAuth, AuthProvider };
