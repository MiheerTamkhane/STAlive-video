import axios from "axios";

export const addToWatchLater = async (authToken, video) => {
  try {
    const { data } = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data.watchlater;
  } catch (e) {
    console.error(e);
  }
};
