import { client } from '../../graphql';
import { RootState } from '../../redux/models';
import { CHARACTER } from '../queries/character';

export const character$ = (id: number) =>
  client.query<Pick<RootState, 'character'>['character']>({ query: CHARACTER, variables: { ids: [id] } });
