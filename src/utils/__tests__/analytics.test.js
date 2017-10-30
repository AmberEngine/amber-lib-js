import test from 'ava';
import AnalyticsProvider from '../analytics';

class FakeAnalyticsSource {
  calls = []
  enabled = true
  initialized = false
  initialize() {
    this.initialized = true;
  }
  pageView(page) {
    this.calls.push({ call: 'pageView', page });
  }
  error(error) {
    this.calls.push({ call: 'error', error });
  }
}

test('analyticsProvider is created with specified sources', t => {
  const fakeSource = new FakeAnalyticsSource();
  const analytics = new AnalyticsProvider([fakeSource]);
  t.is(analytics.analyticSources.length, 1);
  t.is(analytics.analyticSources[0] instanceof FakeAnalyticsSource, true);
});

test('analyticsProvider initializes specified sources', t => {
  const fakeSource = new FakeAnalyticsSource();
  t.is(fakeSource.initialized, false);
  const analytics = new AnalyticsProvider([fakeSource]);
  t.is(fakeSource.initialized, true);
});

test('analyticsProvider doesn\'t initialize disabled sources', t => {
  const fakeSource = new FakeAnalyticsSource();
  fakeSource.enabled = false;
  t.is(fakeSource.initialized, false);
  const analytics = new AnalyticsProvider([fakeSource]);
  t.is(fakeSource.initialized, false);
});

test('analyticsProvider calls pageView of enabled sources', t => {
  const fakeSource = new FakeAnalyticsSource();
  const analytics = new AnalyticsProvider([fakeSource]);

  analytics.pageView();
  t.is(fakeSource.calls.length, 1);
  t.is(fakeSource.calls[0].call, 'pageView');
  t.is(fakeSource.calls[0].page, 'blank');
});

test('analyticsProvider calls error of enabled sources', t => {
  const fakeSource = new FakeAnalyticsSource();
  const analytics = new AnalyticsProvider([fakeSource]);

  analytics.error('Some bad error!');
  t.is(fakeSource.calls.length, 1);
  t.is(fakeSource.calls[0].call, 'error');
  t.is(fakeSource.calls[0].error, 'Some bad error!');
});
