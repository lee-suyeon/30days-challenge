import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal, deleteChallenge, editChallenge } from '../../module/challenge';
import NoChallenge from './Sections/NoChallenge';
import OnGoing from './Sections/OnGoing';
import ChallengeModal from '../ChallengeModal/ChallengeModal';

const MainPage = () => {
  const dispatch = useDispatch();

  const challengeInfo = useSelector(state => state.challenge.challengeInfo);
  const initial = useSelector(state => state.challenge.initial);
  const modal = useSelector(state => state.challenge.modal);

  const onClickStart = () => dispatch(showModal());
  const onClickDelete = () => dispatch(deleteChallenge());
  const onEditChallenge = () => dispatch(editChallenge());

  return (
    <div className="main-page" 
      style={{ display: 'flex', justifyContent: 'space-between'}}>
      {initial
      ? <NoChallenge 
      onClick={onClickStart}
      />
      : <OnGoing
          challengeInfo={challengeInfo}
          onClickDelete={onClickDelete}
          onEditChallenge={onEditChallenge}
        />}
      {modal && <ChallengeModal title="START CHALLENGE" />}
    </div>
  );
}

export default MainPage;
