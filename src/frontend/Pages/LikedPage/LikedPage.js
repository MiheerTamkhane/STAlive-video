import { Sidebar, useLikedVideos } from "../../index";
const LikedPage = () => {
  const { likedVideos } = useLikedVideos();
  return (
    <>
      <Sidebar />
      <div></div>
    </>
  );
};

export { LikedPage };
