// vitest.setup.js
global.navigator = { 
  userAgent: 'node.js',
  ontouchstart: false
};

global.window = global;
global.window.navigator = global.navigator;