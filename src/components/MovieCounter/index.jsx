import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieCounter = (props) => {
  const { Count } = props;
  return (
    <Wrapper>
      <b>{Count}</b> movies found
    </Wrapper>
  );
};

MovieCounter.propTypes = {
  Count: PropTypes.number.isRequired,
};

MovieCounter.defaultProps = {
  Count: 0,
};

const Wrapper = styled.div`
  margin: 2vh 5vw;
  position: relative;
  display: block;
  flex-direction: row;
  color: white;
`;

export default MovieCounter;
