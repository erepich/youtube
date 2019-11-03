import React from 'react';
import {
  cleanup,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Comments from '../components/Comments';

jest.mock('../apis/youtube.js', () => jest.requireActual('../__mocks__/youtube.js'));

afterEach(cleanup);

describe('Comments component test', () => {
  test('comments should fetch correctly', async () => {
    const { getByTestId } = render(
      <Comments
        videoId = '111111'
      />
    );

    expect(getByTestId('comments-displayed')).not.toBeNull();
  });

  test('comments does not exist', async () => {
    const { getByTestId } = render(
      <Comments
        videoId = '22222'
      />
    );

    expect(getByTestId('comments-displayed')).not.toBeNull();
  });
});
