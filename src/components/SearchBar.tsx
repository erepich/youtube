import React, { FormEvent, ChangeEvent } from 'react';
import PropTypes from 'prop-types';

interface Props {
  onSubmit: CallableFunction;
}

const initialState = {
  term: '' 
}

type State = Readonly<typeof initialState>;

class SearchBar extends React.Component<any, State, Props> {
  readonly state: State = initialState;

  onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { onSubmit } = this.props;
    
    onSubmit(this.state.term);
  }
  static propTypes: { onSubmit: PropTypes.Validator<(...args: any[]) => any>; };

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
              onChange={ (e: ChangeEvent<HTMLInputElement>) => this.setState({ term: e.target.value })
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
