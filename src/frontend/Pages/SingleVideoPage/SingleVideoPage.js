import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sidebar, ReactPlayerFrame } from "../../index";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const { videoID } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${videoID}`);
        setSingleVideo(data.video);
      } catch (e) {
        console.error(e);
        return;
      }
    })();
  }, []);
  return (
    <>
      <Sidebar />
      <div className="single-video-page">
        <div className="single-video-container">
          <ReactPlayerFrame id={videoID} />
          <div className="video-details-container">
            <div className="video-details">
              <em>
                <h4>{singleVideo.speaker}</h4>
              </em>
              <p>{singleVideo.title}</p>
              <h5>View : {singleVideo.views}</h5>
            </div>
            <div className="video-btns">
              <button className="video-like-btn">
                <span className="material-icons-outlined">favorite_border</span>
                <span className="video-btns-text">Likes</span>
              </button>
              <button className="video-like-btn">
                <span className="material-icons-outlined">ios_share</span>
                <span className="video-btns-text">Share</span>
              </button>
              <button className="video-like-btn">
                <span className="material-icons-outlined">playlist_add</span>
                <span className="video-btns-text">Add</span>
              </button>
            </div>
          </div>
        </div>
        <div className="watch-next-container">
          <h1>Watch Next</h1>
        </div>
      </div>
    </>
  );
};

export { SingleVideoPage };
