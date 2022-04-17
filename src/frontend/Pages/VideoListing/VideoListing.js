import { Sidebar, useVideos, VideoCard } from "../../index";
import "./VideoListing.css";
const VideoListing = () => {
  const { videos } = useVideos();
  return (
    <>
      <Sidebar />
      <div className="videos-container">
        {videos.map((item) => (
          <VideoCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export { VideoListing };
