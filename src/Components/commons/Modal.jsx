import React from 'react';
import styled, { css } from 'styled-components';
import { Close } from '@styled-icons/material/Close';
import { confirmModal } from '../../module/modal';

const ModalOverlay = styled.div`
  position: fixed;
  left: 0; top: 0;
  width: 100%; 
  height: 100%; 
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBlock = styled.div`
  width: ${props => props.width || '550px'};
  background-color: #fff;
  border-radius: 3px;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1.6rem;
  background-color: #4d55ff;
  border-radius: 3px 3px 0 0;
  h2 {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const CloseButton = styled(Close)`
  width: 25px;
  fill: #fff;
  cursor: pointer;
`;

const Modal = ({ title, children, width, height }) => {
  return (
    <>
      <ModalOverlay>
        <ModalBlock width={width}>
          <ModalTitle>
            <h2>{title}</h2>
            <CloseButton onClick={confirmModal}/>
          </ModalTitle>
          {children}
        </ModalBlock>
      </ModalOverlay>
    </>
  );
}

export default Modal;