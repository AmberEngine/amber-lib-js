import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown from '../src/components/Dropdown';

const dropdownOptions = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AS', label: 'American Samoa' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
];

storiesOf('Dropdown', module)
  .add('renders dropdown', () => {
    return (
      <Dropdown options={dropdownOptions} />
    );
  });
