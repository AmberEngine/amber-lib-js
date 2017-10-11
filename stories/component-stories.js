import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button';

storiesOf('Components', module)
  .add('button renders a button', () => {
    return (
      <Button>Yo</Button>
    );
  });
