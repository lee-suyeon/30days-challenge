export const CHECK_BOX = 'CHECK_BOX';
export const CHECK_RESET = 'CHECK_RESET';

// 액션 생성 함수
export const checkBox = (label, day) => {
  return {
    type: CHECK_BOX,
    label,
    day,
  }
}

export const checkReset = () => {
  return { type: CHECK_RESET }
}

// 초기 상태
const initialState = {
  cellData : new Array(30),
};

// reducer 선언
export default function check (state = initialState, action){
  switch(action.type){
    case CHECK_BOX: 
      const cellData = state.cellData;
      cellData[action.day - 1] = action.label;
      return {
        ...state,
        cellData,
      }
    case CHECK_RESET: 
      return initialState;
    default:
      return state;
  }
}