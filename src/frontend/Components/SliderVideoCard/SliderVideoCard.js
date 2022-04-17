import "./SliderVideoCard.css";
const SliderVideoCard = ({ data }) => {
  const { _id, title, speaker } = data;
  return (
    <a className="ct-basic-card slider-video-card">
      <img
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="video-thumbnail"
        className="ct-card-img video-thumbnail"
      />
      <div className="ct-product-stats slider-video-card-stats">
        <h1>{speaker}</h1>

        <div className="ct-product-stats">
          <p className="ct-product-info video-name">{title}</p>
        </div>
      </div>
    </a>
  );
};

export { SliderVideoCard };
