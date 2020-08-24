import React from 'react';
import styled from 'styled-components';
import StartBoard from './Sections/StartBoard';

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainPage = () => {
  return (
    <div className='main-page'>
      <Layout>
        <StartBoard />
      </Layout>
    </div>
  );
}

export default MainPage;
