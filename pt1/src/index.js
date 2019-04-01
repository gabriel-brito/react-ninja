'use strict';

import React from 'react';
import { render } from 'react-dom';
import { AppContainter } from 'react-hot-loader';
import App from './app';

const renderApp = (nextApp) => {
  render(<nextApp />, document.querySelector('[data-js="app"]'));
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default;
    renderApp(nextApp);
  });
}
