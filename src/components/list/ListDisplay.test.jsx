import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import allBreedResponse from '../../fixtures/allBreeds.json';
import ListDisplay from './ListDisplay';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../../context/themeContext'


const server = setupServer(
    rest.get('https://api.thedogapi.com/v1/breeds?api_key=f6649eee-08fa-4449-8abe-b57e7641ab6f&limit=15&page=0', (req, res, ctx) => {
        return res(ctx.json(allBreedResponse));
    })
);

describe('breed by id component', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches and displays a breeds details', async () => {
        render(<ThemeProvider><Router><ListDisplay /></Router></ThemeProvider>);

        screen.getByText('Loading...');



        return waitFor(() => {
            screen.getByText('Affenpinscher');

        });
    });
});
