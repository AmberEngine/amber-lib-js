import React from 'react';

import stylesheet from './ErrorSection.scss';

export default function ErrorSection({ error }) {
  return error && (
    <div className={stylesheet.errorContainer}>
      {error}
    </div>
  );
}
