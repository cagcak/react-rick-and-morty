import { client } from '../../graphql';
import { RootState } from '../../redux/models';
import { CHARACTERS } from '../queries/characters';

export const moreCharactersList$ = client.watchQuery<Pick<RootState, 'characters'>>({
  query: CHARACTERS,
});
