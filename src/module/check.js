export const CHECK_BOX = 'CHECK_BOX';
export const CANCEL_BOX = 'CANCEL_BOX';
export const CHECK_RESET = 'CHECK_RESET';

// 액션 생성 함수
export const checkBox = (day) => {
  return {
    type: CHECK_BOX,
    day,
  }
}

export const cancelBox = (day) => {
  return {
    type: CANCEL_BOX,
    day,
  }
}

export const checkReset = (day) => {
  return {
    type: CHECK_RESET,
    day,
  }
}

// 초기 상태
const initialState = [];

// reducer 선언
export default function check (state = initialState, action){
  switch(action.type){
    case CHECK_BOX: 
      return state.concat(action.day);
    case CANCEL_BOX: 
      return state.filter(day => day !== action.day);
    case CHECK_RESET: 
      return initialState;
    default:
      return state;
  }
}