import { Link } from "react-router-dom";
import "./SliderVideoCard.css";
const SliderVideoCard = ({ data }) => {
  const { _id, title } = data;
  return (
    <Link to={`/videos/${_id}`} className="ct-basic-card slider-video-card">
      <img
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="video-thumbnail"
        className="ct-card-img video-thumbnail"
      />
      <div className="slider-video-card-title">
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export { SliderVideoCard };
