import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('button renders a button for each type', () => {
    const buttonContent = ['login', 'export', 'import', 'importNew', 'logout'].map(name => {
      return (
        <span key={name} style={{ paddingRight: '10px' }}>
          <Button type={name}>
            {name}!
          </Button>
        </span>
      );
    });

    return (
      <div>
        {buttonContent}
      </div>
    );
  });
