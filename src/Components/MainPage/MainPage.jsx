import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { showModal, toggleConfirm } from '../../module/modal';
import { deleteChallenge, editChallenge } from '../../module/challenge';
import { checkReset } from '../../module/check';
import { deleteAllComment } from '../../module/comments';
import NoChallenge from './Sections/NoChallenge';
import OnGoing from './Sections/OnGoing';
import ChallengeModal from '../ChallengeModal/ChallengeModal';

const MainPage = () => {
  const dispatch = useDispatch();

  const challengeInfo = useSelector(state => state.challenge.challengeInfo);
  const initial = useSelector(state => state.challenge.initial);
  const modal = useSelector(state => state.modal.modal);

  const onShowModal = () => dispatch(showModal());
  const onEditChallenge = () => dispatch(editChallenge());

  // 초기화
  const onChallengeReset = () => dispatch(deleteChallenge());
  const onCheckBoxReset = () => dispatch(checkReset());
  const onCommentReset = () => dispatch(deleteAllComment());


  return (
    <div className="main-page" 
      style={{ display: 'flex', justifyContent: 'space-between'}}>
      {initial
      ? <NoChallenge 
          onShowModal={onShowModal}
      />
      : <OnGoing
          challengeInfo={challengeInfo}
          onEditChallenge={onEditChallenge}
          onChallengeReset={onChallengeReset}
          onCheckBoxReset={onCheckBoxReset}
          onCommentReset={onCommentReset}
        />}
      {modal && <ChallengeModal title="START CHALLENGE" />}
    </div>
  );
}

export default MainPage;
