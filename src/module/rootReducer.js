import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import challenge from './challenge';
import comments from './comments';
import check from './check';
import modal from './modal';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["challenge", "comments", "check"]
};

const rootReducer = combineReducers({
  challenge,
  comments,
  check,
  modal,
})

export default persistReducer(persistConfig, rootReducer);