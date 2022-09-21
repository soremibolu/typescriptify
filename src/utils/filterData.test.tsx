//import { Movie } from '../types/Movie'
import filterData from "./filterData";

const testMovies = [
  {
    id: 16,
    title: "Corpse Bride",
    year: "2007",
    runtime: "77",
    genres: ["Animation", "Drama", "Family"],
    director: "Tim Burton, Mike Johnson",
    actors: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
    plot: "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg",
  },
  {
    id: 17,
    title: "The Third Man",
    year: "1949",
    runtime: "93",
    genres: ["Film-Noir", "Mystery", "Thriller"],
    director: "Carol Reed",
    actors: "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
    plot: "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg",
  },
  {
    id: 18,
    title: "The Beach",
    year: "2007",
    runtime: "119",
    genres: ["Adventure", "Drama", "Romance"],
    director: "Danny Boyle",
    actors:
      "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
    plot: "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    id: 19,
    title: "Scarface",
    year: "1983",
    runtime: "170",
    genres: ["Crime", "Drama"],
    director: "Brian De Palma",
    actors:
      "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
    plot: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
  },
];

const testSearch = {
  title: "",
  director: "",
  year: "2007",
};

const expectedResult = [
  {
    id: 16,
    title: "Corpse Bride",
    year: "2007",
    runtime: "77",
    genres: ["Animation", "Drama", "Family"],
    director: "Tim Burton, Mike Johnson",
    actors: "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
    plot: "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
    posterUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg",
  },
  {
    id: 18,
    title: "The Beach",
    year: "2007",
    runtime: "119",
    genres: ["Adventure", "Drama", "Romance"],
    director: "Danny Boyle",
    actors:
      "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
    plot: "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
];

test("filterdata filters movies", () => {
  const result = filterData(testMovies, testSearch);
  expect(result).toEqual(expectedResult);
});
