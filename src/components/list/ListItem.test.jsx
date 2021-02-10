import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem component', () => {
  afterEach(() => cleanup());
  it('renders ListItem', () => {
    const { asFragment } = render(<ListItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
