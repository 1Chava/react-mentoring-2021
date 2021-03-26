import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AddButton = (props) => {
  const { onClick } = props;
  return <Button onClick={onClick}>+ ADD MOVIE</Button>;
};

const Button = styled.button`
  border: none;
  background-color: rgb(85, 85, 85, 0.35);
  color: #f65261;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  float: right;
`;

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
