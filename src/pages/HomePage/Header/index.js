import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import Logo from '../../../components/Logo';
import HeaderImage from './images/header.png';
import AddButton from '../../../components/AddButton';
import SearchButton from '../../../components/SearchButton';

const Header = (props) => {
  const { openModal } = props;
  return (
    <Background>
      <Wrapper>
        <Logos>
          <Logo />
          <AddButton onClick={() => openModal('ADD')} />
        </Logos>
        <Title>FIND YOUR MOVIE</Title>
        <Bar>
          <SearchBar placeholder='What do you want to watch?' />
          <SearchButton />
        </Bar>
      </Wrapper>
    </Background>
  );
};

const Background = styled.div`
  background-image: url(${HeaderImage});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  left: 0;
  right: 0;
  top: -1px;
`;

const SearchBar = styled.input`
  width: 60vw;
  height: 9vh;
  padding: 2vw;
  font-size: 3vh;
  background-color: rgb(66, 66, 66, 0.35);
  color: black;
  border: none;
`;

const Title = styled.div`
  color: white;
  font-size: 5vh;
  margin: 3vh 10vw;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logos = styled.div`
  margin: 3vh 5vw;
  position: relative;
  display: block;
  flex-direction: row;
`;

const Bar = styled.div`
  margin: 3vh 10vw;
  margin-bottom: 6vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Header;