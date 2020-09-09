import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import { Done } from '@styled-icons/material/Done'
import { ChangeHistory } from '@styled-icons/material/ChangeHistory'
import { Close } from '@styled-icons/material/Close'
import CheckList from './CheckList';

const cellStyle = css`

  ${props =>props.state === 'good' &&
    css`
      background-color: #4d55ff;
      `
    }
  ${props =>props.state === 'soso' &&
    css`
      background-color: #70a1ff;
      `
    }
  ${props =>props.state === 'bad' &&
    css`
      background-color: #ff7979;
      `
    }
`;

const NumberBox = styled.div`
  position: relative;
  flex-basis: 14%;
  width: 42px;
  height: 42px;
  border-radius: 3px;
  color: #333;
  background-color: ${props => props.state ? '#4d55ff' : '#f2f2f2'};
  font-size: 1rem;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
  margin: 0 5px 5px 0;

  & > svg { 
    width: 30px;
    fill: #fff;
  }
  ${cellStyle}
`

const getIcon = (state) => {
  switch(state){
    case "good":
      return <Done />;
    case "soso":
      return <ChangeHistory />;
    case "bad":
      return <Close />;
    default:
      return;
 }
}

const checkCategory = [
  { value: 0, icon: <Done />, label: 'good', color: '#4d55ff' },
  { value: 1, icon: <ChangeHistory />, label: 'soso', color: '#70a1ff'},
  { value: 2, icon: <Close />, label: 'bad', color: '#eb4d4b'},
]

function Cell ({ day, cellData, onCheckBox }) {
  const [ visible, setVisible ] = useState(false);

  const onPopup = () => {
    setVisible(true);
  }

  const onClose = () => {
    setVisible(false);
  }

  useEffect(() => {
    if(visible){
      window.addEventListener('click', onClose);
    }
  }, [visible]);

  return (
    <>
      <NumberBox onClick={onPopup} state={cellData[day - 1]}>
        { cellData[day - 1] != null ? getIcon(cellData[day - 1]) : day}
        {visible && <CheckList day={day} onCheckBox={onCheckBox} checkCategory={checkCategory}/>}
      </NumberBox>
    </>
  )
}

export default Cell
