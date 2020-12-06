import { gql } from 'apollo-boost';

export const CHARACTERS = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        name
        image
      }
    }
  }
`;
