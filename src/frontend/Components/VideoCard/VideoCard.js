import "./VideoCard.css";
import { Link } from "react-router-dom";
import { getThumbnailLink, useHistory, useAuth } from "../../index";
const VideoCard = ({ data }) => {
  const {
    auth: { authToken },
  } = useAuth();
  const { addToHistoryHandler } = useHistory();
  const { _id, timeStatus, speaker, title, uploadAt } = data;
  const date = new Date(uploadAt);
  return (
    <Link
      to={`/videos/${_id}`}
      className="video-card-container"
      onClick={() => addToHistoryHandler(authToken, data)}
    >
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
  );
};

export { VideoCard };
