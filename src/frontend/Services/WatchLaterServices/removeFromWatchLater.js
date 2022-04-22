import axios from "axios";

export const removeFromWatchLater = async (authToken, id) => {
  try {
    const { data } = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: {
        authorization: authToken,
      },
    });
    return data.watchlater;
  } catch (e) {
    console.error(e);
  }
};
