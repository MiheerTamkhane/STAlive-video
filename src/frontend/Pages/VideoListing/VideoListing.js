import { Sidebar, Filter, VideoCard } from "../../Components";
import { useVideos, useFilter } from "../../Contexts";
import { filterByTopics, filterByDuration, filterBySorting } from "../../Utils";
import "./VideoListing.css";
const VideoListing = () => {
  const { videos, searchInput } = useVideos();
  const { state } = useFilter();
  const videosFilteredByTopics = filterByTopics(state, videos);
  const videosFilteredbyDuration = filterByDuration(
    state,
    videosFilteredByTopics
  );

  const filterBySearchVideos = videosFilteredbyDuration.filter((item) =>
    item.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );
  const finalVideos = filterBySorting(state, filterBySearchVideos);
  return (
    <div className="videos-container-page">
      <Sidebar />
      {finalVideos.length > 0 ? (
        <div className="videos-container">
          <Filter />
          {finalVideos.map((item) => (
            <div key={item._id}>
              <VideoCard key={item._id} data={item} />
            </div>
          ))}
        </div>
      ) : (
        <h1>Video Not Found</h1>
      )}
    </div>
  );
};

export { VideoListing };
