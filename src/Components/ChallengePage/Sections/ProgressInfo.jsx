import React from 'react'
import styled from 'styled-components';
import Board from '../../commons/Board';

const ProgressBar = styled.div`
  width: 100%;
  height: 30px;
  background: #d9d9d9;
  border-radius: 3px;
  position: relative;

  div.current {
    width: 30%;
    height: 30px;
    border-radius: 3px;
    background: #4d55ff;
  }

  &::after {
    content: '30';
    position: absolute;
    top: 35px;
    right: -8px;
    font-size: 0.9rem;
    font-weight: 500;
  }
`

const Complate = styled.div`
  width: 100%;
  text-align: left;
  font-size: 1.4rem;
  font-weight: 500;
  color: #4d55ff;
  margin-bottom: 1rem;
`

const Result = styled.p`
  font-size: 1rem;
  text-align: center;

  em {
    font-weight: 600;
    color: #4d55ff;
  }
`

function ProgressInfo() {
  return (
    <div style={{ width: '32%' }}>
      <Board title='진행 상황'>
        <div style={{ width: '100%'}}>
          <Complate>30% to complate</Complate>
          <ProgressBar>
            <div className='current'></div>
          </ProgressBar>
        </div>
        <Result><span>📢</span> 도전 종료일까지 <em>15</em>일 남았습니다</Result>
      </Board>
    </div>
  )
}

export default ProgressInfo
