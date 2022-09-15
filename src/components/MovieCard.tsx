import React from "react";
import { Movie } from "../types/Movie";

const MovieCard = ({
  title,
  runtime,
  year,
  posterUrl,
}: Pick<Movie, "title" | "runtime" | "year" | "posterUrl">) => {
  return (
    <>
      <div className="card-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${posterUrl})` }}
        ></div>
        <div className="details">
          <h2>{title}</h2>
          <p>{year}</p>
          <p className="runtime">{runtime} minutes</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
