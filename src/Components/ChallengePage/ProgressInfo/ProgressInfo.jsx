import React, { useState } from 'react'
import styled from 'styled-components';
import Board from '../../commons/Board';
import { Assessment } from '@styled-icons/material-outlined/Assessment';
import Analysis from './Sections/Analysis';

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background: #d9d9d9;
  border-radius: 3px;
  position: relative;

  &::after {
    content: '30';
    position: absolute;
    top: 35px;
    right: -8px;
    font-size: 0.9rem;
    font-weight: 500;
  }
`

const Complate = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 500;
  color: #4d55ff;
  margin-bottom: 1rem;
`

const Result = styled.p`
  font-size: 1rem;
  text-align: center;
  em {
    font-weight: 600;
    color: #4d55ff;
  }
`

const daysBetween = (d1, d2) => {
  let current = new Date(d1);
  let endDate = new Date(d2);
  const gap = current.getTime() - endDate.getTime();
  return Math.floor(gap / (1000 * 60 * 60 * 24) * -1) + 1;
}

function ProgressInfo({ cellData, challengeInfo }) {
  const { today, endDate, startDate } = challengeInfo;
  const [ visible, setVisible ] = useState(false);
  const progressRate = cellData && cellData.filter(v => v != null ).length / 30 * 100

  const onClickIcon = () => {
    setVisible(prev => !prev)
  }

  return (
    <div style={{ width: '32%' }}>
      <Board title='진행 상황' icon={<Assessment onClick={onClickIcon}/>}>
        <div style={{ width: '100%'}}>
          {visible ?
            <Analysis cellData={cellData}/> :
            <>
              <Complate>{Math.floor(progressRate)}% to complate</Complate>
                <ProgressBar>
                  <div className='current' style={{ width: `${progressRate}%`, height: '100%', borderRadius: '3px', background: '#4d55ff'}}></div>
                </ProgressBar>
            </>
          }
        </div>
        <Result><span>📢</span> 도전 종료일까지 <em>{daysBetween(today, endDate)}</em>일 남았습니다</Result>
      </Board>
    </div>
  )
}

export default ProgressInfo
