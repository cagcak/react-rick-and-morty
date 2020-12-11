import React from 'react';
import renderer from 'react-test-renderer';
import { Store } from 'redux';
import { CharacterDetails } from './character-details.component';

test('Link changes the class when hovered', () => {
  const store = {} as Store;
  const component = renderer.create(<CharacterDetails store={store} />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
