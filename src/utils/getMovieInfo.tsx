import React from "react";
import { Movie } from "../types/Movie";

const getMovieInfo = (MovieData: Movie[], id: string | undefined): Movie[] => {
  const movieDetailed: Movie[] = MovieData.filter(
    (movie) => movie.id.toString() === id
  );
  return movieDetailed;
};

export default getMovieInfo;
