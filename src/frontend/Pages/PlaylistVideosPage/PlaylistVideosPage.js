import { useParams } from "react-router-dom";
import {
  Sidebar,
  usePlaylists,
  HorizontalCard,
  removeVideoFromPlaylistService,
} from "../../index";
import "./PlaylistVideosPage.css";
const PlaylistVideosPage = () => {
  const { playlists, setPlaylists } = usePlaylists();
  const { playlistId } = useParams();

  const removeVideoFromPlaylistHandler = async (authToken, vodeoId) => {
    const data = await removeVideoFromPlaylistService(
      authToken,
      vodeoId,
      playlistId
    );
    setPlaylists(
      playlists.map((playlist) => (playlist._id === data._id ? data : playlist))
    );
  };
  return (
    <>
      <Sidebar />
      <div className="page-text">
        {playlists.map((playlist) => {
          return (
            playlist._id === playlistId && (
              <h1 key={playlist._id}>{playlist.title}</h1>
            )
          );
        })}
      </div>
      <div className="videos-container other-pages-video-container">
        {playlists.map((playlist) => {
          return (
            playlist._id === playlistId &&
            playlist.videos.map((video) => {
              return (
                <HorizontalCard
                  key={video.id}
                  data={video}
                  onRemoveHandler={removeVideoFromPlaylistHandler}
                  showRmvBtn={true}
                />
              );
            })
          );
        })}
      </div>
    </>
  );
};

export { PlaylistVideosPage };
