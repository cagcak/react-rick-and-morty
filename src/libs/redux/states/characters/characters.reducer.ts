import { INITIAL_STATE, RootState } from '../../models';
import { AllCharacterTypes, ALL_CHARACTERS } from './characters.types';

const initialState: RootState = INITIAL_STATE;

export const charactersReducer = (state = initialState, action: AllCharacterTypes): RootState => {
  switch (action.type) {
    case ALL_CHARACTERS:
      return state.characters.info.next === action.payload.info.next
        ? state
        : ({
            ...state,
            characters: {
              ...action.payload,
              results: [
                ...((state.characters.results.length && [...state.characters.results]) || []),
                ...action.payload.results,
              ],
            },
          } as RootState);

    default:
      return state;
  }
};

export default charactersReducer;
