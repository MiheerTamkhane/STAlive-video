import {
  Sidebar,
  useVideos,
  VideoCard,
  Filter,
  filterByTopics,
  filterByDuration,
  filterBySorting,
  useFilter,
  Modal,
} from "../../index";
import "./VideoListing.css";
const VideoListing = () => {
  const { videos } = useVideos();
  const { state } = useFilter();
  const videosFilteredByTopics = filterByTopics(state, videos);
  const videosFilteredbyDuration = filterByDuration(
    state,
    videosFilteredByTopics
  );
  const finalVideos = filterBySorting(state, videosFilteredbyDuration);
  return (
    <>
      <Sidebar />
      <div className="videos-container">
        <Filter />
        {finalVideos.map((item) => (
          <div key={item._id}>
            <VideoCard key={item._id} data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export { VideoListing };
