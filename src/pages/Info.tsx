import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Elephant } from "../types/Elephants";
import getElephantInfo from "../utils/getElephantInfo";

const Info = () => {
  const { id } = useParams<string>();
  const [elephantDetails, setElephantDetails] = useState<Elephant[]>([]);

  useEffect(() => {
    fetchElephant();
    console.log("1", elephantDetails);
  }, []);

  const fetchElephant = async () => {
    const response = await fetch(
      `https://elephant-api.herokuapp.com/elephants`
    );
    const data: Elephant[] = await response.json();
    setElephantDetails(getElephantInfo(data, id));
    console.log("2", elephantDetails);
  };

  return (
    <>
      {elephantDetails.length ? (
        <div className="movie-detail-container">
          <div
            className="movie-detail-image"
            style={{ backgroundImage: `url(${elephantDetails[0].image})` }}
          ></div>
          <div className="movie-detail-info">
            <span>
              <h3>{elephantDetails[0].name} </h3>
              <p>{elephantDetails[0].sex}</p>
            </span>
            <p>Species: {elephantDetails[0].species}</p>
            <p>{elephantDetails[0].note}</p>
            <p>Affiliation: {elephantDetails[0].affiliation}</p>
          </div>
        </div>
      ) : (
        <>
          <p className="no-results">No results found</p>
        </>
      )}
    </>
  );
};

export default Info;
