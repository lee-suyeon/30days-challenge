import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../commons/Button';
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../../module/challenge';

const Board = styled.div`
  width: 32%;
  height: 300px;
  border-radius: 3px;
  background-color: #ffffff;
  border: 1px solid #eeeae6;
  padding: 1.5rem;
  margin-bottom: 50px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  p {
    font-size: 1rem;
    color: #555;
    margin: 1.2rem 0;
  }
`;

function StartBoard() {
  const dispatch = useDispatch();

  const onClickStart = () => {
    dispatch(showModal());
  }
  return (
    <Board>
    <h3>Challenge</h3>
    <div>
      <em style={{ fontSize: "3rem"}}>&#128581;</em>
      <p>아직 진행중인 도전이 없습니다.</p>
        <Button onClick={onClickStart} title="도전 시작" />
    </div>
  </Board>
  )
}

export default StartBoard;
