import React from 'react';
import PropTypes from 'prop-types';
import youtube from '../apis/youtube';

class Comments extends React.Component {
  state = {
    commentCount: 0,
  }

  async componentDidMount() {
    try {
      const response = await youtube.get('/videos', {
        params: {
          id: this.props.videoId,
          part: 'id,statistics',
        },
      });

      const { statistics } = response.data.items[0];
      if (typeof statistics.commentCount !== 'undefined') {
        this.setState({
          commentCount: statistics.commentCount,
        });
      }
    } catch (e) {
      // problem with fetch
    }
  }

  render() {
    return (
      <div data-testid="comments-displayed">comments: {this.state.commentCount}</div>
    );
  }
}

export default Comments;

Comments.propTypes = {
  videoId: PropTypes.string,
};
