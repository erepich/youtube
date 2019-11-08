import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import Comments from './Comments'; // eslint-disable-line no-unused-vars

interface Props {
  video: VideoProps
}

const VideoItem= (props: Props): any => {
  const { description, thumbnails, title } = props.video.snippet;
  const { videoId } = props.video.id;
  const LINK = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="column eight wide" data-testid="video-item">
      <img className='ui image' src={thumbnails.medium.url} alt={description} />
      <div className='content'>
        <h2><a data-testid="video-item-link" target="_blank" rel="noopener noreferrer" href={LINK}>{title}</a><br /></h2>
        <h3 data-testid="video-item-description">{description}</h3>
        <Comments videoId={videoId}/>
      </div>
      <hr />
    </div>
  );
};

export default VideoItem;

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};
