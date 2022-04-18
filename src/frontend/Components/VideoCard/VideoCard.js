import "./VideoCard.css";
import { Link } from "react-router-dom";
import { getThumbnailLink } from "../../index";
const VideoCard = ({ data }) => {
  const { _id, timeStatus, speaker, title } = data;

  return (
    <Link to={`/videos/${_id}`} className="video-card-container">
      <div className="video-card-img">
        <img src={getThumbnailLink(_id)} alt={title} />
        <small className="video-time-status">{timeStatus}</small>
      </div>
      <div className="video-card-content">
        <em>
          <p>{speaker}</p>
        </em>
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export { VideoCard };
