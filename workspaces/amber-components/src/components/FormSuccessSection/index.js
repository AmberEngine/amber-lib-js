import React from 'react';

import stylesheet from './SuccessSection.scss';

export default function FormSuccessSection({ visible, children }) {
  return visible && children && (
    <div className={stylesheet.successContainer}>
      {children}
    </div>
  );
}
