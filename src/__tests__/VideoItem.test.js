import React from 'react';
import {
  cleanup,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VideoItem from '../components/VideoItem';

afterEach(cleanup);

describe('VideoItem is displayed', () => {
  test('it displays a video item', async () => {
    const video = {
      id: {
        videoId: 'ZaZa'
      },
      snippet: {
        description: 'description1',
        title: 'title1',
        thumbnails: {
          medium: {
            url: 'url1'
          }
        }
      }
    };
    const { getByTestId } = render(
      <VideoItem
        video={video}
      />
    );

    expect(getByTestId('video-item')).not.toBeNull();
    expect(getByTestId('video-item-description')).toHaveTextContent('description1');
    expect(getByTestId('video-item-link')).toHaveTextContent('title1');
  });
});
