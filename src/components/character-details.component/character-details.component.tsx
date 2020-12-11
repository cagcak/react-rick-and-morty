import { useHistory } from 'react-router-dom';
import { Store } from 'redux';
import { Character } from '../character.component';
import { RootStateContext } from '../../libs/redux/models';
import { setCharacter } from '../../libs/redux/states';
import React from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER } from '../../libs/graphql/queries';

interface Props {
  store: Store;
}

export const CharacterDetails = ({ store }: Props) => {
  const history = useHistory();
  const charId = +history.location.pathname.substr(1);
  const {
    characterReducer: { character },
  }: RootStateContext = store.getState();

  const goHome = () => history.push('/');

  const getCharacterDetails = () => {
    return (character?.charactersByIds || []).find((char) => (char as typeof char & { id: number }).id === charId);
  };

  const getElementTemplate = (): JSX.Element => {
    const { loading, error, data } = useQuery(CHARACTER, { variables: { ids: [charId] } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (!data) return <p>No data found</p>;

    store.dispatch(setCharacter(data, charId));

    const currentCharacter = getCharacterDetails();

    if (!currentCharacter) return <p>No data found</p>;

    return (
      <div className="character-details" id={'item-' + charId}>
        <button type="button" onClick={goHome}>
          Go home
        </button>
        <Character
          name={currentCharacter.name}
          image={currentCharacter.image}
          location={currentCharacter.location}
          episode={currentCharacter.episode}
          charId={charId}
          store={store}
        />
      </div>
    );
  };

  return getElementTemplate();
};
