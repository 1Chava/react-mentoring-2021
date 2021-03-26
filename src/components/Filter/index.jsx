import React from "react";
import styled from "styled-components";

const filters = [
  { id: "filt-01", name: "ALL", active: true },
  { id: "filt-02", name: "DOCUMENTARY", active: false },
  { id: "filt-03", name: "COMEDY", active: false },
  { id: "filt-04", name: "HORROR", active: false },
  { id: "filt-05", name: "CRIME", active: false },
];

const Filter = () => {
  return (
    <ListWrapper>
      {filters.map(({ id, name, active }) => (
        <ListItem key={id} className={active && "active"}>
          {" "}
          {name}{" "}
        </ListItem>
      ))}
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
  color: #ffffff;
  display: inline;
  padding: 3vh 1vw;
  &:hover {
    background-color: #555555;
  }
  &.active {
    border-bottom-style: solid;
    border-bottom-color: #f65261;
  }
`;

export default Filter;
