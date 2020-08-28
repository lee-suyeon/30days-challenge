import React from 'react'
import styled from 'styled-components';

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
      >{day}</NumberBox>
    </>
  )
}

export default Cell
