import React, { ChangeEvent, FormEvent, useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";
import Data from "../data/data.json";
import { Search } from "../types/Search";
import { Movie } from "../types/Movie";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState<string>("");
  const [director, setDirector] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const filterData = (MovieData: Movie[], searchData: Search): Movie[] => {
    const filteredTitles = MovieData.filter(
      (movie: Movie) =>
        movie.title.toLowerCase() === searchData.title.toLowerCase()
    );
    const filteredDirectors = MovieData.filter(
      (movie: Movie) =>
        movie.director.toLowerCase() === searchData.director.toLowerCase()
    );
    const filteredYears = MovieData.filter(
      (movie: Movie) => movie.year === searchData.year
    );

    const moviesFiltered = filteredTitles.concat(
      filteredDirectors,
      filteredYears
    );
    return moviesFiltered;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "title":
        setTitle(e.target.value);
        break;
      case "director":
        setDirector(e.target.value);
        break;
      case "year":
        setYear(e.target.value);
        break;
    }
  };

  const resetFields = () => {
    setTitle("");
    setDirector("");
    setYear("");
  };

  const handleSearch = (searchTerms: Search): void => {
    setMovies(filterData(Data.movies, searchTerms));
  };

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerms: Search = {
      title: title ? title : "",
      director: director ? director : "",
      year: year ? year : "",
    };
    handleSearch(searchTerms);
    resetFields();
  };

  return (
    <>
      <div className="container">
        <div className="search">
          <SearchPanel handleChange={handleChange} handleClick={handleClick} />
        </div>
        <Rail movies={movies} />
      </div>
    </>
  );
};

export default Home;
