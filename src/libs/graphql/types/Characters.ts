/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Characters
// ====================================================

export interface Characters_characters_info {
  __typename: "Info";
  /**
   * The length of the response.
   */
  count: number;
  /**
   * The amount of pages.
   */
  pages: number;
  /**
   * Number of the next page (if it exists)
   */
  next: number;
  /**
   * Number of the previous page (if it exists)
   */
  prev: number;
}

export interface Characters_characters_results {
  __typename: "Character";
  /**
   * The name of the character.
   */
  name: string;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string;
}

export interface Characters_characters {
  __typename: "Characters";
  info: Characters_characters_info;
  results: Characters_characters_results[];
}

export interface Characters {
  /**
   * Get the list of all characters
   */
  characters: Characters_characters;
}

export interface CharactersVariables {
  page?: number;
}
