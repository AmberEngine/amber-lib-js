import React from 'react';
import { storiesOf } from '@storybook/react';

import './stories.scss';

import { AnalyticsProvider, Enhancers } from '../../src/components/AnalyticsProvider';

storiesOf('AnalyticsProvider', module)
  .add('component has access to analytics', () => {
    const fakeAnalytics = {
      error: (error) => {
        console.log('logged!', error);
      },
    };
    const LogComponent = Enhancers.enhanceWithAnalytics(({ analyticsProvider }) => {
      return (
        <button onClick={analyticsProvider.error('error!')}>
          Log an error!
        </button>
      );
    });

    return (
      <div>
        <AnalyticsProvider analyticsProvider={fakeAnalytics}>
          <LogComponent />
        </AnalyticsProvider>
      </div>
    );
  });
