import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { CHARACTERS } from '../../libs/graphql/queries';
import { Characters_characters_results } from '../../libs/graphql/types';
import { setAllCharacters } from '../../libs/redux/states';

export const CharactersList = () => {
  const { loading, error, data } = useQuery(CHARACTERS);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data found</p>;

  dispatch(setAllCharacters(data));

  const results = (data?.characters?.results || []) as Array<Characters_characters_results>;

  return results.map(({ name, image }) => (
    <div key={name} className="characters-list-wrapper">
      <h3>{name}</h3>
      <img src={image as string}></img>
    </div>
  ));
};
