import "./VideoCard.css";
const VideoCard = () => {
  const demo = {
    _id: "LTnI7cmpDZI",
    title: "What makes life complete? | Gaur Gopal Das",
    description:
      "Gaur Gopal Prabhu explains how Life is like a jigsaw puzzle and we can only experience completeness when all pieces are in their right place. Explore the different dimensions of life and put them together to make it holistic and fulfilling.",
    creator: "Gaur Gopal Das",
    categoryName: "Mashup",
    img: "https://i.ytimg.com/vi/LTnI7cmpDZI/0.jpg",
    views: "401k",
  };

  return (
    <a className="ct-basic-card video-card">
      <img
        src={demo.img}
        alt="video-thumbnail"
        className="ct-card-img video-thumbnail"
      />
      <div className="ct-product-stats video-card-stats">
        <h1>{demo.creator}</h1>

        <div className="ct-product-stats">
          <p className="ct-product-info video-name">{demo.title}</p>
        </div>
      </div>
    </a>
  );
};

export { VideoCard };
