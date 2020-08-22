import React, { useState, useMemo, useRef } from 'react';
import styled from 'styled-components';
import Board from '../../commons/Board';
import Button from '../../commons/Button';
import { useSelector, useDispatch } from 'react-redux';
import { postComment, deleteComment } from '../../../module/comments';
import { AssignmentLate } from '@styled-icons/material-outlined/AssignmentLate';
import { Close } from '@styled-icons/material-outlined/Close'

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  select {
    width: 7%;
    font-size: 1.2rem;
  }
  input {
    width: 80%;
    border: none;
    border-bottom: 1px solid #333;
  }
  input:focus {
    outline: none;
    border-bottom: 1.5px solid #4d55ff;
  }
`

const CommentList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  padding: 0.7rem;
  font-size: 1rem;
  span {
    width: 20%;
    text-align: right;
    font-size: 0.8rem;
    color: #666;
  }
  &:hover {
    background-color: #f2f2f2;
    border-radius: 3px;
  }
  &:hover > svg {
    visibility: visible;
  }
`
const Delete = styled(Close)`
  width: 2.5rem;
  padding: 0.3rem 0.5rem;
  fill: #4d55ff;
  visibility: hidden;
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

const convertDateString = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : `0${month}`
  let day = date.getDate();
  day = day >= 10 ? day : `0${day}`
  return `${year}-${month}-${day}`
}

const getToday = () => {
  let today = new Date();
  return convertDateString(today);
}

const emojiOptions = [
  { value: 0, emoji: '😀'},
  { value: 1, emoji: '😂'},
  { value: 2, emoji: '😭'},
  { value: 3, emoji: '😡'},
  { value: 4, emoji: '😷'},
  { value: 5, emoji: '🥱'},
]

function Comment() {
  const dispatch = useDispatch();
  const commentData = useSelector(state => state.comments);
  console.log('data', commentData.length);

  const [ comment, setComment ] = useState('');
  const [ visible, setVisible ] = useState(false);
  const [ emoji, setEmoji ] = useState(emojiOptions[0].emoji);
  const today = useMemo(() => getToday(), []);
  const inputRef = useRef(null);

  const onChangeEmoji = (e) => {
    console.log('emoji',e);
    setEmoji(e.target.value);
  }

  const onChangeComment = (e) => {
    setComment(e.target.value);
  }

  const onSubmitComment = (e) => {
    e.preventDefault();

    dispatch(postComment(emoji, comment));
    setComment('');
    setVisible(true);
    inputRef.current.focus();
  }

  const onClickDelete = (id) => {
    console.log('id', id)
    dispatch(deleteComment(id));
  }

  return (
    <div style={{ width: '66%' , marginTop: '1.5rem' }}>
     <Board title="한줄 코멘트">
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'auto', margin: '0.5rem 0 1.5rem' }}>
          {commentData.length === 0 ? 
            <NoComment>
              <AssignmentLate style={{ width: '80px', fill: '#c8c8c8'}}/>
              <p>작성된 코멘트가 없습니다.</p>
            </NoComment> :
            <ul>
              {commentData.map(comment => 
                <CommentList id={comment.id} onClick={() => onClickDelete(comment.id)}>
                  <em style={{ width: '7%' }}>{comment.emoji}</em>
                  <p style={{ width: '100%' }}>{comment.comment}</p>
                  <span>{today}</span>
                  <Delete />
                </CommentList>)}
            </ul>
          }
        </div>
        <Form onSubmit={onSubmitComment}>
          <select
            value={emoji}
            onChange={onChangeEmoji}
            >
            {emojiOptions.map((item) => (
              <option key={`${item.value}`} value={item.emoji}>{item.emoji}</option>
            ))}
          </select>
          <input 
            type='text' 
            value={comment}
            onChange={onChangeComment}
            ref={inputRef}
            maxLength='100'
            placeholder='코멘트를 입력해주세요'
            />
          <Button type='submit' title='댓글' color='primary' />
        </Form>
      </Board> 
    </div>
  )
}

export default Comment;
