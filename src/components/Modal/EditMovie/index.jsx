import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Calendar from "../Image/method-draw-image.svg";

const getFormattedDate = (date) => {
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return month + "/" + day + "/" + year;
}

const focusOnDate = (event) => {
  event.target.type = "date";
};

const changeToDate = (event) => {
  if (!event.target.value) event.target.type = "text";
};

const EditMovie = (props) => {
  const { closeModal, movie } = props;
  const {
    id,
    title,
    genre,
    date,
    url,
    overview,
    runtime,
  } = movie;
  return (
    <>
      <Close onClick={() => closeModal()}>&times;</Close>
      <Title>EDIT MOVIE</Title>
      <Form>
        <Label>MOVIE ID</Label>
        <Label pants>
          {id}
        </Label>
        <Label htmlFor="title">TITLE</Label>
        <Input id="title" placeholder="Title here" value={title} />
        <Label htmlFor="date">RELEASE DATE</Label>
        <DateWrapper>
          <Input
            id="date"
            type="text"
            placeholder="Select Date"
            value={getFormattedDate(date)}
            onFocus={focusOnDate}
            onBlur={changeToDate}
            onChange={changeToDate}
          />
          <Image src={Calendar} alt="Calendar icon" />
        </DateWrapper>
        <Label htmlFor="url">MOVIE URL</Label>
        <Input id="url" placeholder="Movie URL here" value={url} />
        <Label htmlFor="genre">Genre</Label>
        <Select id="genre" name="genre">
          <Option value={genre} disabled selected>
            {genre}
          </Option>
          <Option value="documentary">Documentary</Option>
          <Option value="comedy">Comedy</Option>
          <Option value="horror">Horror</Option>
          <Option value="crime">Crime</Option>
        </Select>
        <Label htmlFor="overview">OVERVIEW</Label>
        <Input id="overview" placeholder="Overview here" value={overview} />
        <Label htmlFor="runtime">RUNTIME</Label>
        <Input id="runtime" placeholder="Runtime here" value={runtime} />
        <ButtonWrapper>
          <Button
            id="reset"
            type="submit"
            placeholder="Select Date"
            value="RESET"
          />
          <Button
            id="submit"
            type="submit"
            placeholder="Select Date"
            value="SAVE"
          />
        </ButtonWrapper>
      </Form>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 2em;
  margin: 5vh 5vw;
  color: #ffffff;
  font-weight: lighter;
`;

const Image = styled.img`
  width: 2vw;
  height: 2vw;
  color: #f65261;
  z-index: 99;
  margin-left: -2.5em;
`;

const Label = styled.label`
  color: ${(props) => (props.pants ? "#FFFFFF" : "#f65261")};
  font-size: ${(props) => (props.pants ? "1.3em" : "1em")};
  margin: 1vh 0vw;
`;

const Button = styled.input`
  color: #ffffff;
  margin: 2em 0.5em;
  background-color: rgb(66, 66, 66, 0.3);
  border-radius: 5px;
  border-color: transparent;
  height: 3em;
  width: 10em;
  font-size: 1.3em;
  ${(props) =>
    props.id === "reset" &&
    `
    margin: 2em 0.5em 2em 0.5em;
    background-color: transparent;
    border-color: #f65261;
    color: #F65261;
    :hover {
      background-color: #F65261;
      border-color: transparent;
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
  `}
  ${(props) =>
    props.id === "submit" &&
    `
    margin: 2em 0em 2em 0.5em;
    background-color: #F65261;
    :hover {
      border-color: #f65261;
      background-color: transparent;
      color: #F65261;
      text-decoration: none;
      cursor: pointer;
    }
  `}
`;

const Input = styled.input`
  color: #ffffff;
  margin: 1vh 0vw;
  background-color: rgb(66, 66, 66, 0.3);
  border-radius: 5px;
  border-color: transparent;
  height: 3em;
  width: 100%;
  padding: 1em;
  padding-right: 2.5em;
  font-size: 1.3em;
`;

const Select = styled.select`
  color: #ffffff;
  margin: 1vh 0vw;
  background-color: rgb(66, 66, 66, 0.3);
  border-radius: 5px;
  border-color: transparent;
  height: 3em;
  width: 100%;
  padding: 0em 1em;
  font-size: 1.3em;
`;

const Option = styled.option`
  color: #ffffff;
  background-color: #232323;
  font-size: 1em;
  font-weight: lighter;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.div`
  margin: 5vh 5vw;
  display: flex;
  flex-direction: column;
`;

const Close = styled.span`
  color: #ffffff;
  float: right;
  font-size: 3em;
  :hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

EditMovie.propTypes = {
  closeModal: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};

export default EditMovie;
