import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

interface Props {
  sort: CallableFunction;
}

class Sort extends React.Component<Props> {
  onClickSort = (sortby: string) => {
    this.props.sort(sortby);
  }
  static propTypes: { sort: PropTypes.Validator<(...args: any[]) => any>; };

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
