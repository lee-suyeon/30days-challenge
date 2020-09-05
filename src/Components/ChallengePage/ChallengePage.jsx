import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { editChallenge } from '../../module/challenge';
import { postComment, deleteComment, deleteAllComment } from '../../module/comments'
import { checkBox, cancelBox, checkState } from '../../module/check'
import { showModal } from '../../module/modal'; 
import ChallengeInfo from './ChallengeInfo/ChallengeInfo';
import ProgressInfo from './ProgressInfo/ProgressInfo';
import CheckBox from './CheckBox/CheckBox';
import Comment from './Comment/Comment'
import Quotes from './Quotes/Quotes'
import ChallengeModal from '../ChallengeModal/ChallengeModal';

const Col = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

function ChallengePage() {
  const dispatch = useDispatch();

  // challenge
  const challengeInfo = useSelector(state => state.challenge.challengeInfo);
  const modal = useSelector(state => state.modal.modal);
  const edit = useSelector(state => state.challenge.edit);
  const onShowModal = () => dispatch(showModal());
  const onEditChallenge = () => dispatch(editChallenge());
  
  // comments action
  const commentData = useSelector(state => state.comments);
  const onPostComment = (content) => dispatch(postComment(content));
  const onDeleteComment = (id) => dispatch(deleteComment(id));
  const onDeleteAllComment = () => dispatch(deleteAllComment());

  // check
  const check = useSelector(state => state.check);
  const onCheckBox = (day) => dispatch(checkBox(day));
  const onCancelBox = (day) => dispatch(cancelBox(day));
  const onCheckState = (label, day) => dispatch(checkState(label, day));

  return (
    <div>
      <Col>
        <ChallengeInfo 
          challengeInfo={challengeInfo}
          onEditChallenge={onEditChallenge}
          onShowModal={onShowModal}
        />
        <CheckBox 
          check={check}
          onCheckState={onCheckState}
          onCheckBox={onCheckBox}
          onCancelBox={onCancelBox}
        />
        <ProgressInfo
          challengeInfo={challengeInfo}
          check={check}
        />
        <Comment 
          today={challengeInfo.today}
          commentData={commentData}
          onPostComment={onPostComment}
          onDeleteComment={onDeleteComment}
          onDeleteAllComment={onDeleteAllComment}
        />
        <Quotes />
      </Col>
      {modal && <ChallengeModal title='EDIT CHALLENGE' challengeInfo={challengeInfo} edit={edit}/>}
    </div>
  )
}

export default ChallengePage
