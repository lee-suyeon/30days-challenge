import React from 'react'
import styled from 'styled-components';
import { Done } from '@styled-icons/material/Done'

const NumberBox = styled.div`
  flex-basis: 14%;
  width: 42px;
  height: 42px;
  border-radius: 3px;
  color: ${props => props.done ? '#fff' : '#333'};
  background-color: ${props => props.done ? '#4d55ff' : '#f2f2f2'};
  font-size: 1rem;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
  margin: 0 5px 5px 0;

  svg {
    width: 25px;
  }
`

function Cell ({ day, done, onCheckBox, onCancelBox }) {

  const onClickCell = (day) => {
    if(done) {
      onCancelBox(day)
    } else {
      onCheckBox(day)
    }
  }

  return (
    <>
      <NumberBox 
      onClick={() => onClickCell(day)} done={done}
      >{done ? <Done /> : day}</NumberBox>
    </>
  )
}

export default Cell
