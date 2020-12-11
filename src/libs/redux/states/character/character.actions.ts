import { INITIAL_STATE } from '../../models';
import { CHARACTER } from './character.types';

export const setCharacter = (payload = INITIAL_STATE.character, id?: number) => {
  return {
    type: CHARACTER,
    id,
    payload,
  };
};
