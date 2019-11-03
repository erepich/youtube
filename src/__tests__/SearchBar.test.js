import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchBar from '../components/SearchBar';

afterEach(cleanup);

describe('Simple app wrapper test', () => {
  test('Loads and displays the SearchBar', async () => {
    const onSubmit = jest.fn();
    const { getByText, getByTestId } = render(<SearchBar onSubmit={onSubmit} />);

    expect(getByText('YouTube Video Search')).not.toBeNull();

    fireEvent.submit(getByTestId('search-text'));
    expect(onSubmit).toHaveBeenCalled();

    fireEvent.change(getByTestId('search-text'), { target: { value: 'cars' } });
    expect(getByTestId('search-text').value).toBe('cars');
  });
});
