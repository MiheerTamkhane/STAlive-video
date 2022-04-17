import "./VideoCard.css";

const VideoCard = ({ data }) => {
  const { _id, timeStatus, speaker, title } = data;
  return (
    <div className="video-card-container">
      <div className="video-card-img">
        <img
          src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
          alt={title}
        />
        <small className="video-time-status">{timeStatus}</small>
      </div>
      <div className="video-card-content">
        <em>
          <p>{speaker}</p>
        </em>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export { VideoCard };
