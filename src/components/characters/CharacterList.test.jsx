import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AvatarCharacters } from '../../services/MockData';
import CharacterList from './CharacterList';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10', (req, res, ctx) => {
    return res(ctx.json(AvatarCharacters))
  })
);

describe('Avatar characters list', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('Renders a list of avatar characters', async () => {
    render(
      <MemoryRouter>
        <CharacterList />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    return waitFor(() => {
      const characters = screen.getByRole('list');
      expect(characters).not.toBeEmptyDOMElement();
      expect(characters).toMatchSnapshot();
    })
  });
});