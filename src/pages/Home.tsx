import React, { ChangeEvent, FormEvent, useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";
import Data from "../data/data.json";
import { Search } from "../types/Search";
import { Movie } from "../types/Movie";
import filterData from "../utils/filterData";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState<string>("");
  const [director, setDirector] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
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

  const resetFields = (): void => {
    setTitle("");
    setDirector("");
    setYear("");
  };

  const handleSearch = (searchTerms: Search): void => {
    if (!title && !director && !year) {
      alert("All fields are empty. Please fill at least one.");
    } else {
      setMovies(filterData(Data.movies, searchTerms));
    }
  };

  const handleClick = (e: FormEvent<HTMLFormElement>): void => {
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
          <SearchPanel
            handleChange={handleChange}
            handleClick={handleClick}
            title={title}
            year={year}
            director={director}
          />
        </div>
        <Rail movies={movies} />
      </div>
    </>
  );
};

export default Home;
