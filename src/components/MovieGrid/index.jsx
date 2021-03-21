import React from "react";
import styled from "styled-components";
import MovieInfo from "../MovieInfo";
import BohemianRhapsody from "./images/BohemianRhapsody.webp";
import Inception from "./images/Inception.jpg";
import InfinityWar from "./images/InfinityWar.jpg";
import KillBillVolumen2 from "./images/KillBillVolumen2.jpg";
import PulpFiction from "./images/PulpFiction.jpg";
import ReservoirDogs from "./images/ReservoirDogs.jpg";

const Movies = [
  {
    image: PulpFiction,
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    year: 2004,
  },
  {
    image: BohemianRhapsody,
    title: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    year: 2003,
  },
  {
    image: KillBillVolumen2,
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning movie",
    year: 1994,
  },
  {
    image: InfinityWar,
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    year: 2004,
  },
  {
    image: Inception,
    title: "Inception",
    genre: "Action & Adventure",
    year: 2003,
  },
  {
    image: ReservoirDogs,
    title: "Pulp Fiction",
    genre: "Oscar winning movie",
    year: 1994,
  },
];

const MovieGrid = () => {
  return (
    <Wrapper>
      {Movies.map(({ image, title, genre, year }) => {
        return (
          <MovieInfo image={image} title={title} genre={genre} year={year} />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1vh 5vw 3vh 5vw;
  display: grid;
  grid-gap: 4vh 4vw;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: dense;
  counter-reset: albumList;
`;

export default MovieGrid;
