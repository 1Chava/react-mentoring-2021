import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import styled from 'styled-components';
import ErrorBoundary from '../../components/ErrorBoundary';
import Modal from '../../components/Modal';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [movie, setMovie] = useState({});

  const openModal = (type) => { setOpen(true); setType(type); };
  const editMovie = (type, movie) => { setOpen(true); setType(type); setMovie(movie) };
  const deleteMovie = (type, movie) => { setOpen(true); setType(type); setMovie(movie) };
  const closeModal = () => { setOpen(false); };

  return (
    <>
      <Wrapper Modal={open}>
        <ErrorBoundary>
          <Header openModal={openModal} />
          <Main editMovie={editMovie} deleteMovie={deleteMovie}/>
          <Footer />
        </ErrorBoundary>
      </Wrapper>
      <Modal open={open} type={type} closeModal={closeModal} movie={movie} />
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  ${props => props.Modal && ` filter: blur(10px); `}
`;

export default HomePage;