import React from "react";
import { Elephant } from "../types/Elephants";

const ElephantCard = ({
  name,
  species,
  sex,
  image,
}: Pick<Elephant, "name" | "species" | "sex" | "image">) => {
  return (
    <>
      <div className="card-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="details">
          <h2>{name}</h2>
          <p>{species}</p>
          <p className="runtime">{sex}</p>
        </div>
      </div>
    </>
  );
};

export default ElephantCard;
