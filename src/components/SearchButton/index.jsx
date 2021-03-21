import React from 'react';
import styled from 'styled-components';


const SearchButton = () => {
  return (
    <Button>Search</Button>
  );
};

const Button = styled.button`
  border-style: solid;
  border-color: #F65261;
  border-radius: 5px;
  color: white;
  background-color: #F65261;
  padding: 3vh 6vw;
  text-align: center;
  font-size: 16px;
  margin: 1vw 2vw;
  cursor: pointer;
`; 

export default SearchButton;
