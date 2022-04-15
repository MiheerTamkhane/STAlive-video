import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../index";
import "./Form.css";
const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { auth, setAuth } = useAuth();
  const loginHandler = async ({ email, password }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("authToken", response.data.encodedToken);
      localStorage.setItem("user", response.data.foundUser.firstName);
      setAuth((prevAuth) => ({
        ...prevAuth,
        user: response.data.foundUser.firstName,
        status: true,
        authToken: response.data.encodedToken,
      }));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
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
            loginHandler({
              email: "adarshbalika@gmail.com",
              password: "adarshBalika123",
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
