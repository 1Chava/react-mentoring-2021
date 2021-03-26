import React from "react";
import styled from "styled-components";
import DownArrow from "./images/method-draw-image-1.svg";

const sort = [
  { id: "sort-01", name: "ALL", active: true },
  { id: "sort-02", name: "DOCUMENTARY", active: false },
  { id: "sort-03", name: "COMEDY", active: false },
  { id: "sort-04", name: "HORROR", active: false },
  { id: "sort-05", name: "CRIME", active: false },
];

const SortBy = () => {
  return (
    <Wrapper>
      <Title>SORT BY</Title>
      <Dropdown>
        <DropdownButton>
          RELEASE DATE
          <Image src={DownArrow} alt="Down arrow" />
        </DropdownButton>
        <DropdownContent>
          {sort.map(({ id, name, active }) => {
            return (
              <DropdownItem key={id} active={active}>
                {name}
              </DropdownItem>
            );
          })}
        </DropdownContent>
      </Dropdown>
    </Wrapper>
  );
};

const Image = styled.img`
  margin-left: 1vh;
`;

const Title = styled.div`
  margin: 3vh 2vw;
  color: #555555;
`;

const Wrapper = styled.div`
  display: flex;
  float: right;
  flex-direction: row;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownButton = styled.div`
  color: white;
  margin: 3vh 1vw;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

export default SortBy;
