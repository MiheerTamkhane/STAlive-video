import axios from "axios";

export const signupService = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  try {
    const response = await axios.post("/api/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    localStorage.setItem("authToken", response.data.encodedToken);
    localStorage.setItem("user", response.data.createdUser.firstName);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
