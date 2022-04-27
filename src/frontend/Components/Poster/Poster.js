import React from "react";
import { getThumbnailLink } from "../../Utils/getThumbnailLink";
import "./Poster.css";
import { Link } from "react-router-dom";

function Poster({ data }) {
  return (
    <section
      className={
        data.left ? "section-container" : "section-container section-col-rev"
      }
    >
      {data.left && (
        <div className="img-container">
          <img src={getThumbnailLink(data.id)} alt="poster-img" />
        </div>
      )}
      <div className="content">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <Link to={`/videos/${data.id}`} className="ct-btn ct-blue link-btn">
          <span>Watch Now</span>
        </Link>
      </div>
      {!data.left && (
        <div className="img-container">
          <img src={getThumbnailLink(data.id)} alt="poster-img" />
        </div>
      )}
    </section>
  );
}

export { Poster };
