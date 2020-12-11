import { combineReducers } from 'redux';
import { charactersReducer, characterReducer } from './states';

const rootReducer = combineReducers({
  charactersReducer,
  characterReducer,
});

export default rootReducer;
