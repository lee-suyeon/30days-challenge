import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { checkBox, cancelBox } from '../../../module/check';

const NumberBox = styled.div`
  flex-basis: 14%;
  height: 40px;
  border-radius: 3px;
  color: ${props => props.done ? '#fff' : '#333'};
  background-color: ${props => props.done ? '#4d55ff' : '#f2f2f2'};
  font-size: 1rem;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  margin: 0 5px 5px 0;
`

function Cell ({ day }) {
  const dispatch = useDispatch();
  const [done, setDone] = useState(false);

  const onClickCell = (day) => {
    setDone(prev => !prev);
    if(done){
      dispatch(cancelBox(day));
    } else {
      dispatch(checkBox(day));
    }
  }

  return (
    <>
      <NumberBox 
      onClick={() => onClickCell(day)}
      done={done}>{day}</NumberBox>
    </>
  )
}

export default Cell
