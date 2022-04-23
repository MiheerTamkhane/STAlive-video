import { Sidebar, HorizontalCard, useWatchLater } from "../../index";
const WatchlaterPage = () => {
  const { watchLaterVideos } = useWatchLater();
  return (
    <>
      <Sidebar />
      <div className="page-text">
        <h1>Watch Later</h1>
      </div>
      <div className="videos-container other-pages-video-container">
        {watchLaterVideos.map((item) => (
          <HorizontalCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export { WatchlaterPage };
