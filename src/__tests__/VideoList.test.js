import React from 'react';
import {
  cleanup,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import VideoList from '../components/VideoList';

afterEach(cleanup);

describe('VideoList is displayed', () => {
  test('it displays list for videos', async () => {
    const videos = [
      {
        id: {
          videoId: 'A'
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
      },
      {
        id: {
          videoId: 'B'
        },
        snippet: {
          description: 'description2',
          title: 'title2',
          thumbnails: {
            medium: {
              url: 'url2'
            }
          }
        }
      }
    ];
    const { getByTestId } = render(
      <VideoList
         allVideos = {videos}
      />
    );

    expect(getByTestId('video-list')).not.toBeNull();
  });
});
