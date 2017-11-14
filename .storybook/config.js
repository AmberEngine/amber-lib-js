import { configure } from '@storybook/react';

function loadStories() {
  require('../workspaces/amber-components/stories');
}

configure(loadStories, module);
