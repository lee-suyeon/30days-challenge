export const POST_COMMENT = 'POST_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// 액션 생성 함수
let commentId = 1;
export const postComment = (content) => {
  return { type: POST_COMMENT,
    payload : {
      id: commentId++,
      ...content,
    }
  }
}

export const deleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    id,
  }
}

// reducer 선언
export default function comments (state = [], action){
  switch(action.type){
    case POST_COMMENT: 
      return state.concat(action.payload);
    case DELETE_COMMENT: 
      return state.filter(comment => comment.id !== action.id);
    default:
      return state;
  }
}