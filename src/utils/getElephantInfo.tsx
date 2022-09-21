import React from "react";
import { Elephant } from "../types/Elephants";

const getElephantInfo = (
  Data: Elephant[],
  id: string | undefined
): Elephant[] => {
  const elephantDetailed: Elephant[] = Data.filter(
    (elephant) => elephant._id === id
  );
  return elephantDetailed;
};

export default getElephantInfo;
