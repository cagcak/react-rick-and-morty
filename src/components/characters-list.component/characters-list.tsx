import React from 'react';
import { Store } from 'redux';
import { Link } from 'react-router-dom';
import { moreCharactersList$ } from '../../libs/graphql/resolvers';
import { Characters_characters_results } from '../../libs/graphql/types';
import { RootStateContext } from '../../libs/redux/models';
import { setAllCharacters } from '../../libs/redux/states';
import scrollEffect, { updateScroll } from '../../libs/utils/scrollEffect';
import { Character } from '../character.component';

export const CharactersList = (props: { store: Store }) => {
  const isPageBottom = scrollEffect();
  const {
    store,
    store: { dispatch, getState },
  } = props;
  const {
    charactersReducer: { characters },
  }: RootStateContext = getState();

  const fetchMore = (page: number) => {
    return moreCharactersList$.fetchMore({
      variables: { page },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;

        dispatch(setAllCharacters(fetchMoreResult.characters));

        return {
          characters: {
            ...previousResult?.characters,
            results: [...fetchMoreResult.characters.results],
          },
        };
      },
    });
  };

  const fetchAndStoreData = () => {
    if (!characters.info.next) return;

    fetchMore(characters.info.next).then((value) => {
      dispatch(setAllCharacters(value.data.characters));
      getElementTemplate(characters.results);
    });
  };

  const getElementTemplate = (
    results: Characters_characters_results[] = characters.results,
  ): JSX.Element | JSX.Element[] => {
    if (!Array.isArray(results) || !results.length)
      return (
        <div>
          <span>No parsable template!</span>
        </div>
      );

    return results.map(({ name, image }, index) => (
      <div key={name + '-' + index + 1} className="characters-list-wrapper">
        <Link
          to={{
            pathname: `/${index + 1}`,
          }}
        >
          <Character name={name} image={image} charId={index + 1} store={store} />
        </Link>
      </div>
    ));
  };

  React.useEffect(() => {
    if (!isPageBottom) return;

    fetchAndStoreData();
    updateScroll();
  }, [isPageBottom]);

  return getElementTemplate(characters.results);
};
