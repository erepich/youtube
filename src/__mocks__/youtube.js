const statistics = {
  items: [
    {
      statistics:
      { commentCount: 500 }
    },
  ]
};

export default {
  get: jest.fn(() => Promise.resolve({
    data: statistics
  }))

};
