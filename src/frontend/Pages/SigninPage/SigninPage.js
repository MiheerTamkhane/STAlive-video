import { useState } from "react";

import { Login, Signup } from "../../index";
import "./SigninPage.css";
const SigninPage = () => {
  const [loginSignup, setLoginSignup] = useState();
  const showLogin = () => {
    setLoginSignup(false);
  };
  const showSignup = () => {
    setLoginSignup(true);
  };
  return (
    <div className="signin-page-container">
      <div className="btn-container">
        <button className={!loginSignup ? "active" : ""} onClick={showLogin}>
          Login
        </button>
        <button className={loginSignup ? "active" : ""} onClick={showSignup}>
          Signup
        </button>
      </div>
      <main className="form-container">
        {loginSignup ? <Signup /> : <Login />}
      </main>
    </div>
  );
};

export { SigninPage };
