import { Characters_characters } from '../../../graphql/types';

export const ALL_CHARACTERS = 'ALL_CHARACTERS';

interface AllCharactersAction {
  type: typeof ALL_CHARACTERS;
  payload: Characters_characters;
}

export type AllCharacterTypes = AllCharactersAction;
