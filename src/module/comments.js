export const POST_COMMENT = 'POST_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_ALL = 'DELETE_ALL';

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

export const deleteAllComment = () => {
  return { type: DELETE_ALL }
}

const initialState = [];

// reducer 선언
export default function comments (state = initialState, action){
  switch(action.type){
    case POST_COMMENT: 
      return state.concat(action.payload);
    case DELETE_COMMENT: 
      return state.filter(comment => comment.id !== action.id);
    case DELETE_ALL: 
      return initialState;
    default:
      return state;
  }
}