import GoogleAnalytics from './googleAnalyticsSource';
import SentryAnalytics from './sentryAnalyticsSource';

// Export the analytic sources
export {
  GoogleAnalytics,
  SentryAnalytics,
};

export default class AnalyticsProvider {
  analyticSources: []

  constructor(sources = []) {
    this.analyticSources = sources;
    this.initialize();
  }

  initialize() {
    this.getAnalyticSources()
      .forEach(source => {
        source.initialize();
      });
  }

  getAnalyticSources() {
    return this.analyticSources
      .filter(source => source.enabled);
  }

  registerSource = (source) => {
    this.analyticSources = this.analyticSources.concat([source]);
  }

  pageView = () => {
    const page = window.location.pathname + window.location.search;
    this.getAnalyticSources()
      .forEach(source => {
        source.pageView(page);
      });
  }

  error = (error) => {
    this.getAnalyticSources()
      .forEach(source => {
        source.error(error);
      });
  }
}
