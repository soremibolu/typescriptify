import React from "react";
import { Search } from "../types/Search";
import { Elephant } from "../types/Elephants";

const filterData = (Data: Elephant[], searchData: Search): Elephant[] => {
  const filteredElephants = Data.filter(
    (elephant: Elephant) =>
      elephant.name === searchData.name ||
      elephant.species === searchData.species ||
      elephant.affiliation === searchData.affiliation
  );
  return filteredElephants;
};

export default filterData;
