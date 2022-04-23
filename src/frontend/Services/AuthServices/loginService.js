import axios from "axios";

export const loginService = async ({ email, password }) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("authToken", response.data.encodedToken);
    localStorage.setItem("user", response.data.foundUser.firstName);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
