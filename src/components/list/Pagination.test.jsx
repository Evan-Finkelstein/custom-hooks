global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ListDisplay from './ListDisplay';
import { ThemeProvider } from '../../context/themeContext'


describe('pagination test', () => {
    it('changes page number', async () => {
        render(<ThemeProvider><ListDisplay /></ThemeProvider>);

        const nextButton = screen.getByText('next page');
        const pageNumber = screen.getByText('page 0');
        fireEvent.click(nextButton);

        return waitFor(() => {
            expect(pageNumber).toHaveTextContent('1');
        });
    });
});
