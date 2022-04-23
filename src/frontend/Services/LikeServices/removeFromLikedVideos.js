import axios from "axios";

export const removeFromLikedVideos = async (authToken, id) => {
  try {
    const { data } = await axios.delete(`/api/user/likes/${id}`, {
      headers: {
        authorization: authToken,
      },
    });
    return data.likes;
  } catch (e) {
    console.error(e);
  }
};
