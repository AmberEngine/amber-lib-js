import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Storybook', module)
  .add('renders a div', () => {
    return (
      <div>Yo</div>
    );
  });
