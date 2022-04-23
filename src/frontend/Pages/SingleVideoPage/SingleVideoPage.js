import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  useVideos,
  Sidebar,
  ReactPlayerFrame,
  useAuth,
  useLikedVideos,
  useWatchLater,
  useHistory,
  HorizontalCard,
} from "../../index";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const { videos } = useVideos();
  const navigate = useNavigate();
  const { addToHistoryHandler } = useHistory();
  const location = useLocation();
  const {
    auth: { authToken, status },
  } = useAuth();
  const { likedVideos, addToLikedVideosHandler, removeFromLikedVideosHandler } =
    useLikedVideos();
  const {
    watchLaterVideos,
    addToWatchLaterHandler,
    removeFromWatchLaterHandler,
  } = useWatchLater();
  const [singleVideo, setSingleVideo] = useState({});
  const { videoID } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/video/${videoID}`);
      setSingleVideo(data.video);
    })();

    addToHistoryHandler(authToken, singleVideo);
  }, []);

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num < 900) {
      return num;
    }
  }
  return (
    <>
      <Sidebar />
      <div className="single-video-page">
        <div className="single-video-container">
          <ReactPlayerFrame id={videoID} />
          <div className="video-details-container">
            <div className="video-details">
              <em>
                <h4>{singleVideo.speaker}</h4>
              </em>
              <p>{singleVideo.title}</p>
              <h4>View : {numFormatter(singleVideo.views)}</h4>
            </div>
            <div className="video-btns">
              {likedVideos.find((video) => video._id === singleVideo._id) ? (
                <button
                  className="video-like-btn"
                  onClick={() => {
                    removeFromLikedVideosHandler(authToken, singleVideo._id);
                  }}
                >
                  <span className="material-icons">favorite</span>
                  <span className="video-btns-text">Likes</span>
                </button>
              ) : (
                <button
                  className="video-like-btn"
                  onClick={() => {
                    if (status) {
                      addToLikedVideosHandler(authToken, singleVideo);
                    } else {
                      navigate("/join", { state: { from: location } });
                    }
                  }}
                >
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                  <span className="video-btns-text">Likes</span>
                </button>
              )}
              {watchLaterVideos.find(
                (video) => video._id === singleVideo._id
              ) ? (
                <button
                  className="video-like-btn"
                  onClick={() => {
                    removeFromWatchLaterHandler(authToken, singleVideo._id);
                  }}
                >
                  <span className="material-icons">watch_later</span>
                  <span className="video-btns-text">Watch Later</span>
                </button>
              ) : (
                <button
                  className="video-like-btn"
                  onClick={() => {
                    if (status) {
                      addToWatchLaterHandler(authToken, singleVideo);
                    } else {
                      navigate("/join", { state: { from: location } });
                    }
                  }}
                >
                  <span className="material-icons-outlined">watch_later</span>
                  <span className="video-btns-text">Watch Later</span>
                </button>
              )}

              <button className="video-like-btn">
                <span className="material-icons-outlined">playlist_add</span>
                <span className="video-btns-text">Add</span>
              </button>
            </div>
          </div>
          <p className="video-description">{singleVideo.description}</p>
        </div>
        <div className="watch-next-container">
          {videos.map((item) => {
            return (
              <HorizontalCard
                key={item._id}
                data={item}
                onSetSingleVideo={setSingleVideo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { SingleVideoPage };
