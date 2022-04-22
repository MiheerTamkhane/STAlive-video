import { Sidebar, useLikedVideos, HorizontalCard } from "../../index";
const LikedPage = () => {
  const { likedVideos } = useLikedVideos();
  return (
    <>
      <Sidebar />
      <div className="page-text">
        <h1>Liked Videos</h1>
      </div>
      <div className="videos-container other-pages-video-container">
        {likedVideos.map((item) => (
          <HorizontalCard key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export { LikedPage };
