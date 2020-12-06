import { client } from '../../graphql';
import { CHARACTER } from '../queries/character';

export const character$ = client.query({ query: CHARACTER });
