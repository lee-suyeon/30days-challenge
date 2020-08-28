import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../module/challenge';
import NoChallenge from './Sections/NoChallenge';
import OnGoing from './Sections/OnGoing';
import ChallengeModal from '../ChallengeModal/ChallengeModal';

const MainPage = () => {
  const dispatch = useDispatch();

  const challengeInfo = useSelector(state => state.challenge.challengeInfo);
  const modal = useSelector(state => state.challenge.modal);
  const { category, goal, startDate, endDate, reward } = challengeInfo;

  const onClickStart = () => dispatch(showModal());

  return (
    <div className="main-page" 
      style={{ display: 'flex', justifyContent: 'space-between'}}>
      {goal
      ? <OnGoing
          category={category}
          goal={goal}
          startDate={startDate}
          endDate={endDate}
          reward={reward}
        />
      : <NoChallenge 
        onClick={onClickStart}
        />}
      {modal && <ChallengeModal title="START CHALLENGE" />}
    </div>
  );
}

export default MainPage;
