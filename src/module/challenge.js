import initialState from './store/initialState'

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const START_CHALLENGE = 'START_CHALLENGE';

// 액션 생성 함수
export const showModal = () => {
  return { type: SHOW_MODAL }
}

export const closeModal = () => {
  return { type: CLOSE_MODAL }
}

let nextId = 1;
export const startChallenge = (challengeInfo) => {
  return {
    type: START_CHALLENGE,
    id: nextId++,
    challengeInfo,
  }
}

// reducer 선언
export default function challenge (state = [], action){
  switch(action.type){
    case SHOW_MODAL: 
      return {
        ...state,
        modal: true,
      }
    case CLOSE_MODAL: 
      return {
        ...state,
        modal: false,
      }
    case START_CHALLENGE: 
      return {
        ...state,
        challengeInfo: action.challengeInfo
      }
    default:
      return state;
  }
}