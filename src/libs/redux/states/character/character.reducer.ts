import { INITIAL_STATE, RootState } from '../../models';
import { CHARACTER, CharacterTypes } from './character.types';

const initialState: RootState = INITIAL_STATE;

export const characterReducer = (state = initialState, action: CharacterTypes): RootState => {
  switch (action.type) {
    case CHARACTER: {
      const currentCharacter = action.payload.charactersByIds.map((char) => ({ ...char, id: action.id }));

      return {
        ...state,
        character: {
          charactersByIds: [...state.character.charactersByIds, ...currentCharacter],
        },
      } as RootState;
    }

    default:
      return state;
  }
};

export default characterReducer;
