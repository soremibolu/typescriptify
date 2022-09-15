import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Movie } from "../types/Movie";

const Rail = ({ movies }: { movies: Movie[] }) => {
  return (
    <>
      <h3 className="rail-header">Search results:</h3>
      <div className="rail">
        {movies.length ? (
          movies.map(
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
          )
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </>
  );
};

export default Rail;
