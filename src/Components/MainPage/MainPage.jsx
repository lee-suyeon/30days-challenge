import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Sections/Header';
import StartBoard from './Sections/StartBoard';
import Modal from '../commons/Modal';
import { useDispatch, useSelector } from 'react-redux'

const Container = styled.div`
  width: 1200px;
  margin: 4rem auto;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
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

const MainPage = ({ children }) => {
  const modal = useSelector((state) => state.modal);
  console.log(modal.modal);

  return (
    <>
      <Header />
      <Container>
        <Welcome>
            <h2>Hi! Welcome back to the 30days!</h2>
            <span>습관을 만들기 위한 30일간의 도전을 시작해보세요.</span>
        </Welcome>
        <Layout>
          <StartBoard />
        </Layout>
        {modal.modal && <Modal />}
      </Container>
    </>
  );
}

export default MainPage;
