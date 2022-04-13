import React from "react";
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
          <img src={data.img} alt="poster-img" />
        </div>
      )}
      <div className="content">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <button className="ct-btn ct-gray content-btn">
          <a to="/productspage" className="link">
            Watch Now
          </a>
        </button>
      </div>
      {!data.left && (
        <div className="img-container">
          <img src={data.img} alt="poster-img" />
        </div>
      )}
    </section>
  );
}

export { Poster };
