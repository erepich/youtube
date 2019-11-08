import React from 'react';
import PropTypes from 'prop-types';
import youtube from '../apis/youtube';

interface Props {
  videoId: string;
}

const initialState = {
  commentCount: 0,
}

type State = Readonly<typeof initialState>;

class Comments extends React.Component<any, State, Props> {
  readonly state: State = initialState;

  static propTypes: { videoId: PropTypes.Requireable<string>; };

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
