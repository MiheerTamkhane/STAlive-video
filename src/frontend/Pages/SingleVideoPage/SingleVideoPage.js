import { useParams } from "react-router-dom";
import { useVideos, Sidebar } from "../../index";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const { videos } = useVideos();
  const { videoID } = useParams();
  const currentVideo = videos.find((video) => video._id === videoID);

  console.log(currentVideo);
  return (
    <>
      <Sidebar />
      <div className="single-video-page">
        <div className="single-video-container">
          <div className="react-player"></div>
          <div className="video-details">
            <h1>video details</h1>
          </div>
        </div>
        <div className="watch-next-container"></div>
      </div>
    </>
  );
};

export { SingleVideoPage };
