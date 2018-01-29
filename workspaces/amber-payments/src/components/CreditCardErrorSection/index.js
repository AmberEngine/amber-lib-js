import React from 'react';

import stylesheet from './CreditCardErrorSection.scss';

export default function CreditCardErrorSection({ error }) {
  return !error.success ? (
    <div className={stylesheet.errorContainer}>
      <div className='row'>
        <div className='col-xs-12'>
          {error.errorMessage}
        </div>
      </div>
    </div>
  ) : null;
}
