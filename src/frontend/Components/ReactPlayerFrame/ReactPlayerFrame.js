import React from "react";
import "./ReactPlayerFrame.css";
import ReactPlayer from "react-player";
const ReactPlayerFrame = ({ id }) => {
  return (
    <div className="react-player-wrapper">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export { ReactPlayerFrame };
