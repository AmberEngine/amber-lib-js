import Raven from 'raven-js';

const sentryAnalyticsSource = {
  enabled: !!process.env.APP_SENTRY_ACCOUNT_ID,
  initialize() {
    if (this.enabled) {
      const { APP_SENTRY_ACCOUNT_ID, APP_SENTRY_PROJECT_NAME } = process.env;
      Raven
        .config(`https://${APP_SENTRY_ACCOUNT_ID}@sentry.io/${APP_SENTRY_PROJECT_NAME}`)
        .install();
    }
  },
  pageView: (page) => {
    // Do nothing!
  },
  error: (error) => {
    Raven.captureMessage(error);
  },
};

export default sentryAnalyticsSource;
