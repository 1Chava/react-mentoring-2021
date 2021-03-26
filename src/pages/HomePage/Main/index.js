import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Filter from '../../../components/Filter';
import SortBy from '../../../components/SortBy'
import MovieCounter from '../../../components/MovieCounter'
import MovieGrid from '../../../components/MovieGrid'

const Main = (props) => {
  const { editMovie, deleteMovie } = props;
  return (
    <Wrapper>
      <Logos>
        <Filter />
        <SortBy />
      </Logos>
      <Divide />
      <MovieCounter Count={39} />
      <MovieGrid editMovie={editMovie} deleteMovie={deleteMovie}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #232323;
  display: flex;
  flex-direction: column;
`;

const Logos = styled.div`
  margin: 0vh 5vw;
  position: relative;
  display: block;
  flex-direction: row;
`;

const Divide = styled.hr`
  width: auto;
  margin: 0vh 5vw 2vh 5vw;
`;

Main.propTypes = {
  editMovie: PropTypes.func.isRequired,
};

export default Main;