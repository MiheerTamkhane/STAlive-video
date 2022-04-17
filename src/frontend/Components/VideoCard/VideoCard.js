import "./VideoCard.css";

const VideoCard = ({ data }) => {
  return (
    <div className="video-card-container">
      <div className="video-card-img">
        <img src={data.img} alt={data.title} />
        <small className="video-time-status">1:02</small>
      </div>
      <div className="video-card-content">
        <em>
          <p>{data.speaker}</p>
        </em>
        <h3>{data.title}</h3>
      </div>
    </div>
  );
};

export { VideoCard };
