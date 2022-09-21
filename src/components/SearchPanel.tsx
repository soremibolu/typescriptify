import React from "react";
import Button from "./Button";
import { SearchPanelProps } from "../types/SearchPanelProps";

const SearchPanel = ({
  handleChange,
  handleClick,
  name,
  species,
  affiliation,
}: SearchPanelProps) => {
  return (
    <div className="search-container">
      <h3>Search for Elephant</h3>
      <div className="search-panel">
        <form onSubmit={handleClick}>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="Name..."
            onChange={handleChange}
            value={name}
          />
          <input
            id="species"
            className="input"
            type="text"
            placeholder="Species..."
            onChange={handleChange}
            value={species}
          />
          <input
            id="affiliation"
            className="input"
            type="text"
            placeholder="Affiliation..."
            onChange={handleChange}
            value={affiliation}
          />

          <Button name="Search" />
        </form>
      </div>
    </div>
  );
};

export default SearchPanel;
