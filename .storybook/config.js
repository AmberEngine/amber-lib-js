import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../stories/component-stories');
}

configure(loadStories, module);
