import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { components, history, store } from '../components.js';

const Core = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="window">
          <div className="window-content">
            <div className="pane-group">
              <div className="pane-sm sidebar"><components.Menu /></div>
              <div className="pane padded"><AppRouter /></div>
            </div>
          </div>
          <components.Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/index.html" component={Home} />
      <Route path="/example" component={components.Example} />
    </Switch>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Hello, Electron!</h1>
      <p>I hope you enjoy using enhanced-electron-react-boilerplate to start your dev off right!</p>
    </div>
  );
}

export default Core;
