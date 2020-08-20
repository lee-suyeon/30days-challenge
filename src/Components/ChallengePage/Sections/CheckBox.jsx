import React from 'react'
import styled from 'styled-components';
import Board from '../../commons/Board';

const Cell = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background-color: #d9d9d9;
  
`

const Result = styled.p`
  font-size: 1rem;
  text-align: center;

  em {
    font-size: 2rem;
    font-weight: 600;
    color: #4d55ff;
  }
`

function CheckBox() {
  return (
    <div style={{ width: '32%' }}>
      <Board
        title="체크 박스"
        >
        <div style={{ width: '100%'}}>
          <Cell></Cell>
        </div>
        <Result><em>15</em> / 30</Result>
      </Board>
    </div>
  )
}

export default CheckBox

