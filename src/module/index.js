import { combineReducers } from 'redux';
import challenge from './challenge';
import comments from './comments';
import check from './check';

const rootReducer = combineReducers({
  challenge,
  comments,
  check,
})

export default rootReducer;