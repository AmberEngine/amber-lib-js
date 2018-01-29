import React from 'react';
import { storiesOf } from '@storybook/react';

import CreditCardForm from '../src/components/CreditCardForm';

storiesOf('amber-payments', module)
  .add('renders credit card form', () => {
    return (
      <CreditCardForm />
    );
  });
