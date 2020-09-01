import React from 'react';
import styled, { css } from 'styled-components';

const typeStyle = css`
  ${props =>
    props.color === 'primary' &&
    css`
      background-color: #4d55ff;
      color: #fff;

      &:hover {
        background-color: #646bff;
      }
    `}
`;

const StyledButton = styled.button`
  width: ${props => props.width || '100%'};
  border-radius: 3px;
  border: 1px solid #4d55ff;
  cursor: pointer;
  color: #4d55ff;
  font-size: 0.825rem;
  font-weight: 500;
  padding: 0.45rem 1rem;
  transition: 0.2s;
  outline: none;

  &:hover {
    background-color: #4d55ff;
    color: #fff;
  }

  & + & {
    margin-left: 3%;
  }

  ${typeStyle}
`;

const Button = ({ title, ...rest }) => {
  return (
    <>
      <StyledButton {...rest}>{title}</StyledButton>
    </>
  );
}

export default Button;