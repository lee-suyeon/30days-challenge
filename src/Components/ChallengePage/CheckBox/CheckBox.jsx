import React, { useState } from 'react'
import styled from 'styled-components';
import Board from '../../commons/Board';
import Cell from './Section/Cell';
import CheckList from './Section/CheckList';
import { MoreHoriz } from '@styled-icons/material/MoreHoriz';

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

function CheckBox({ check, onCheckBox, onCancelBox, onCheckState}) {
  const count = check.length;
  const [ good, setGood ] = useState([]);
  const [ soso, setSoso ] = useState([]);
  const [ bad, setBad ] = useState([]);

  const onClickCell = (label, day) => {
    if(label === 'good'){
      setGood(good.concat(day));
    }
  }
  
  console.log(good);

  return (
    <div style={{ width: '32%' }}>
      <Board
        title="체크 박스"
        // icon={<MoreHoriz onClick={onClickMenu}/>}
        >
        <CellTable>
          {checkNumbers
            .map((day, i) => 
              <Cell key={`day${i + 1}`} day={day}
                onCheckState={onCheckState}
                onCheckBox={onCheckBox}
                onCancelBox={onCancelBox}
              /> 
              )}
        </CellTable>
        <Result><em>{count < 10 ? `0${count}` : count}</em> / 30</Result>
      </Board>
    </div>
  )
}

export default CheckBox

