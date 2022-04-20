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
          <VideoCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export { VideoListing };
