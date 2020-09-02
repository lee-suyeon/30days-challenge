import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import { Error } from '@styled-icons/material/Error';

const Position = styled.div`
  position: absolute;
  top: 30px; right: 60px;
`

const MessageBlock = styled.div`
  position: relative;
  background: #fff;
  font-size: 0.85rem;
  box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
  padding: 1rem;
  line-height: 1.5;

  &::after {
    content: '';
    position: absolute;
    top: 4px; right: -4px;
    width: 8px;
    height: 8px;
    background: #fff;
    transform: rotate(45deg);
  }
  svg {
    width: 17px;
    fill: #4d55ff;
    margin: 0 0.2rem 0.2rem 0;
  }
`
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`

function PopConfirm({ onCancel, onConfirm }) {
  return (
    <Position>
      <MessageBlock>
        <div style={{ padding: '0.5rem 0.5rem 1rem'}}>
          <p><Error /> 작성된 코멘트를 모두 삭제하시겠습니까? </p>
        </div>
        <ButtonGroup>
          <Button title="취소" size='small' onClick={onCancel}/>
          <Button title="확인" size='small' color='primary' onClick={onConfirm}/>
        </ButtonGroup>
      </MessageBlock>
    </Position>
  )
}

export default PopConfirm
