import React from 'react';
import styled from 'styled-components';
import ChallengeInfo from './Sections/ChallengeInfo';
import ProgressInfo from './Sections/ProgressInfo';
import CheckBox from './Sections/CheckBox';
import Comment from './Sections/Comment'
import Quotes from './Sections/Quotes'

const Col = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

function ChallengePage() {
  return (
    <div>
      <Col>
        <ChallengeInfo />
        <CheckBox />
        <ProgressInfo />
        <Comment />
        <Quotes />
      </Col>
    </div>
  )
}

export default ChallengePage
