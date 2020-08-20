import React from 'react';
import styled from 'styled-components';
import ChallengeInfo from './Sections/ChallengeInfo';
import ProgressInfo from './Sections/ProgressInfo';
import CheckBox from './Sections/CheckBox';

const Col = styled.div`
  display: flex;
  justify-content: space-between;
`

function ChallengePage() {
  return (
    <div>
      <Col>
        <ChallengeInfo />
        <CheckBox />
        <ProgressInfo />
      </Col>
    </div>
  )
}

export default ChallengePage
