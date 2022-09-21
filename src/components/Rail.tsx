import React from "react";
import { Link } from "react-router-dom";
import ElephantCard from "./ElephantCard";
import { Elephant } from "../types/Elephants";

const Rail = ({ elephants }: { elephants: Elephant[] }) => {
  return (
    <>
      {elephants.length ? (
        <>
          <h3 className="rail-header">Search results</h3>
          <div className="rail">
            {elephants.map(
              (elephant: Elephant): JSX.Element => (
                <Link key={elephant._id} to={`/info/${elephant._id}`}>
                  <ElephantCard
                    name={elephant.name}
                    species={elephant.species}
                    sex={elephant.sex}
                    image={elephant.image}
                  />
                </Link>
              )
            )}
          </div>
        </>
      ) : (
        <>
          <h3 className="rail-header">Search results</h3>
          <p className="no-results">No results found</p>
        </>
      )}
    </>
  );
};

export default Rail;
