import React from 'react'
import styled from 'styled-components';
import Board from '../../commons/Board';
import Cell from './Section/Cell';

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

function CheckBox({ check, onCheckBox }) {
    const count = check.cellData ? check.cellData.filter(day => day != null).length : '0';

  return (
    <div style={{ width: '32%' }}>
      <Board title="체크 박스">
        <CellTable>
          {checkNumbers
            .map((day, i) => 
              <Cell 
                key={`day${i + 1}`} 
                day={day}
                cellData={check.cellData}
                onCheckBox={onCheckBox}
              /> 
              )}
        </CellTable>
        <Result><em>{count < 10 ? `0${count}` : count}</em> / 30</Result>
      </Board>
    </div>
  )
}

export default CheckBox

