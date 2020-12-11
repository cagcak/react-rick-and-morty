import { charactersByIds } from '../../../graphql/types';

export const CHARACTER = 'CHARACTER';

interface CharactersAction {
  type: typeof CHARACTER;
  id?: number;
  payload: charactersByIds;
}

export type CharacterTypes = CharactersAction;
