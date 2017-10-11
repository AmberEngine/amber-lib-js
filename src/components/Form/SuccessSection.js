import React from 'react';

import stylesheet from './SuccessSection.scss';

export default function SuccessSection({ visible, children }) {
  return visible && children && (
    <div className={stylesheet.successContainer}>
      {children}
    </div>
  );
}
