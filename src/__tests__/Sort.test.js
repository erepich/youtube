import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Sort from '../components/Sort';

afterEach(cleanup);

describe('App sort buttons displayed and clickable', () => {
  test('Sort is displayed with the three buttons', async () => {
    const sort = jest.fn();
    const { getByTestId } = render(
      <Sort
        sort = {sort}
      />
    );

    expect(getByTestId('sort-relevance')).not.toBeNull();
    fireEvent.click(getByTestId('sort-relevance'));
    expect(sort).toHaveBeenCalled();
    sort.mockClear();

    expect(getByTestId('sort-date')).not.toBeNull();
    fireEvent.click(getByTestId('sort-date'));
    expect(sort).toHaveBeenCalled();
    sort.mockClear();

    expect(getByTestId('sort-rating')).not.toBeNull();
    fireEvent.click(getByTestId('sort-rating'));
  });
});
