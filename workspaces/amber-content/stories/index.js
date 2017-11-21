import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../src/components/Icon';
import IconListing from '../src/components/Icon/IconsListing';
const availableIcons = Object.keys(IconListing);

storiesOf('amber-content', module)
  .add('renders all icons', () => {
    const iconItems = availableIcons.map(icon => {
      return (
        <tr key={icon}>
          <td><pre>{icon}</pre></td>
          <td><Icon icon={icon} /></td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {iconItems}
        </tbody>
      </table>
    );
  });
