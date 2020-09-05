import React, { useState } from 'react'
import styled from 'styled-components';
import { Done } from '@styled-icons/material/Done'
import { useSelector, useDispatch } from 'react-redux';
import { showModal, closeModal } from '../../../../module/modal';

import CheckList from './CheckList';

const NumberBox = styled.div`
  position: relative;
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
`

function Cell ({ day, done, onCheckBox, onCancelBox, onClickLocal, onCheckState }) {
  const dispatch = useDispatch();
  const [ visible, setVisible ] = useState(false);

  const onPopup = () => {
    setVisible(prev => !prev);
  }

  return (
    <>
      <NumberBox 
      onClick={onPopup} done={done}
      >{done ? <Done style={{ width: '25px' }}/> : day}
        {visible && <CheckList day={day} onCheckState={onCheckState}/>}
      </NumberBox>
    </>
  )
}

export default Cell
