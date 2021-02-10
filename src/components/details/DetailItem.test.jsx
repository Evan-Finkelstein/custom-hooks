import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailItem from './DetailItem';

describe('DetailItem component', () => {
  afterEach(() => cleanup());
  it('renders DetailItem', () => {
    const { asFragment } = render(<DetailItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
