import React from 'react';
import moment from 'moment';

import stylesheet from './NextPaymentSection.scss';

export default function NextPaymentSection({ billing }) {
  const { amount, next_run_date: nextRunDate } = billing;
  if (!amount || !nextRunDate) {
    return null;
  }

  const nextAmount = amount.split('.')[0];
  const nextPayment = moment(new Date(nextRunDate)).format('MMMM Do');
  return (
    <div>
      <div className={stylesheet.headline}>
        NEXT PAYMENT: ${nextAmount}
      </div>
      <div>
        Auto Pay scheduled for {nextPayment}
      </div>
    </div>
  );
}
