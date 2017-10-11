import React from 'react';
import classNames from 'classnames';

import stylesheet from './SquareSelect.scss';

export default function SquareSelect({ selected, hasItemsSelected = false }) {
  return (
    <span
      className={classNames(stylesheet.squareIcon, {
        [stylesheet.selected]: selected,
        'is-selected': selected, // necessary for parent access
      })}
    >
      {hasItemsSelected && '-'}
    </span>
  );
}
