import React from "react";
import "./ReactPlayerFrame.css";
import ReactPlayer from "react-player";
import { getVideoLink, useHistory } from "../../index";
const ReactPlayerFrame = ({ id, authToken, currentVideo }) => {
  const { addToHistoryHandler } = useHistory();
  return (
    <div className="react-player-wrapper">
      <ReactPlayer
        url={getVideoLink(id)}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        playing
        onStart={() => addToHistoryHandler(authToken, currentVideo)}
      />
    </div>
  );
};

export { ReactPlayerFrame };
