import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MovieInfo = (props) => {
  const [openDots, setOpenDots] = useState(false);
  const {
    id,
    image,
    title,
    genre,
    date,
    url,
    overview,
    runtime, 
    editMovie,
    deleteMovie
  } = props;
  return (
    <Wrapper
      openDots={openDots}
      onMouseLeave={() => {
        setOpenDots(false);
      }}
    >
      <ImageWrapper>
        <Image src={image} />
        <Dots
          onClick={() => {
            setOpenDots(true);
          }}
        >
          &#8942;
        </Dots>
        <Menu openDots={openDots}>
          <Item
            close
            onClick={() => {
              setOpenDots(false);
            }}
          >
            &times;
          </Item>
          <Item
            onClick={() =>
              editMovie("EDIT", {
                id,
                image,
                title,
                genre,
                date,
                url,
                overview,
                runtime,
              })
            }
          >
            Edit
          </Item>
          <Item
            onClick={() =>
              editMovie("DELETE", {
                id,
              })
            }
          >
            Delete
          </Item>
        </Menu>
      </ImageWrapper>
      <Info>
        <Title>{title}</Title>
        <Year>{date.getFullYear()}</Year>
      </Info>
      <Genre>{genre}</Genre>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  url: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Dots = styled.div`
  display: none;
  color: #ffffff;
  font-size: 1.5em;
  background-color: #232323;
  border-color: transparent;
  border-radius: 50px;
  height: 1.5em;
  width: 1.5em;
  margin: 0.5em 0em 0em -2em;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const Item = styled.div`
  color: white;
  padding: ${(props) => (props.close ? "0em" : "1em 1.5em;")};
  padding-left: ${(props) => (props.close ? "90%" : "")};
  text-decoration: none;
  display: none;
  &:hover {
    background-color: #f65261;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: none;
  position: absolute;
  background-color: #232323;
  border-color: transparent;
  border-radius: 10px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-left: 55%;
  margin-top: 2%;
`;

const Wrapper = styled.div`
  width: 27vw;
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  &:hover ${Dots} {
    display: ${(props) => (!props.openDots ? "block" : "none")};
  }
  &:hover ${Item} {
    display: ${(props) => (props.openDots ? "block" : "none")};
  }
  &:hover ${Menu} {
    display: ${(props) => (props.openDots ? "block" : "none")};
  }
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
