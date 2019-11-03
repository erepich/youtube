import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import Sort from './Sort';
import YouTubeList from './VideoList';

class App extends React.Component {
  state = {
    youtubeVideos: [],
    sort: 'relevance',
    loading: false,
    searched: '',
    loadingError: ''
  }

  onClickSort = (sort) => {
    this.setState({ sort });
    this.onSubmit(this.state.searched);
  }

  onSubmit = async (termFromSearchBar) => {
    this.setState({
      searched: termFromSearchBar,
      loading: true,
      loadingError: ''
    });
    try {
      const response = await youtube.get('/search', {
        params: {
          q: termFromSearchBar,
          part: 'snippet',
          maxResults: 6,
          type: 'video',
          order: this.state.sort,
        },
      });

      this.setState({
        youtubeVideos: response.data.items,
        loading: false,
      });
      if (this.state.youtubeVideos.length === 0) {
        this.setState({ loadingError: 'no results. please try again.' });
      }
    } catch (e) {
      // error occured
      this.setState({ loadingError: 'there was a error loading data. please try again.' });
    }
  }

  render() {
    const { loadingError, youtubeVideos } = this.state;
    const queryResults = this.state.youtubeVideos.length > 0 ? <YouTubeList allVideos={youtubeVideos} />
      : <div>{loadingError}</div>;

    const loading = this.state.loading ? <h2>Loading...Please wait...</h2> : <div></div>;

    return (
          <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSubmit} />
            <Sort sort={this.onClickSort} />
            {loading}
            {queryResults}
          </div>
    );
  }
}

export default App;
