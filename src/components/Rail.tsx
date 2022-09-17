import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Movie } from "../types/Movie";

const Rail = ({ movies }: { movies: Movie[] }) => {
  return (
    <>
      {movies.length ? (
        <>
          <h3 className="rail-header">Search results:</h3>
          <div className="rail">
            {movies.map(
              (movie: Movie): JSX.Element => (
                <Link key={movie.id} to={`/info/${movie.id}`}>
                  <MovieCard
                    title={movie.title}
                    runtime={movie.runtime}
                    year={movie.year}
                    posterUrl={movie.posterUrl}
                  />
                </Link>
              )
            )}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Rail;
