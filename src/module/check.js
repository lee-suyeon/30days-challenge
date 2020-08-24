import initialState from './store/initialState'

export const CHECK_BOX = 'CHECK_BOX';
export const CANCEL_BOX = 'CANCEL_BOX';

// 액션 생성 함수
export const checkBox = (day) => {
  return {
    type: CHECK_BOX,
    payload: {
      day,
    }
  }
}

export const cancelBox = (day) => {
  return {
    type: CANCEL_BOX,
    day,
  }
}

// reducer 선언
export default function check (state = initialState.check, action){
  switch(action.type){
    case CHECK_BOX: 
      return state.concat(action.payload);
    case CANCEL_BOX: 
      return state.filter(box => box.day !== action.day);
    default:
      return state;
  }
}