import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrapper>
      <b>netflix</b>roulette
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  color: #f65261;
  font-size: 3.5vh;
  float: left;
`;

export default Logo;
