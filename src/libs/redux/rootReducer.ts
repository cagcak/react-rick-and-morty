import { combineReducers } from 'redux';
import { charactersReducer } from './states/characters';

const rootReducer = combineReducers({
  state: charactersReducer,
});

export default rootReducer;
