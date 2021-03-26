import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

const Modal = (props) => {
  const { open, type, closeModal, movie } = props;
  if (open) return (
    <Wrapper>
      <Content>
        {type === 'ADD' && <AddMovie closeModal={closeModal} />}
        {type === 'EDIT' && movie && <EditMovie closeModal={closeModal} movie={movie} />}
        {type === 'DELETE' && <DeleteMovie closeModal={closeModal} />}
      </Content>
    </Wrapper>
  );
  return null;
};

const Wrapper = styled.div`
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const Content = styled.div`
  background-color: #232323;
  margin: 10% auto;
  padding: 20px;
  width: 60%;
`;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  movie: PropTypes.object,
};

export default Modal;