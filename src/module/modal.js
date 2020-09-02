export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_CONFIRM = 'TOGGLE_CONFIRM';

// 액션 생성 함수
export const showModal = () => {
  return { type: SHOW_MODAL }
}

export const closeModal = () => {
  return { type: CLOSE_MODAL }
}

export const toggleConfirm = () => {
  return { type: TOGGLE_CONFIRM }
}


// 초기 상태
const initialState = {
  modal : false,
  confirm : false,
};

// reducer 선언
export default function modal (state = initialState, action){
  switch(action.type){
    case SHOW_MODAL: 
    return {
      ...state,
      modal: true,
    }
  case TOGGLE_CONFIRM: 
    return {
      ...state,
      confirm: !action.state,
    }
  case CLOSE_MODAL: 
    return {
      ...state,
      modal: false,
    }
    default:
      return state;
  }
}