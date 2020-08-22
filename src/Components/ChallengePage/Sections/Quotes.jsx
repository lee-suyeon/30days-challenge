import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Board from '../../commons/Board';

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

const habitQuotes = [
  { author: '빅토르 마리 위고', quote: '노력을 중단하는 것보다 더 위험한 것은 없다. 습관은 버리기는 쉽지만, 다시 들이기는 어렵다.'},
  { author: '파스칼', quote: '누구나 결점이 그리 많지는 않다. 결점이 여러 가지인 것으로 보이지만 근원은 하나다. 한 가지 나쁜 버릇을 고치면 다른 버릇도 고쳐진다. 한 가지 나쁜 버릇은 열 가지 나쁜 버릇을 만들어낸다는 것을 잊지 말라.'},
  { author: '디오도어 루빈', quote: '만일 의식적으로 좋은 습관을 형성하려고 노력하지 않으면 자신도 모르는 사이에 좋지 못한 습관을 지니게 된다.'},
  { author: '아미엘', quote: '생활은 습관이 짜낸 천에 불과하다.'},
  { author: '새뮤얼 스마일스', quote: '습관은 나무 껍질에 새겨놓은 문자 같아서 그 나무가 자라남에 따라 확대된다.'},
  { author: '린든 베인스 존슨', quote: '습관의 쇠사슬은 거의 느끼지 못할 만큼 가늘다. 그것을 깨달았을 때는 끊을 수 없을 정도로 이미 굳고 단단해져 있다.'},
  { author: '도스토예프스키', quote: '습관이란 인간으로 하여금 어떤 일이든지 하게 만든다.'},
  { author: '제임스', quote: '우유부단한 것만이 습관화되어 있는 사람보다 더 비참한 사람은 없다.'},
];

const pickUpQuotes = () => {
  return habitQuotes[(Math.floor(Math.random() * habitQuotes.length))];
}

function Quotes() {
  const quote = useMemo(() => pickUpQuotes(), []);

  return (
    <div style={{ width: '32%', marginTop: '1.5rem' }}>
      <Board title='오늘의 명언'>
        <QuoteCont>
          <p>{quote.quote}</p>
          <em>- {quote.author} -</em>
        </QuoteCont>
      </Board>
    </div>
  )
}

export default Quotes
