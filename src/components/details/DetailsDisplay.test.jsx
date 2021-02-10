import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import singleBreedResponse from '../../fixtures/singleBreed.json';
import DetailsDisplay from './DetailsDisplay';
import { ThemeProvider } from '../../context/themeContext'

const server = setupServer(
  rest.get('https://api.thedogapi.com/v1/images/search?api_key=f6649eee-08fa-4449-8abe-b57e7641ab6f&breed_id=1', (req, res, ctx) => {
    return res(ctx.json(singleBreedResponse));
  })
);

describe('breed by id component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('fetches and displays a breeds details', async () => {
    render(<ThemeProvider><DetailsDisplay match={{ params: { id: '1' } }} /></ThemeProvider>);

    screen.getByText('Loading...');



    return waitFor(() => {
      screen.getByText('Affenpinscher');

    });
  });
});
