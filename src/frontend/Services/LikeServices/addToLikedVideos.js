import axios from "axios";

export const addToLikedVideos = async (authToken, video) => {
  try {
    const { data } = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    console.log("from add to like fu", data);
    return data.likes;
  } catch (e) {
    console.error(e);
  }
};
