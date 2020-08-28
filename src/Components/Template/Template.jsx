import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Event } from '@styled-icons/material/Event'

const Header = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 600;
  background-color: #fff;
  border-bottom: 1px solid #eeeae6;
  color: #4d55ff;
  padding: 1rem 3rem;

  h1 {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Container = styled.div`
  width: 1200px;
  margin: 4rem auto;
`;

const Welcome = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  h2{
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
  span {
    font-size: 1rem;
    color: #666;
  }
`

const LogoIcon = styled(Event)`
  display: inline-block;
  width: 30px;
  margin-right: 0.5rem;
`

function Template ({ children }) {
  return (
    <div>
      <Header>
        <Link to='/'>
          <LogoIcon />
          <h1>30DAYS</h1>
        </Link>
      </Header>
      <Container>
        <Welcome>
          <h2>Hi! Welcome back to the 30days!</h2>
          <span>습관을 만들기 위한 30일간의 도전을 시작해보세요.</span>
        </Welcome>
        {children}
      </Container>
    </div>
  )
}

export default Template
