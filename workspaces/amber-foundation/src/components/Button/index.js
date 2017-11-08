import React from 'react';
import classNames from 'classnames';

import stylesheet from './Button.scss';

export default function Button({ onClick, type, className, children }) {
  const buttonClass = classNames(className, stylesheet.button, {
    [stylesheet.login]: type === 'login',
    [stylesheet.export]: type === 'export',
    [stylesheet.import]: type === 'import',
    [stylesheet.importNew]: type === 'importNew',
    [stylesheet.logout]: type === 'logout',
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
