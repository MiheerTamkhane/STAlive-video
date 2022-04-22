import React from "react";
import "./HorizontalCard.css";
import { Link } from "react-router-dom";
import { getThumbnailLink } from "../../index";
const HorizontalCard = ({ data }) => {
  const { _id, speaker, title, uploadAt } = data;
  const date = new Date(uploadAt);
  return (
    <Link to={`/videos/${_id}`} className="horizontal-card-container">
      <div className="horizontal-card-img">
        <img src={getThumbnailLink(_id)} alt={title} />
      </div>
      <div className="horizontal-card-content">
        <em>
          <p>{speaker}</p>
        </em>
        <h3>{title}</h3>
        <small>{date.toDateString()}</small>
      </div>
    </Link>
  );
};

export { HorizontalCard };
