import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { editChallenge } from '../../module/challenge';
import { postComment, deleteComment } from '../../module/comments'
import { checkBox, cancelBox } from '../../module/check'
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
  const modal = useSelector(state => state.challenge.modal);
  const onEditChallenge = () => dispatch(editChallenge());
  
  // comments action
  const commentData = useSelector(state => state.comments);
  const onPostComment = (content) => dispatch(postComment(content));
  const onDeleteComment = (id) => dispatch(deleteComment(id));

  // check
  const check = useSelector(state => state.check);
  const onCheckBox = (day) => dispatch(checkBox(day));
  const onCancelBox = (day) => dispatch(cancelBox(day));

  return (
    <div>
      <Col>
        <ChallengeInfo 
          challengeInfo={challengeInfo}
          onEditChallenge={onEditChallenge}
        />
        <CheckBox 
          check={check}
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
        />
        <Quotes />
      </Col>
      {modal && <ChallengeModal title='EDIT CHALLENGE' challengeInfo={challengeInfo} />}
    </div>
  )
}

export default ChallengePage
