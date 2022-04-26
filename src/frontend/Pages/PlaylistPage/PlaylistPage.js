import { Link } from "react-router-dom";
import { Sidebar, usePlaylists, getThumbnailLink, useAuth } from "../../index";
import { deletePlaylistService } from "../../Services";
import "./PlaylistPage.css";
const PlaylistPage = () => {
  const {
    auth: { authToken },
  } = useAuth();
  const { playlists, setPlaylists } = usePlaylists();
  const deletePlaylistHandler = async (playlistId) => {
    const newPlaylists = await deletePlaylistService(authToken, playlistId);
    setPlaylists(newPlaylists);
  };
  return (
    <>
      <Sidebar />
      <div className="page-text">
        <h1>Your Playlists</h1>
      </div>
      <div className="videos-container playlist-card-container">
        {playlists.map((playlist) => {
          return (
            <div key={playlist._id} className="playlist-card">
              <button
                className="material-icons-outlined delete-btn ct-btn ct-red"
                onClick={() => deletePlaylistHandler(playlist._id)}
              >
                delete
              </button>
              <Link
                to={`/playlist/${playlist._id}`}
                className="playlist-card-link"
              >
                <img
                  src={
                    playlist.videos.length !== 0
                      ? getThumbnailLink(playlist.videos[0]._id)
                      : "/assets/play.png"
                  }
                  alt="playlist-thumbnail"
                />
                <h2>{playlist.title}</h2>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { PlaylistPage };
