import React from "react";
import "./ReactPlayerFrame.css";
import ReactPlayer from "react-player";
import { getVideoLink } from "../../index";
const ReactPlayerFrame = ({ id }) => {
  return (
    <div className="react-player-wrapper">
      <ReactPlayer
        url={getVideoLink(id)}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export { ReactPlayerFrame };
