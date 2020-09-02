export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const START_CHALLENGE = 'START_CHALLENGE';
export const EDIT_CHALLENGE = 'EDIT_CHALLENGE';
export const DELETE_CHALLENGE = 'DELETE_CHALLENGE';

// 액션 생성 함수
export const startChallenge = (challengeInfo) => {
  return {
    type: START_CHALLENGE,
    payload : {
      ...challengeInfo,
    }
  }
}

export const editChallenge = () => {
  return { type: EDIT_CHALLENGE }
}

export const deleteChallenge = () => {
  return { type: DELETE_CHALLENGE }
}

// 초기 상태
const initialState = {
  initial: true,
  challengeInfo: [],
};

// reducer 선언
export default function challenge (state = initialState, action){
  switch(action.type){
    case START_CHALLENGE: 
      return {
        ...state,
        initial: false,
        challengeInfo: action.payload,
      }
    case EDIT_CHALLENGE: 
      return {
        ...state,
        edit: true
      }
    case DELETE_CHALLENGE: 
      return initialState;
    default:
      return state;
  }
}