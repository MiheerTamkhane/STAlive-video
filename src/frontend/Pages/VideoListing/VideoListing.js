import { Sidebar, Filter, VideoCard } from "../../Components";
import { useVideos, useFilter } from "../../Contexts";
import {
  filterByTopics,
  filterByDuration,
  filterBySorting,
  filterBySearch,
} from "../../Utils";
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
  const finalVideossss = filterBySearch(state, videos);
  console.log(finalVideossss);
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
