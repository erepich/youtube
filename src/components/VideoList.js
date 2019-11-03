import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import VideoItem from './VideoItem'; // eslint-disable-line no-unused-vars

const VideoList = ({ allVideos }) => {
  const renderItems = allVideos.map((video) => <VideoItem key={video.id.videoId} video={video} />);

  return (
  <div data-testid="video-list" className="ui segment">
    <div className="ui equal width grid">
        {renderItems}
      </div>
  </div>
  );
};

export default VideoList;

VideoList.propTypes = {
  allVideos: PropTypes.array.isRequired
};
