import { Store } from 'redux';
import {
  charactersByIds_charactersByIds_episode,
  charactersByIds_charactersByIds_location,
} from '../../libs/graphql/types';

interface Props {
  store: Store;
  name: string;
  image: string;
  charId: number;
  location?: charactersByIds_charactersByIds_location;
  episode?: charactersByIds_charactersByIds_episode[];
}

export const Character = (props: Props) => {
  const { name, image, charId, episode, location } = props;

  const getCharacterBasicsElementTemplate = (): JSX.Element | undefined => {
    if (!name || !image) return;

    return (
      <div className="character-basics">
        <h3 id={'title-' + charId}>{name}</h3>
        <img id={'avatar-' + charId} src={image}></img>
      </div>
    );
  };

  const getCharacterDetailsElementTemplate = (): JSX.Element | undefined => {
    if (!Array.isArray(episode) || !location) return;

    const getLatestEpisodesOf = (array: typeof episode, latestLimit = 5) => {
      return array
        .slice()
        .sort((a, b) => new Date(b.air_date).getTime() - new Date(a.air_date).getTime())
        .filter((_, index) => index < latestLimit);
    };

    return (
      <div className="character-episodes">
        <p className="character-location">Location: {location.name}</p>
        {getLatestEpisodesOf(episode).map((ep, index) => (
          <div className="episode" key={'ep-' + index}>
            <p>
              <strong>Name</strong>: <span>{ep.name}</span>
            </p>
            <p>
              <strong>Air Date</strong>: <span>{ep.air_date}</span>
            </p>
            <p>
              <strong>Episode ID</strong>: <span>{ep.episode}</span>
            </p>
          </div>
        ))}
      </div>
    );
  };

  const getElementTemplate = (): JSX.Element => {
    return (
      <div className="character-item" id={'item-' + charId}>
        {getCharacterBasicsElementTemplate()}
        {getCharacterDetailsElementTemplate()}
      </div>
    );
  };

  return getElementTemplate();
};
