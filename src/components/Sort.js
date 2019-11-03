import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Sort extends React.Component {
  onClickSort = (sortby) => {
    this.props.sort(sortby);
  }

  render() {
    return (
      <div className="ui segment">
        <b>Sort by:</b>&nbsp;
        <Button datatestid="relevance" onClickButton={ () => this.onClickSort('relevance') } >
          relevance
        </Button>
        &nbsp;
        <Button datatestid="rating" onClickButton={ () => this.onClickSort('rating') } >
          rating
        </Button>
        &nbsp;
        <Button datatestid="date" onClickButton={ () => this.onClickSort('date') } >
          date
        </Button>
    </div>
    );
  }
}

export default Sort;

Sort.propTypes = {
  sort: PropTypes.func.isRequired,
};
