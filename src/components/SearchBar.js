import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form data-testid="searchbar-submit" onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>YouTube Video Search</label>
            <input
              data-testid="search-text"
              type="text"
              value={this.state.term}
              onChange={ (e) => this.setState({ term: e.target.value })
              }
            />
          </div>
        </form>
    </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
