import React from 'react';

import stylesheet from './FormErrorSection.scss';

export default function FormErrorSection({ error }) {
  return error && (
    <div className={stylesheet.errorContainer}>
      {error}
    </div>
  );
}
