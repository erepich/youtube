import React from 'react';
import {
  cleanup,
  fireEvent,
  waitForElement,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';

jest.mock('../apis/youtube.js', () => jest.requireActual('../__mocks__/youtube_videos.js'));

afterEach(cleanup);

describe('Simple app wrapper test', () => {
  test('Loads and displays the app', async () => {
    const { getByText } = render(<App />);

    expect(getByText('YouTube Video Search')).not.toBeNull();
  });

  test('App search results to 2', async () => {
    const { getByTestId, getAllByTestId } = render(<App />);

    fireEvent.change(getByTestId('search-text'), { target: { value: 'cars' } });
    expect(getByTestId('search-text').value).toBe('cars');

    fireEvent.submit(getByTestId('search-text'));
    const results = await waitForElement(() => getAllByTestId('comments-displayed'));
    expect(results.length).toBe(2);
  });

  test('App click sort buttons displayed', async () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('sort-relevance')).not.toBeNull();
    expect(getByTestId('sort-date')).not.toBeNull();
    expect(getByTestId('sort-rating')).not.toBeNull();
  });
});
