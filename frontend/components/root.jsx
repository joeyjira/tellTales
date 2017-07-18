import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-redux-dom';

import App from './app';

const Root = ( { store } ) => (
  <Provider store = { store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
