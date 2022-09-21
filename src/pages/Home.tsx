import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SearchPanel from "../components/SearchPanel";
import Rail from "../components/Rail";
import Data from "../data/data.json";
import { Search } from "../types/Search";
import { Elephant } from "../types/Elephants";
import filterData from "../utils/filterData";
//import fetchData from "../utils/fetchData";

const Home = () => {
  const [elephants, setElephants] = useState<Elephant[]>([]);
  const [filteredElephants, setFilteredElephants] = useState<Elephant[]>([]);
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [affiliation, setAffiliation] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "species":
        setSpecies(e.target.value);
        break;
      case "affiliation":
        setAffiliation(e.target.value);
        break;
    }
  };

  const resetFields = (): void => {
    setName("");
    setSpecies("");
    setAffiliation("");
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://elephant-api.herokuapp.com/elephants`
    );
    const data: Elephant[] = await response.json();
    setElephants(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerms: Search): void => {
    if (!name && !species && !affiliation) {
      alert("All fields are empty. Please fill at least one.");
    } else {
      setFilteredElephants(filterData(elephants, searchTerms));
    }
  };

  const handleClick = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const searchTerms: Search = {
      name: name ? name : "",
      species: species ? species : "",
      affiliation: affiliation ? affiliation : "",
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
            name={name}
            species={species}
            affiliation={affiliation}
          />
        </div>
        <Rail elephants={filteredElephants} />
      </div>
    </>
  );
};

export default Home;
