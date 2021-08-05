import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AvatarCharacters } from '../../services/MockData';
import Character from './Character';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68d1', (req, res, ctx) => {
    return res(ctx.json(AvatarCharacters[1]))
  })
);

describe.only('Avatar characters list', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a character on the home page', () => {
    const { asFragment } = render(
      <Character
        name='Analay'
        affiliation='Unnamed team'
        photoUrl='https://vignette.wikia.nocookie.net/avatar/images/c/c3/Analay.png/revision/latest?cb=20140430182201'
      />
    )
    expect(asFragment()).toMatchSnapshot();
  });
});