import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../commons/Button';
import Board from '../../commons/Board';
import { Challenge } from './NoChallenge';
import { Delete } from '@styled-icons/material-outlined/Delete';
import PopConfirm from '../../commons/PopConfirm';

function OnGoing({ challengeInfo, onChallengeReset, onCheckBoxReset, onCommentReset}) {
  const [ confirm, setConfirm ] = useState(false);
  const { category, goal, startDate, endDate } = challengeInfo;

  const onToggleConfirm = () => {
    setConfirm(prev => !prev)
  }
  
  const onConfirm = () => {
    onChallengeReset();
    onCheckBoxReset();
    onCommentReset();
    setConfirm(prev => !prev);
  }

  return (
    <div style={{ width: '100%' }}>
      <Board type='main' title="Challenge" icon={<Delete onClick={onToggleConfirm}/>}>
        {confirm && 
          <PopConfirm
            message='진행중인 도전을 삭제하시겠습니까?'
            onCancel={onToggleConfirm}
            onConfirm={onConfirm}
          />}
        <Challenge>
          <span>{category}</span>
          <em>{goal}</em>
          <p style={{ marginBottom: '1.5rem' }}>{startDate} ~ {endDate}</p>
            <Link to='challenge'>
              <Button color='primary' title="자세히 보기" />
            </Link>
        </Challenge>
    </Board>

  </div>
  )
}

export default OnGoing
