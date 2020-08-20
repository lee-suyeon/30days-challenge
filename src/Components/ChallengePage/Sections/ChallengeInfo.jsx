import React from 'react'
import styled from 'styled-components';
import { Flag } from '@styled-icons/material/Flag'
import { CalendarToday } from '@styled-icons/material/CalendarToday'
import { EmojiEvents } from '@styled-icons/material/EmojiEvents'
import Button from '../../commons/Button';
import Board from '../../commons/Board';

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

const Title = styled.h3`
  margin: 0 0 0.8rem 0.5rem;
`

function ChallengeInfo() {
  return (
    <div style={{ width: '32%'}}>
      <Board title='도전 내용'>
        <ul>
          <InfoList>
            <em>목표</em>
            <p><span><Flag/></span>공부하기 </p>
          </InfoList>
          <InfoList>
            <em>기간</em>
            <p><span><CalendarToday style={{ width: '22px'}}/></span>공부하기 </p>
          </InfoList>
          <InfoList>
            <em>보상</em>
            <p><span><EmojiEvents/></span>공부하기 </p>
          </InfoList>
        </ul>
      </Board>
    </div>
  )
}

export default ChallengeInfo
