import { charactersByIds, Characters_characters } from '../../graphql/types';

export const INITIAL_STATE: RootState = {
  character: {
    charactersByIds: [],
  },
  characters: {
    __typename: 'Characters',
    info: {
      __typename: 'Info',
      count: 0,
      next: 1,
      pages: 0,
      prev: 0,
    },
    results: [],
  },
};

export interface RootState {
  character: charactersByIds;
  characters: Characters_characters;
}

export type RootStateContext = {
  characterReducer: RootState;
  charactersReducer: RootState;
};
