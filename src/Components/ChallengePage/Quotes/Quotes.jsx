import React, { useState } from 'react';
import styled from 'styled-components';
import Board from '../../commons/Board';
import { habitQuotes } from './habitQuotes';
import { Replay } from '@styled-icons/material-outlined/Replay'

const QuoteCont = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  p {
    width: 80%;
    font-size: 1rem;
    line-height: 1.5;
    margin: 1.5rem auto 2rem;
  }
  em {
    font-size: 0.825rem;
  }
`

const pickUpQuotes = () => {
  return habitQuotes[(Math.floor(Math.random() * habitQuotes.length))];
}

function Quotes() {
  const [ quote, setQuote ] = useState(pickUpQuotes());

  const ReloadQuote = () => {
    setQuote(pickUpQuotes());
  }

  return (
    <div style={{ width: '32%', marginTop: '1.5rem' }}>
      <Board title='오늘의 명언' icon={<Replay onClick={ReloadQuote}/>}>
        <QuoteCont>
          <p>{quote.quote}</p>
          <em>- {quote.author} -</em>
        </QuoteCont>
      </Board>
    </div>
  )
}

export default Quotes
