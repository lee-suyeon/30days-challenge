import React  from 'react'
import styled from 'styled-components';
import { Flag } from '@styled-icons/material/Flag'
import { CalendarToday } from '@styled-icons/material/CalendarToday'
import { EmojiEvents } from '@styled-icons/material/EmojiEvents'
import { Edit } from '@styled-icons/material/Edit'
import Board from '../../commons/Board';

const InfoList = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  span {
    width: 10%;
    text-align: center;
    margin-right: 0.3rem;
  }
  em {
    width: 20%;
    color: #666;
    font-weight: 500;
  }
  svg {
    width: 25px;
    fill: #4d55ff;
    margin-bottom: 0.3rem;
  }
  p {
    width: 70%;
    font-weight: 500;
  }
  &:last-child{
    margin-bottom: 0rem;
  }
`

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background: #f2f2f2;
  border-radius: 50%;
  font-size: 2.5rem;
  margin: 0 auto;
`

function ChallengeInfo({ challengeInfo, onEditChallenge }) {
  const { category, goal, startDate, endDate, reward } = challengeInfo;

  return (
    <div style={{ width: '32%', postion: 'relative'}}>
      <Board title='도전 내용' icon={<Edit onClick={onEditChallenge}/>}>
        <Category>
          <span>{category}</span>
        </Category>
        <ul style={{ marginLeft: '1rem' }}>
          <InfoList>
            <span><Flag/></span>
            <em>목표</em>
            <p>{goal} </p>
          </InfoList>
          <InfoList>
            <span><CalendarToday style={{ width: '21px'}}/></span>
            <em>기간</em>
            <p>{startDate} ~ {endDate}</p>
          </InfoList>
          <InfoList>
            <span><EmojiEvents/></span>
            <em>보상</em>
            <p>{reward} </p>
          </InfoList>
        </ul>
      </Board>
    </div>
  )
}

export default ChallengeInfo
