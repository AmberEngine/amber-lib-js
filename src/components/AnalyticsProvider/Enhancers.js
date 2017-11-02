import { PropTypes } from 'react';
import getContext from 'recompose/getContext';

export const enhanceWithAnalytics = getContext({
  analyticsProvider: PropTypes.object.isRequired,
});
