import React, { useState } from 'react';
import styled from 'styled-components';
import StartBoard from './Sections/StartBoard';
import Modal from '../commons/Modal';
import { useDispatch, useSelector } from 'react-redux'


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
    <div className='main-page'>
      <Layout>
        <StartBoard />
      </Layout>
      {modal.modal && <Modal />}
    </div>
  );
}

export default MainPage;
