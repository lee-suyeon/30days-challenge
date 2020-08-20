import React  from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/material/Close';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../module/modal';

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
  width: 550px;
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

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.5rem 1rem 2.3rem;
`

const FormBlock = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto 1.2rem;
  label{
    width: 10%;
    display: inline-block;
    color : #666;
    font-size: 0.875rem;
  }

  input {
    width: 90%;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: none;
    padding: 0.5rem;
  }

  input:focus{
    border: 1px solid #4d55ff;
  }
  `
  const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border-top: 1px solid #e8e8e8;
    padding: 0.8rem 1.6rem;
  `

const Modal = ({ children, title, size }) => {
  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(closeModal());
  }

  return (
    <>
      <ModalOverlay>
        <ModalBlock size={size}>
          <ModalTitle>
            <h2>START CHALLENGE</h2>
            <CloseButton onClick={onClickClose}/>
          </ModalTitle>

          <FormGroup>
            <FormBlock>
              <label htmlFor="goal">목표 : </label>
              <input 
                type='text'
                placeholder='목표를 입력해주세요'  
              ></input>
            </FormBlock>

            <FormBlock>
              <label htmlFor="goal">기간 : </label>
              <input
                type='date'
                style={{ width: '40%' }}
              ></input>
              <p style={{ fontSize: '0.75rem', marginLeft: '0.8rem'}}>도전 종료일은 
                <span style={{ color: '#4d55ff', fontWeight: '500' }}> 2020-08-30</span> 입니다.
              </p>
            </FormBlock>

            <FormBlock>
              <label htmlFor="reward">보상 : </label>
              <input 
                type='text'
                placeholder='보상을 입력해주세요'  
              ></input>
            </FormBlock>
          </FormGroup>

          <ButtonGroup>
            <Button title='RESET'/>
            <Button title='OK' type='primary' />
          </ButtonGroup>

        </ModalBlock>
      </ModalOverlay>
    </>
  );
}

export default Modal;