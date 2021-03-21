import React from "react";
import styled from "styled-components";

const filters = [
  { name: 'ALL', active: true },
  { name: 'DOCUMENTARY', active: false },
  { name: 'COMEDY', active: false },
  { name: 'HORROR', active: false },
  { name: 'CRIME', active: false },
];

const Filter = () => {
  return (
    <ListWrapper>
      {filters.map(({name, active}) => <ListItem className={active && 'active'}> {name} </ListItem>)}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 3vh 0vw;
  float: left;
`;

const ListItem = styled.li`
  color: #FFFFFF;
  display: inline;
  padding: 3vh 1vw;
  &:hover {
    background-color: #555555;
  }
  &.active {
    border-bottom-style: solid;
    border-bottom-color: #F65261;
  }
`;

export default Filter;
