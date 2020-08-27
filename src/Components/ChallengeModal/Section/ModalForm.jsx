import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import Button from '../../commons/Button';
import { categoryOptions } from './categoryOptions';

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

const getAfter30days = (date) => {
  let inputDate = new Date(date);
  let sum30days = inputDate.getDate() + 29;
  inputDate.setDate(sum30days);
  return convertDateString(inputDate);
}

const ModalForm = ({ history, challengeInfo, onStartChallenge, onCloseModal }) => {
  const today = useMemo(() => convertDateString(new Date), []);
  const [ category, setCategory ] = useState(categoryOptions[0].emoji);
  const [ goal, setGoal ] = useState('');
  const [ reward, setReward ] = useState('');
  const [ startDate, setStartDate ] = useState(today);
  const [ endDate, setEndDate ] = useState(getAfter30days(today));

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
  }, []);

  useEffect(() => {
    setEndDate(getAfter30days(startDate));
  }, [startDate])

  useEffect(() => {
    const { category, goal, reward, startDate, endDate } = challengeInfo;
    if(challengeInfo) {
      setCategory(category);
      setGoal(goal);
      setReward(reward);
      setStartDate(startDate);
      setEndDate(endDate);
    }
  }, [])

  const onSubmitForm = (e) => {
    e.preventDefault();

    let challengeInfo = {
      today,
      category,
      goal,
      reward,
      startDate,
      endDate
    }

    if(!goal){
      return alert('목표를 입력해주세요');
    } else {
      onStartChallenge(challengeInfo);
      onCloseModal();
      history.push('/challenge');
    }
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <div style={{ width: '100%', padding: '2.5rem 1rem 1.3rem'}}>
        <FormBlock>
          <label>구분 : </label>
          <select onChange={onChangeCategory} value={category} name='category'>
            {categoryOptions.map((item) => (
              <option key={`${item.value}`} value={item.emoji}>{item.emoji} - {item.label}</option>
            ))}
          </select>
        </FormBlock>

        <FormBlock>
          <label>목표 : </label>
          <input 
            type='text'
            name='goal'
            value={goal}
            onChange={onChangeGoal}
            placeholder='목표를 입력해주세요'  
          ></input>
        </FormBlock>

        <FormBlock>
          <label>기간 : </label>
          <input
            type='date'
            min={today}
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
            name='reward'
            value={reward}
            onChange={onChangeReward}
            placeholder='보상을 입력해주세요'  
          ></input>
        </FormBlock>
      </div>

      <ButtonGroup>
        <Button title='취소' onClick={onCloseModal} width='20%'/>
        <Button title='확인' type='submit' color='primary' width='20%' />
      </ButtonGroup>
    </Form>
  );
}

export default withRouter(ModalForm);