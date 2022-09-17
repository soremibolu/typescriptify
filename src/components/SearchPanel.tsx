import React from "react";
import Button from "./Button";
import { SearchPanelProps } from "../types/SearchPanelProps";

const SearchPanel = ({ handleChange, handleClick }: SearchPanelProps) => {
  return (
    <div className="search-container">
      <h3>Search for movie</h3>
      <div className="search-panel">
        <form onSubmit={handleClick}>
          <input
            id="title"
            className="input"
            type="text"
            placeholder="Title..."
            onChange={handleChange}
          />
          <input
            id="director"
            className="input"
            type="text"
            placeholder="Director..."
            onChange={handleChange}
          />
          <input
            id="year"
            className="input"
            type="number"
            maxLength={4}
            placeholder="Year..."
            onChange={handleChange}
          />

          <Button name="Search" />
        </form>
      </div>
    </div>
  );
};

export default SearchPanel;
