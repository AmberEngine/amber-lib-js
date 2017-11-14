import ReactGA from 'react-ga';

const googleAnalyticsSource = {
  enabled: !!process.env.APP_GA_ACCOUNT_ID,
  initialize() {
    ReactGA.initialize(process.env.APP_GA_ACCOUNT_ID);
  },
  pageView: (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  },
  error: (error) => {
    // Do nothing!
  },
};

export default googleAnalyticsSource;
