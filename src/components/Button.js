import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClickButton, children, datatestid } = props;

  return (
        <button data-testid={`sort-${datatestid}`} className="ui button" onClick={ (e) => onClickButton(e) }>{children}</button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired
};
