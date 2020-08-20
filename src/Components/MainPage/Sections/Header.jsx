import React from 'react';
import styled from 'styled-components';
import { Event } from '@styled-icons/material/Event'

const HeaderBox = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 600;
  background-color: #fff;
  border-bottom: 1px solid #eeeae6;
  color: ${({ theme }) => theme.colors.mainColor};
  padding: 1rem 3rem;

  h1 {
    display: inline-block;
    vertical-align: middle;
  }
`;

const LogoIcon = styled(Event)`
  display: inline-block;
  width: 30px;
  margin-right: 0.5rem;
`

function Header () {
  return (
    <HeaderBox>
        <LogoIcon />
        <h1>30DAYS</h1>
    </HeaderBox>
  )
}

export default Header
