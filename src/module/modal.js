import initialState from './store/initialState'

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// 액션 생성 함수
export const showModal = () => {
  return {
    type: SHOW_MODAL,
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  }
}

// reducer 선언
export default function modal(state = initialState.modal, action){
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
    default:
      return state;
  }
}