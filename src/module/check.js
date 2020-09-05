export const CHECK_BOX = 'CHECK_BOX';
export const CANCEL_BOX = 'CANCEL_BOX';
export const CHECK_RESET = 'CHECK_RESET';
export const CHECK_STATE = 'CHECK_STATE';

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

export const checkState = (label, day) => {
  return {
    type: CHECK_STATE,
    label,
    day
  }
}

// 초기 상태
const initialState = {
  good: [],
  soso: [],
  bad: []
};

// reducer 선언
export default function check (state = initialState, action){
  switch(action.type){
    case CHECK_BOX: 
      return state.concat(action.day);
    case CANCEL_BOX: 
      return state.filter(day => day !== action.day);
    case CHECK_STATE: 
      if(action.label === 'good'){
        return {
          ...state,
          good: state.good.concat(action.day)
        }
      } else if(action.label === 'soso'){
        return {
          ...state,
          soso: state.soso.concat(action.day)
        }
      } else {
        return {
          ...state,
          bad: state.bad.concat(action.day)
        }
      }
    case CHECK_RESET: 
      return initialState;
    default:
      return state;
  }
}