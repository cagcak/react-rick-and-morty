import { INITIAL_STATE, StoreModel } from '../../models';
import { ALL_CHARACTERS } from './characters.types';

export const charactersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload.characters,
      } as StoreModel;

    default:
      return state;
  }
};

export default charactersReducer;
