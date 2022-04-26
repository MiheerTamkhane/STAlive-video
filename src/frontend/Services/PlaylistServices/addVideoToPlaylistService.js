import axios from "axios";

export const addVideoToPlaylistService = async (
  authToken,
  video,
  playlistId
) => {
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    return data.playlist;
  } catch (e) {
    console.error(e);
    return;
  }
};
