import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../Contexts";
import { loginService } from "../../Services";
import "./Form.css";
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const loginHandler = async (userLogin) => {
    const data = await loginService(userLogin);
    setAuth((prevAuth) => ({
      ...prevAuth,
      user: data.foundUser.firstName,
      status: true,
      authToken: data.encodedToken,
    }));
    navigate(from, { replace: true });
    toast.success("Loggedin successfully!", {
      style: {
        fontSize: "16px",
      },
    });
  };
  return (
    <main className="form-container">
      <form
        className="ct-form"
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(userLogin);
        }}
      >
        <h2>Login</h2>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            required
            value={userLogin.email}
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
          />
        </div>
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Password..."
            required
            value={userLogin.password}
            onChange={(e) =>
              setUserLogin({ ...userLogin, password: e.target.value })
            }
          />
        </div>

        <div className="ct-checkbox-div">
          <label htmlFor="checkbox" className="form-check-input">
            <input type="checkbox" id="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="####">Forgot your password?</a>
        </div>
        <button className="ct-form-btn  form-btn" type="submit">
          LOGIN
        </button>
        <button
          className="ct-btn ct-gray-bd login-guest"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setUserLogin({
              email: "miheer007@gmail.com",
              password: "miheer123",
            });
            loginHandler({
              email: "miheer007@gmail.com",
              password: "miheer123",
            });
          }}
        >
          LOGIN AS GUEST
        </button>
      </form>
    </main>
  );
};

export { Login };
