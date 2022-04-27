import { useState } from "react";
import "./VideoCard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getThumbnailLink } from "../../Utils";
import { useAuth, useLikedVideos, useWatchLater } from "../../Contexts";
import { Modal } from "../Modal/Modal";
const VideoCard = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    auth: { authToken, status },
  } = useAuth();
  const { _id, timeStatus, speaker, title, uploadAt } = data;
  const date = new Date(uploadAt);
  const { likedVideos, removeFromLikedVideosHandler, addToLikedVideosHandler } =
    useLikedVideos();
  const {
    watchLaterVideos,
    addToWatchLaterHandler,
    removeFromWatchLaterHandler,
  } = useWatchLater();
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      {showModel && <Modal setShowModel={setShowModel} video={data} />}
      <div className="video-card-container">
        <Link to={`/videos/${_id}`} className="video-card-link">
          <div className="video-card-img">
            <img src={getThumbnailLink(_id)} alt={title} />
            <small className="video-time-status">{timeStatus}</small>
          </div>
          <div className="video-card-content">
            <em>
              <p>{speaker}</p>
            </em>
            <h3>{title}</h3>
            <small>{date.toDateString()}</small>
          </div>
        </Link>
        <div className="action-container">
          {likedVideos.find((video) => video._id === _id) ? (
            <span
              className="material-icons"
              onClick={() => {
                removeFromLikedVideosHandler(authToken, _id);
              }}
            >
              favorite
            </span>
          ) : (
            <span
              className="material-icons-outlined"
              onClick={() => {
                if (status) {
                  addToLikedVideosHandler(authToken, data);
                } else {
                  navigate("/join", { state: { from: location } });
                }
              }}
            >
              favorite_border
            </span>
          )}
          {watchLaterVideos.find((video) => video._id === _id) ? (
            <span
              className="material-icons"
              onClick={() => {
                removeFromWatchLaterHandler(authToken, _id);
              }}
            >
              watch_later
            </span>
          ) : (
            <span
              className="material-icons-outlined"
              onClick={() => {
                if (status) {
                  addToWatchLaterHandler(authToken, data);
                } else {
                  navigate("/join", { state: { from: location } });
                }
              }}
            >
              watch_later
            </span>
          )}
          <span
            className="material-icons-outlined"
            onClick={() => {
              if (status) {
                setShowModel(true);
              } else {
                navigate("/join", { state: { from: location } });
              }
            }}
          >
            playlist_add
          </span>
        </div>
      </div>
    </>
  );
};

export { VideoCard };
