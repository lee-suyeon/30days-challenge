import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import Board from '../../commons/Board';
import { useDispatch, useSelector } from 'react-redux';
import Cell from './Cell';

const CellTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-item: center;
  margin: 1.5rem 0 1rem;
`

const Result = styled.p`
  font-size: 1rem;
  text-align: center;
  em {
    font-size: 1.8rem;
    font-weight: 600;
    color: #4d55ff;
  }
`

const checkNumbers = Array(30).fill().map((v, i) => i + 1);

function CheckBox() {
  const check = useSelector(state => state.check);
  const count = check.length;

  return (
    <div style={{ width: '32%' }}>
      <Board
        title="체크 박스"
        >
        <CellTable>
          {checkNumbers.map((day, i) => <Cell key={`day${i + 1}`} day={day}></Cell>)}
        </CellTable>
        <Result><em>{count < 10 ? `0${count}` : count}</em> / 30</Result>
      </Board>
    </div>
  )
}

export default CheckBox

