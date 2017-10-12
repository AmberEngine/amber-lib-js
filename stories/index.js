import React from 'react';
import { storiesOf } from '@storybook/react';

require('./components');

storiesOf('Storybook', module)
  .add('renders a div', () => {
    return (
      <div>Yo</div>
    );
  });
