import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled from 'styled-components';
import ErrorBoundary from '../../components/ErrorBoundary';

const HomePage = (props) => {
  return (
    <Wrapper>
      <ErrorBoundary>
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
`;

export default HomePage;