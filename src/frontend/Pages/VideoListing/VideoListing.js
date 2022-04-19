import {
  Sidebar,
  useVideos,
  VideoCard,
  Filter,
  filterByTopics,
  filterByDuration,
  filterBySorting,
  useFilter,
} from "../../index";
import "./VideoListing.css";
const VideoListing = () => {
  const { videos } = useVideos();
  const { state } = useFilter();
  const videosFiltered = filterByTopics(state, videos);
  const videosAfterFiltered = filterBySorting(state, videosFiltered);
  const finalVideos = filterByDuration(state, videosAfterFiltered);
  return (
    <>
      <Sidebar />
      <div className="videos-container">
        <Filter />
        {finalVideos.map((item) => (
          <VideoCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export { VideoListing };
