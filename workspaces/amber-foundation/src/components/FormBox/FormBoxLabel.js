import React from 'react';

import { EnhanceWithFileInput } from '../FileHandler';

import stylesheet from './FormBox.scss';

export default EnhanceWithFileInput(({ label, ...props }) => {
  return (
    <span
      className={stylesheet.mainAction}
      role="presentation"
      {...props}
    >
      {label}
    </span>
  );
});
