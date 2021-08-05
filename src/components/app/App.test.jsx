import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  afterEach(() => cleanup());
  it('Displays a list of characters on the home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    screen.getByText('Loading...');
    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });

  it('displays a characters details', async () => {
    render(
      <MemoryRouter initialEntries={['/5cf5679a915ecad153ab68d1']}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText('Analay');
  });
});
