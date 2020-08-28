import React from 'react';
import styled from 'styled-components';

const BaseBoard = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 380px;
  background: #fff;
  padding: 2rem;
`

const Title = styled.h3`
  font-size: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid #d9d9d9;
`

const Board = ({ children, size, title, ...rest }) => {
  return (
    <>
      <BaseBoard size={size} {...rest}>
        <Title>{title}</Title>
        {children}
      </BaseBoard>
    </>
  );
}

export default Board;