import React, { PropTypes } from 'react';
import classNames from 'classnames';
import stylesheet from './RoundRectangle.scss';
// import Icon from '../Icon';

// default is the coral color outline
// disabled allows for default to have disabled styles
// className of 'inverted' you get white outline
// className of 'cancel' you get a gray outline
// className of 'filled' you get a filled seafoam
// className of 'filled-x' you get a filled seafoam with X
// TODO: replace stand in x for the remove
const RoundRectangle = ({ children, onClick, type, disabled, className }) => {
  const classList = classNames({
    [stylesheet.base]: true,
    [stylesheet.filled]: type === 'filled',
    [stylesheet.filledX]: type === 'filledX',
    [stylesheet.inverted]: type === 'inverted',
    [stylesheet.cancel]: type === 'cancel',
    [stylesheet.coral]: type === 'coral',
    [stylesheet.disabled]: disabled,
  }, className);

  const remove = (
    <span className={stylesheet.filledX}>
      {children}
    </span>
  );

  return (
    <div
      className={classList}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {type === 'filledX' ? remove : children}
    </div>
  );
};

RoundRectangle.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(['filled', 'inverted', 'cancel', 'filledX', 'coral']),
  disabled: PropTypes.bool,
};

export default RoundRectangle;
