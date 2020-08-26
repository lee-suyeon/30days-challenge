import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { emojiOptions } from './emojiOptions';
import Button from '../../../commons/Button';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  select {
    width: 7%;
    font-size: 1.2rem;
  }
`
const TextInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid #333;
  padding-left: 1rem;
  margin-right: 1%;

  &:focus {
    outline: none;
    border-bottom: 1px solid #4d55ff;
  }
`

function CommentForm({ onPostComment }) {
  const [ comment, setComment ] = useState('');
  const [ emoji, setEmoji ] = useState(emojiOptions[0].emoji);
  const inputRef = useRef(null);

  const onChangeEmoji = useCallback((e) => {
    setEmoji(e.target.value);
  },[]);

  const onChangeComment = useCallback((e) => {
    setComment(e.target.value);
  }, [])

  const onSubmitComment = useCallback((e) => {
    e.preventDefault();

    let content = {
      emoji,
      comment,
    }
    onPostComment(content)
    setComment('');
    inputRef.current.focus();
  }, [emoji, comment])

  return (
    <Form onSubmit={onSubmitComment}>
      <select
        value={emoji}
        onChange={onChangeEmoji}
        >
        {emojiOptions.map((item) => (
          <option key={`${item.value}`} value={item.emoji}>{item.emoji}</option>
        ))}
      </select>
      <TextInput 
        type='text' 
        value={comment}
        onChange={onChangeComment}
        ref={inputRef}
        maxLength='100'
        placeholder='코멘트를 입력해주세요'
        />
      <Button type='submit' title='댓글' width='15%' color='primary' />
    </Form>
  )
}

export default CommentForm
