import "./VideoCard.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getThumbnailLink } from "../../Utils";
import {
  useAuth,
  useLikedVideos,
  useWatchLater,
  usePlaylists,
} from "../../Contexts";
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

  const { showModal, setShowModal } = usePlaylists();
  return (
    <>
      {showModal && <Modal video={data} />}
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
                toast.success("Remove from likes!", {
                  style: {
                    fontSize: "16px",
                  },
                });
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
                  toast.success("Liked a video!", {
                    style: {
                      fontSize: "16px",
                    },
                  });
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
                toast.success("Remove from watchlater!", {
                  style: {
                    fontSize: "16px",
                  },
                });
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
                  toast.success("Added to watchlater!", {
                    style: {
                      fontSize: "16px",
                    },
                  });
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
                setShowModal(true);
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
