//import { Movie } from '../types/Movie'
import { Elephant } from "../types/Elephants";
import getMovieInfo from "./getElephantInfo";

const testElephants: Elephant[] = [
  {
    affiliation: "Dasara",
    dob: "1958",
    dod: "-",
    fictional: "false",
    image: "https://elephant-api.herokuapp.com/pictures/missing.jpg",
    index: 1,
    name: "Balarama",
    note: "A lead elephant of the world-famous Mysore Dasara procession.",
    sex: "Male",
    species: "Asian",
    wikilink: "https://en.wikipedia.org/wiki/Balarama_(elephant)",
    _id: "5cf1d0dbcd5e98f2540c4d1c",
  },
  {
    affiliation: "Wakanda",
    dob: "1908",
    dod: "-",
    fictional: "false",
    image: "https://elephant-api.herokuapp.com/pictures/missing.jpg",
    index: 2,
    name: "Dumphy",
    note: "Just chilling in the jungle",
    sex: "Female",
    species: "Greek",
    wikilink: "https://en.wikipedia.org/wiki/Balarama_(elephant)",
    _id: "5cf1d0djhd5e98f2540c4r8u",
  },
  {
    affiliation: "Asgard",
    dob: "1958",
    dod: "-",
    fictional: "false",
    image: "https://elephant-api.herokuapp.com/pictures/missing.jpg",
    index: 3,
    name: "Odin",
    note: "A lead elephant of the world-famous Mysore Dasara procession.",
    sex: "Male",
    species: "British",
    wikilink: "https://en.wikipedia.org/wiki/Balarama_(elephant)",
    _id: "5cf1d0dbcd3t58f2540c4d1c",
  },
  {
    affiliation: "Olympus",
    dob: "1958",
    dod: "-",
    fictional: "false",
    image: "https://elephant-api.herokuapp.com/pictures/missing.jpg",
    index: 4,
    name: "Zeus",
    note: "A lead elephant of the world-famous Mysore Dasara procession.",
    sex: "Male",
    species: "Greek",
    wikilink: "https://en.wikipedia.org/wiki/Balarama_(elephant)",
    _id: "5cf1d0dbcd5e98y6740c4d1c",
  },
];

const id: string = "5cf1d0dbcd5e98y6740c4d1c";

const expectedResult: Elephant[] = [
  {
    affiliation: "Olympus",
    dob: "1958",
    dod: "-",
    fictional: "false",
    image: "https://elephant-api.herokuapp.com/pictures/missing.jpg",
    index: 4,
    name: "Zeus",
    note: "A lead elephant of the world-famous Mysore Dasara procession.",
    sex: "Male",
    species: "Greek",
    wikilink: "https://en.wikipedia.org/wiki/Balarama_(elephant)",
    _id: "5cf1d0dbcd5e98y6740c4d1c",
  },
];

test("getMovieInfo gets movie info", () => {
  const result = getMovieInfo(testElephants, id);
  expect(result).toEqual(expectedResult);
});
