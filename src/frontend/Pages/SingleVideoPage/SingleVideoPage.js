import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import {
  useVideos,
  useAuth,
  useLikedVideos,
  useWatchLater,
} from "../../Contexts";

import {
  Sidebar,
  Modal,
  ReactPlayerFrame,
  HorizontalCard,
} from "../../Components";

import { numFormatter } from "../../Utils";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const [showModel, setShowModel] = useState(false);
  const { videos } = useVideos();
  const navigate = useNavigate();
  const location = useLocation();
  const { videoID } = useParams();

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

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/video/${videoID}`);
      setSingleVideo(data.video);
    })();
  }, []);

  return (
    <>
      <Sidebar />
      {showModel && <Modal setShowModel={setShowModel} video={singleVideo} />}
      <div className="single-video-page">
        <div className="single-video-container">
          <ReactPlayerFrame
            id={videoID}
            authToken={authToken}
            currentVideo={singleVideo}
          />
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

              <button
                className="video-like-btn"
                onClick={() => {
                  if (status) {
                    setShowModel(true);
                  } else {
                    navigate("/join", { state: { from: location } });
                  }
                }}
              >
                <span className="material-icons-outlined">playlist_add</span>
                <span className="video-btns-text">Add</span>
              </button>
            </div>
          </div>
          <p className="video-description">{singleVideo.description}</p>
        </div>
        <div className="watch-next-container">
          {videos.map((video) => {
            return (
              <HorizontalCard key={video._id} data={video} showRemBtn={false} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { SingleVideoPage };
