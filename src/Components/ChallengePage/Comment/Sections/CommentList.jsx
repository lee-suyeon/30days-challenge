import React, { useCallback } from 'react'
import styled from 'styled-components';
import { Close } from '@styled-icons/material-outlined/Close'

const List = styled.li`
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

function CommentList({ comment, today, onDeleteComment }) {

  const onClickDelete = useCallback((id) => {
    onDeleteComment(id);
  }, []);

  return (
    <List id={comment.id} >
      <em style={{ width: '7%' }}>{comment.emoji}</em>
      <p style={{ width: '100%' }}>{comment.comment}</p>
      <span>{today}</span>
      <Delete onClick={() => onClickDelete(comment.id)}/>
    </List>
  );
}

export default CommentList
