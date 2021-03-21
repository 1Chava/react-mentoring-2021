import React from "react";
import styled from "styled-components";
import Logo from "../../../components/Logo";

const Footer = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3vh 3vw;
  display: flex;
  justify-content: center;
`;

export default Footer;
