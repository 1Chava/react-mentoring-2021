import React from 'react';
import styled from 'styled-components';


const AddButton = () => {
  return (
    <Button>+ ADD MOVIE</Button>
  );
};

const Button = styled.button`
  border: none;
  background-color: rgb(85, 85, 85, 0.35);
  color: #F65261;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  float: right;
`; 

export default AddButton;
