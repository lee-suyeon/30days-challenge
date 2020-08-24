import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../commons/Button';
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../../module/challenge';
import Board from '../../commons/Board';

const Challenge = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1rem;
  color: #555;

  span{
    font-size: 3.5rem;
  }
  em {
    font-size: 1.5rem;
    font-weight: 500;
    color: #333;
    margin: 1.2rem 0 1rem;
  }
`;


function StartBoard() {
  const challengeInfo = JSON.parse(localStorage.getItem("challengeInfo")) || null;
  const dispatch = useDispatch();

  const onClickStart = () => {
    dispatch(showModal());
  }

  return (
    <div style={{ width: '100%' }}>
      <Board title="Challenge">
        {challengeInfo 
        ? <Challenge>
          <span style={{ fontSize: "3rem"}}>{challengeInfo.category}</span>
          <em>{challengeInfo.goal}</em>
          <p style={{ marginBottom: '1rem' }}>{challengeInfo.startDate} - {challengeInfo.endDate}</p>
          <Link to='challenge'>
            <Button title="자세히 보기" />
          </Link>
        </Challenge>

        : <Challenge>
          <span>&#128581;</span>
          <p style={{ margin: '1.2rem 0 1.5rem' }}>아직 진행중인 도전이 없습니다.</p>
          <Button onClick={onClickStart} width="30%" title="도전 시작" />
        </Challenge>}
    </Board>
  </div>
  )
}

export default StartBoard;
