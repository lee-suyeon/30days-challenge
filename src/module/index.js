import { combineReducers } from 'redux';
import challenge from './challenge';
import comments from './comments';

const rootReducer = combineReducers({
  challenge,
  comments,
})

export default rootReducer;