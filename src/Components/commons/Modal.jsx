import React, { useState, useCallback, useMemo, useRef } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Close } from '@styled-icons/material/Close';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, startChallenge } from '../../module/challenge';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  select {
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    outline: none;
    padding: 0.5rem;
  }
  `
  const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border-top: 1px solid #e8e8e8;
    padding: 0.8rem 1.6rem;
  `

const convertDateString = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : `0${month}`
  let day = date.getDate();
  day = day >= 10 ? day : `0${day}`
  return `${year}-${month}-${day}`
}

const getToday = () => {
  let today = new Date();
  return convertDateString(today);
}

const getAfter30days = (date) => {
  let inputDate = new Date(date);
  let sum30days = inputDate.getDate() + 29;
  inputDate.setDate(sum30days);
  return convertDateString(inputDate);
}

const categoryOptions = [
  { value: 0, emoji: '🍰', label: 'diet' },
  { value: 1, emoji: '⛹️‍♀️', label: 'exercise' },
  { value: 2, emoji: '💸', label: 'money' },
  { value: 3, emoji: '📚', label: 'study' },
  { value: 4, emoji: '❌', label: "don't" },
  { value: 5, emoji: '🔥', label: 'etc' },
]

const Modal = ({ size, history }) => {
  const dispatch = useDispatch();
  const challenge = JSON.parse(localStorage.getItem("challenge")) || null;

  const today = useMemo(() => getToday(), []);
  const [category, setCategory] = useState(challenge.category);
  const [goal, setGoal] = useState(challenge.goal);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(getAfter30days(today));
  const [reward, setReward] = useState(challenge.reward);

  const onChangeCategory = useCallback((e) => {
    setCategory(e.target.value);
  },[]);

  const onChangeGoal = useCallback((e) => {
    setGoal(e.target.value);
  },[]);

  const onChangeReward = useCallback((e) => {
    setReward(e.target.value);
  },[]);

  const onChangeDate = useCallback((e) => {
    setStartDate(e.target.value);
    setEndDate(getAfter30days(e.target.value));
  },[]);

  const onClickClose = useCallback(() => {
    dispatch(closeModal());
  },[]);

  const onClickReset = useCallback(() => {
    setGoal('');
    setReward('');
    setStartDate(today);
    setEndDate(getAfter30days(today));
  },[]);

  const onSubmitForm = (e) => {
    e.preventDefault();

    let challengeInfo = {
      category,
      goal,
      startDate,
      endDate,
      reward,
    }

    if(!goal){
      return alert('목표를 입력해주세요');
    } else {
      dispatch(startChallenge(challengeInfo));
      dispatch(closeModal());
      history.push('/challenge');
      window.localStorage.setItem("challenge", JSON.stringify(challengeInfo));
    }
  }

  return (
    <>
      <ModalOverlay>
        <ModalBlock size={size}>
          <ModalTitle>
            <h2>START CHALLENGE</h2>
            <CloseButton onClick={onClickClose}/>
          </ModalTitle>

          <Form onSubmit={onSubmitForm}>
            <div style={{ width: '100%', padding: '2.5rem 1rem 1.3rem'}}>
              <FormBlock>
                <label>구분 : </label>
                <select onChange={onChangeCategory}>
                  {categoryOptions.map((item) => (
                    <option key={`${item.value}`} value={item.value}>{item.emoji} - {item.label}</option>
                  ))}
                </select>
              </FormBlock>

              <FormBlock>
                <label>목표 : </label>
                <input 
                  type='text'
                  value={goal}
                  onChange={onChangeGoal}
                  placeholder='목표를 입력해주세요'  
                ></input>
              </FormBlock>

              <FormBlock>
                <label>기간 : </label>
                <input
                  type='date'
                  min={startDate}
                  value={startDate}
                  onChange={onChangeDate}
                  style={{ width: '40%' }}
                ></input>
                <p style={{ fontSize: '0.75rem', marginLeft: '0.8rem'}}>도전 종료일은 
                  <span style={{ color: '#4d55ff', fontWeight: '500' }}> {endDate}</span> 입니다.
                </p>
              </FormBlock>

              <FormBlock>
                <label>보상 : </label>
                <input 
                  type='text'
                  value={reward}
                  onChange={onChangeReward}
                  placeholder='보상을 입력해주세요'  
                ></input>
              </FormBlock>
            </div>

            <ButtonGroup>
              <Button title='RESET' onClick={onClickReset}/>
              <Button title='OK' type='submit' color='primary' />
            </ButtonGroup>
          </Form>
        </ModalBlock>
      </ModalOverlay>
    </>
  );
}

export default withRouter(Modal);