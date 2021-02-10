import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../../context/themeContext'


describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(<ThemeProvider><Router><Header /></Router></ThemeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
