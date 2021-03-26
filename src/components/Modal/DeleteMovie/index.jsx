import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Calendar from "../Image/method-draw-image.svg";

const focusOnDate = (event) => {
  event.target.type = "date";
};

const changeToDate = (event) => {
  if (!event.target.value) event.target.type = "text";
};

const DeleteMovie = (props) => {
  const { closeModal } = props;
  return (
    <>
      <Close onClick={() => closeModal()}>&times;</Close>
      <Title>DELETE MOVIE</Title>
      <Form>
        <Label>Are you sure you want to delete this movie?</Label>
        <ButtonWrapper>
          <Button
            id="submit"
            type="submit"
            placeholder="Select Date"
            value="CONFIRM"
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

const Label = styled.label`
  color: #FFFFFF;
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

DeleteMovie.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default DeleteMovie;
