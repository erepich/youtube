const videos = {
  items: [
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
  ]
};

export default {
  get: jest.fn(() => Promise.resolve({
    data: videos
  }))

};
