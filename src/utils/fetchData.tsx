import React from "react";
import { Elephant } from "../types/Elephants";

const fetchData = async () => {
  const response = await fetch(`https://elephant-api.herokuapp.com/elephants`);
  const data = await response.json();
  return data;
};
export default fetchData;
