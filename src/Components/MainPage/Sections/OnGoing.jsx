import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../commons/Button';
import Board from '../../commons/Board';
import { Challenge } from './NoChallenge';

function OnGoing({ category, goal, startDate, endDate, reward }) {
  return (
    <div style={{ width: '100%' }}>
      <Board title="Challenge">
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
