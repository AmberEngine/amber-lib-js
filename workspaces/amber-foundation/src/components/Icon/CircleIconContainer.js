import React from 'react';
import classNames from 'classnames';

import stylesheet from './CircleIconContainer.scss';

const CircleIconContainer = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={classNames(className, stylesheet.circle)}
    >
      {children}
    </div>
  );
};

export default CircleIconContainer;
