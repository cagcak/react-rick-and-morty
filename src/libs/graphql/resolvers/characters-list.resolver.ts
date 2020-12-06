import { client } from '../../graphql';
import { CHARACTERS } from '../queries/characters';

export const charactersList$ = client.query({ query: CHARACTERS });
