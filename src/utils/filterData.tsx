import React from "react";
import { Search } from "../types/Search";
import { Movie } from "../types/Movie";

const filterData = (MovieData: Movie[], searchData: Search): Movie[] => {
  const filteredMovies = MovieData.filter(
    (movie: Movie) =>
      movie.title.toLowerCase() === searchData.title.toLowerCase() ||
      movie.director.toLowerCase() === searchData.director.toLowerCase() ||
      movie.year === searchData.year
  );
  return filteredMovies;
};

export default filterData;
