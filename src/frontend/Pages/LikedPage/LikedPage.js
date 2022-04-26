import { Sidebar, useLikedVideos, HorizontalCard } from "../../index";
const LikedPage = () => {
  const { likedVideos, removeFromLikedVideosHandler } = useLikedVideos();
  return (
    <>
      <Sidebar />
      <div className="page-text">
        <h1>Liked Videos</h1>
      </div>
      <div className="videos-container other-pages-video-container">
        {likedVideos.map((item) => (
          <HorizontalCard
            key={item._id}
            data={item}
            onRemoveHandler={removeFromLikedVideosHandler}
            showRmvBtn={true}
          />
        ))}
      </div>
    </>
  );
};

export { LikedPage };
