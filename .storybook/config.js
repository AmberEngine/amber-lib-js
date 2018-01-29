import { configure } from '@storybook/react';

function loadStories() {
  require('../workspaces/amber-analytics/stories');
  require('../workspaces/amber-components/stories');
  require('../workspaces/amber-content/stories');
  require('../workspaces/amber-payments/stories');
}

configure(loadStories, module);
