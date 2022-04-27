import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Contexts";
import { signupService } from "../../Services";
import "../Login/Form.css";
const Signup = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const signupHandler = async (userSignup) => {
    const data = await signupService(userSignup);
    setAuth((prevAuth) => ({
      ...prevAuth,
      user: data.createdUser.firstName,
      status: true,
      authToken: data.encodedToken,
    }));
    navigate(from, { replace: true });
  };
  return (
    <form
      className="ct-form"
      onSubmit={(e) => {
        e.preventDefault();
        signupHandler(userSignup);
      }}
    >
      <h2>Sign up</h2>
      <div className="ct-input-div">
        <input
          type="text"
          className="ct-input"
          placeholder="First Name..."
          value={userSignup.firstName}
          onChange={(e) =>
            setUserSignup({ ...userSignup, firstName: e.target.value })
          }
          required
        />
      </div>
      <div className="ct-input-div">
        <input
          type="text"
          className="ct-input"
          placeholder="Last Name..."
          value={userSignup.lastName}
          onChange={(e) =>
            setUserSignup({ ...userSignup, lastName: e.target.value })
          }
          required
        />
      </div>
      <div className="ct-input-div">
        <input
          type="email"
          className="ct-input"
          placeholder="Email..."
          value={userSignup.email}
          onChange={(e) =>
            setUserSignup({ ...userSignup, email: e.target.value })
          }
          required
        />
      </div>
      <div className="ct-input-div">
        <input
          type="password"
          className="ct-input"
          placeholder="Password..."
          value={userSignup.password}
          onChange={(e) =>
            setUserSignup({ ...userSignup, password: e.target.value })
          }
          required
        />
      </div>

      <div className="ct-checkbox-div">
        {/* <input type="checkbox" id="checkbox" required />
        <label htmlFor="checkbox">Terms & Conditions.</label> */}
        <label htmlFor="checkbox" className="form-check-input">
          <input type="checkbox" id="checkbox" />
          <span>Terms & Conditions.</span>
        </label>
      </div>

      <button className="ct-form-btn form-btn" type="submit">
        CREATE NEW ACCOUNT
      </button>
    </form>
  );
};

export { Signup };
