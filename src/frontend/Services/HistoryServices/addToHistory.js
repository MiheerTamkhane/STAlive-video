import axios from "axios";

export const addToHistory = async (authToken, video) => {
  try {
    const { data } = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data.history;
  } catch (e) {
    console.error(e);
  }
};
