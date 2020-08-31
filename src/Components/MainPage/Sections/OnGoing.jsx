import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../../commons/Button';
import Board from '../../commons/Board';
import { Challenge } from './NoChallenge';
import { Delete } from '@styled-icons/material-outlined/Delete';

const Icons = styled.div`
  svg {
    width: 25px;
    fill: #c8c8c8;
    cursor: pointer;
    transition: 0.2s;
    padding: 0.1rem;
  }
  svg:hover {
    fill: #4d55ff;
  }
`

function OnGoing({ challengeInfo, onClickDelete, onEditChallenge }) {
  const { category, goal, startDate, endDate } = challengeInfo;

  return (
    <div style={{ width: '100%' }}>
      <Board type='main' title="Challenge" icon={<Delete onClick={onClickDelete}/>}>
        <Challenge>
          <span>{category}</span>
          <em>{goal}</em>
          <p style={{ marginBottom: '1.5rem' }}>{startDate} ~ {endDate}</p>
          <div style={{ width: '18%', display: 'flex', justifyContent: 'space-between'}}>
            <Link to='challenge'>
              <Button color='primary' title="자세히 보기" />
            </Link>
            <Button width='45%' title="수정 하기" onClick={onEditChallenge}/>
          </div>
        </Challenge>
    </Board>
  </div>
  )
}

export default OnGoing
