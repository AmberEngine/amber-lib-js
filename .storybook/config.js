import { configure } from '@storybook/react';

function loadStories() {
  require('../workspaces/amber-analytics/stories');
  require('../workspaces/amber-components/stories');
  require('../workspaces/amber-content/stories');
}

configure(loadStories, module);
