import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  onClickButton: CallableFunction,  
  children: string, 
  datatestid: string
}

const Button = (props: Props): any => {
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
