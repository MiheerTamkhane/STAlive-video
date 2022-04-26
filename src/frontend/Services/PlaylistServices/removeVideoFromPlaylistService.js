import axios from "axios";

export const removeVideoFromPlaylistService = async (
  authToken,
  videoId,
  playlistId
) => {
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
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
