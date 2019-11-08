import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import VideoItem from './VideoItem'; // eslint-disable-line no-unused-vars

interface Props { 
  allVideos: Array<VideoProps>;
}

const VideoList = (props: Props ): any => {

  const renderItems = props.allVideos.map((video: VideoProps) => <VideoItem key={video.id.videoId} video={video} />);

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
