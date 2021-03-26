import React from "react";
import PropTypes from "prop-types";
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
    id: "movie-01",
    image: PulpFiction,
    title: "Pulp Fiction",
    genre: "Action & Adventure",
    date: new Date("September 10, 1994"),
    url: "https://www.imdb.com/title/tt0110912/",
    overview: "Overview text goes here",
    runtime: "Runtime text goes here",
  },
  {
    id: "movie-02",
    image: BohemianRhapsody,
    title: "Bohemian Rhapsody",
    genre: "Drama, Biography, Music",
    date: new Date("October 24, 2018"),
    url: "https://www.imdb.com/title/tt1727824/",
    overview: "Overview text goes here",
    runtime: "Runtime text goes here",
  },
  {
    id: "movie-03",
    image: KillBillVolumen2,
    title: "Kill Bill: Vol 2",
    genre: "Oscar winning movie",
    date: new Date("May 21, 2004"),
    url: "https://www.imdb.com/title/tt0378194/",
    overview: "Overview text goes here",
    runtime: "Runtime text goes here",
  },
  {
    id: "movie-04",
    image: InfinityWar,
    title: "Avengers: War of Infinity",
    genre: "Action & Adventure",
    date: new Date("April 27, 2018"),
    url: "https://www.imdb.com/title/tt4154756/",
    overview: "Overview text goes here",
    runtime: "Runtime text goes here",
  },
  {
    id: "movie-05",
    image: Inception,
    title: "Inception",
    genre: "Action & Adventure",
    date: new Date("July 23, 2010"),
    url: "https://www.imdb.com/title/tt1375666/",
    overview: "Overview text goes here",
    runtime: "Runtime text goes here",
  },
  {
    id: "movie-06",
    image: ReservoirDogs,
    title: "Reservoir Dogs",
    genre: "Oscar winning movie",
    date: new Date("16 October 1992"),
    url: "https://www.imdb.com/title/tt0105236/",
    overview: "Overview text goes here",
    runtime: "Runtime text goes here",
  },
];

const MovieGrid = (props) => {
  const { editMovie, deleteMovie } = props;
  return (
    <Wrapper>
      {Movies.map(({ id, image, title, genre, date, url, overview, runtime }) => {
        return (
          <MovieInfo
            key={id}
            id={id}
            image={image}
            title={title}
            genre={genre}
            date={date}
            url={url}
            overview={overview}
            runtime={runtime}
            editMovie={editMovie}
            deleteMovie={deleteMovie}
          />
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

MovieGrid.propTypes = {
  editMovie: PropTypes.func.isRequired,
};

export default MovieGrid;
