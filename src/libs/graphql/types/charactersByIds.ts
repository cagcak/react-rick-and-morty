/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: charactersByIds
// ====================================================

export interface charactersByIds_charactersByIds_location {
  __typename: "Location";
  /**
   * The name of the location.
   */
  name: string | null;
}

export interface charactersByIds_charactersByIds_episode {
  __typename: "Episode";
  /**
   * The name of the episode.
   */
  name: string | null;
  /**
   * The code of the episode.
   */
  episode: string | null;
  /**
   * The air date of the episode.
   */
  air_date: string | null;
}

export interface charactersByIds_charactersByIds {
  __typename: "Character";
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * The character's last known location
   */
  location: charactersByIds_charactersByIds_location | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (charactersByIds_charactersByIds_episode | null)[] | null;
}

export interface charactersByIds {
  /**
   * Get a list of characters selected by ids
   */
  charactersByIds: (charactersByIds_charactersByIds | null)[] | null;
}

export interface charactersByIdsVariables {
  ids: string[];
}
