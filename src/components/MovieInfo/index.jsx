import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieInfo = (props) => {
  const { image, title, genre, year } = props;
  return (
    <Wrapper>
      <Image src={image} />
      <Info>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Info>
      <Genre>{genre}</Genre>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

const Wrapper = styled.div`
  width: 27vw;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
`;

const Image = styled.img`
  width: 27vw;
  height: 35vw;
`;

const Title = styled.span`
  align-self: center;
  font-weight: bold;
`;

const Year = styled.span`
  border-style: solid;
  padding: 1vh 1vw;
  border-width: 1px;
  border-radius: 5px;
`;

const Genre = styled.span`
  display: block;
`;

const Info = styled.div`
  position: relative;
  display: flex;
  margin: 2vh 0vw 0.5vh 0vw;
  justify-content: space-between;
`;

export default MovieInfo;
