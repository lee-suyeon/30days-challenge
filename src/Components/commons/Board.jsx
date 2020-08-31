import React from 'react';
import styled, { css } from 'styled-components';
// import { Edit } from '@styled-icons/material-outlined/Edit'
// import { Delete } from '@styled-icons/material-outlined/Delete'

const typeStyle = css`
  ${props =>
    props.type === 'main' &&
    css`
      transition: 0.2s;
      &:hover {
        border: 1px solid #4d55ff;
      }
    `}
`;

const BaseBoard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 380px;
  background: #fff;
  padding: 2rem;
  border: 1px solid #ebebeb;

  ${typeStyle}
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #d9d9d9;
`
const Icons = styled.div`
  svg {
    width: 25px;
    fill: #c8c8c8;
    cursor: pointer;
    transition: 0.2s;
    padding: 0.1rem;
  }
  svg:hover {
    fill: #4d55ff;
  }
`

const Board = ({ children, size, title, icon, ...rest }) => {
  return (
    <>
      <BaseBoard size={size} {...rest}>
        <Title>
          <h3>{title}</h3>
          <Icons>{icon}</Icons>
        </Title>
        {children}
      </BaseBoard>
    </>
  );
}

export default Board;