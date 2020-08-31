import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../../commons/Button';
import Board from '../../commons/Board';

export const Challenge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1rem;
  color: #555;

  span{
    font-size: 3rem;
    margin-top: 2.5rem;
  }
  em {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin: 1.8rem 0 1rem;
  }
`;

function NoChallenge({ onClick }) {

  return (
    <div style={{ width: '100%' }}>
      <Board title="Challenge">
        <Challenge>
          <span>&#128581;</span>
          <p style={{ margin: '1.2rem 0 2rem' }}>아직 진행중인 도전이 없습니다.</p>
          <Button onClick={onClick} width="10%" title="도전 시작" />
        </Challenge>
    </Board>
  </div>
  )
}

export default NoChallenge;
