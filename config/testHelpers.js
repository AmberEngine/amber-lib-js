import browserEnv from 'browser-env';
browserEnv();

global.localStorage = {
  getItem: (key) => { return key; },
  setItem: (key, value) => { return value; },
};
