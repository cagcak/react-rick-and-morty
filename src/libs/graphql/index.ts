import { ApolloClient, InMemoryCache } from '@apollo/client';

export * from './queries';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
  cache: new InMemoryCache(),
});
