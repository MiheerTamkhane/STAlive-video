import axios from "axios";

export const getSinglePlaylistService = async (authToken, playlistId) => {
  try {
    const { data } = await axios.get(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: authToken,
      },
    });
    return data.playlist;
  } catch (e) {
    console.error(e);
    return;
  }
};
