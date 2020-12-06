import { INITIAL_STATE } from '../../models';
import { ALL_CHARACTERS } from './characters.types';

export const setAllCharacters = (payload = INITIAL_STATE.characters) => {
  return {
    type: ALL_CHARACTERS,
    payload,
  };
};
