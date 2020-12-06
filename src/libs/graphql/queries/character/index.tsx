import { gql } from 'apollo-boost';

export const CHARACTER = gql`
  query charactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      name
      image
      location {
        name
      }
      episode {
        name
        episode
        air_date
      }
    }
  }
`;
