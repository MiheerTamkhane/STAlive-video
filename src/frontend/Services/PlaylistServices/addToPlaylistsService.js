import axios from "axios";

export const addToPlaylistsService = async (authToken, playlist) => {
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      { playlist },
      {
        headers: {
          authorization: authToken,
        },
      }
    );

    return data.playlists;
  } catch (e) {
    console.error(e);
    return;
  }
};
