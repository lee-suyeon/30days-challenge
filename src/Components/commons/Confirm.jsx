import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import Modal from './Modal';

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 130px;
  background: #fff;
  border-bottom: 1px solid #e8e8e8;

  p {
    font-size: 0.9rem;
    color: #333;
    line-height: 1.5;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
display: flex;
justify-content: flex-end;
width: 80%;
padding: 0.8rem 1.6rem;
margin: 0 auto;
`

function Confirm() {
  return (
      <Modal title='Confirm' width='350px' height='130px' >
        <Message>
          <span style={{ marginBottom: '1rem' }}>⚠️</span>
          <p>
            정말 삭제하시겠습니까? <br />
            한 번 삭제한 내용은 복구할 수 없습니다. 
          </p>
        </Message>
        <ButtonGroup>
          <Button title='취소' />
          <Button title='확인' color='primary' />
        </ButtonGroup>
      </Modal>
  )
}

export default Confirm
