import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '../../module/challenge';
import NoChallenge from './Sections/NoChallenge';
import OnGoing from './Sections/OnGoing';

const MainPage = () => {
  const dispatch = useDispatch();

  const challengeInfo = useSelector(state => state.challenge.challengeInfo);
  const { category, goal, startDate, endDate, reward } = challengeInfo;

  const onClickStart = () => dispatch(showModal());

  return (
    <div className="main-page" 
      style={{ display: 'flex', justifyContent: 'space-between'}}>
      {challengeInfo 
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
    </div>
  );
}

export default MainPage;
