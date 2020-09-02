import React, { useState } from 'react';
import styled from 'styled-components';
import Board from '../../commons/Board';
import CommentList from './Sections/CommentList';
import CommentForm from './Sections/CommentForm';
import PopConfirm from '../../commons/PopConfirm';
import { AssignmentLate } from '@styled-icons/material-outlined/AssignmentLate';
import { Delete } from '@styled-icons/material-outlined/Delete';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  margin: 0.5rem 0 1.5rem;
`

const NoComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    font-size: 1rem;
    margin-top: 0.3rem;
    color: #666;
  }
`

function Comment({ today, commentData, onPostComment, onDeleteComment, onDeleteAll }) {
  const [ confirm, setConfirm ] = useState(false);

  const onToggleConfirm = () => {
    setConfirm(prev => !prev)
  }
  
  const onConfirm = () => {
    onDeleteAll();
    setConfirm(prev => !prev);
  }

  return (
    <div style={{ width: '66%' , marginTop: '1.5rem' }}>
      <Board title="한줄 코멘트" icon={<Delete onClick={onToggleConfirm}/>}>
        {confirm && 
          <PopConfirm 
            onCancel={onToggleConfirm}
            onConfirm={onConfirm}
          />}
        <Layout>
          {commentData.length === 0 
            ? <NoComment>
              <AssignmentLate style={{ width: '80px', fill: '#c8c8c8'}}/>
              <p>작성된 코멘트가 없습니다.</p>
            </NoComment>
            : <ul>
              {commentData.map(comment => 
                <CommentList 
                  comment={comment}
                  today={today}
                  onDeleteComment={onDeleteComment}/>)}
            </ul>}
        </Layout>
        <CommentForm onPostComment={onPostComment}/>
      </Board> 
    </div>
  );
}

export default Comment;