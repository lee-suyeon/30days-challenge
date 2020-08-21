import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Flag } from '@styled-icons/material/Flag'
import { CalendarToday } from '@styled-icons/material/CalendarToday'
import { EmojiEvents } from '@styled-icons/material/EmojiEvents'
import Button from '../../commons/Button';
import Board from '../../commons/Board';
import { showModal } from '../../../module/challenge';

const InfoList = styled.li`
  margin-bottom: 1.1rem;
  em {
    display: block;
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.7rem;
  }
  span {
    display: inline-block;
    width: 30px;
    text-align: center;
    margin-right: 0.3rem;
  }
  svg {
    width: 27px;
    fill: #4d55ff;
    margin-bottom: 0.3rem;
  }
`

function ChallengeInfo() {
  const dispatch = useDispatch();
  const challenge = JSON.parse(localStorage.getItem("challenge"));
  const { goal, startDate, endDate, reward } = challenge;

  const onClickEdit = () => {
    console.log('click')
    dispatch(showModal());
  }

  return (
    <div style={{ width: '32%'}}>
      <Board title='도전 내용'>
        <ul style={{ marginTop: '1.5rem' }}>
          <InfoList>
            <em>목표</em>
            <p><span><Flag/></span>{goal} </p>
          </InfoList>
          <InfoList>
            <em>기간</em>
            <p><span><CalendarToday style={{ width: '22px'}}/></span>{startDate} - {endDate}</p>
          </InfoList>
          <InfoList>
            <em>보상</em>
            <p><span><EmojiEvents/></span>{reward} </p>
          </InfoList>
        </ul>
        <Button title='EDIT' onClick={onClickEdit}></Button>
      </Board>
    </div>
  )
}

export default ChallengeInfo
