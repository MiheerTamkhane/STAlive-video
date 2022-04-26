import axios from "axios";

export const deletePlaylistService = async (authToken, playlistId) => {
  try {
    const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: {
        authorization: authToken,
      },
    });

    return data.playlists;
  } catch (e) {
    console.error(e);
    return;
  }
};
