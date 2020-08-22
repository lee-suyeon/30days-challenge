import React from 'react';
import styled from 'styled-components';
import StartBoard from './Sections/StartBoard';


const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainPage = ({ children }) => {
  const challenge = JSON.parse(localStorage.getItem("challenge"));
  const { goal, startDate, endDate, reward } = challenge;

  return (
    <div className='main-page'>
      <Layout>
        <StartBoard />
      </Layout>
    </div>
  );
}

export default MainPage;
