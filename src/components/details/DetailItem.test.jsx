import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailItem from './DetailItem';
import { BrowserRouter as Router } from 'react-router-dom';

describe('DetailItem component', () => {

  const dog = {

    "weight": {
      "imperial": "6 - 13",
      "metric": "3 - 6"
    },
    "height": {
      "imperial": "9 - 11.5",
      "metric": "23 - 29"
    },
    "id": 1,
    "name": "Affenpinscher",
    "bred_for": "Small rodent hunting, lapdog",
    "breed_group": "Toy",
    "life_span": "10 - 12 years",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "origin": "Germany, France",
    "reference_image_id": "BJa4kxc4X",
    "image": {
      "id": "BJa4kxc4X",
      "width": 1600,
      "height": 1199,
      "url": "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"
    }

  }
  afterEach(() => cleanup());
  it('renders DetailItem', () => {
    const { asFragment } = render(<Router><DetailItem {...dog} /></Router>);
    expect(asFragment()).toMatchSnapshot();
  });
});
