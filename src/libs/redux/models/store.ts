import { charactersByIds_charactersByIds, Characters_characters } from '../../graphql/types';

export const INITIAL_STATE: StoreModel = {
  character: {
    __typename: 'Character',
    episode: null,
    image: null,
    location: null,
    name: null,
  },
  characters: {
    __typename: 'Characters',
    info: null,
    results: null,
  },
};

export interface StoreModel {
  character: charactersByIds_charactersByIds;
  characters: Characters_characters;
}
