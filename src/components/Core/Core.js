import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { components } from '../components.js';

const Core = () => {
  return (
    <div className="window">
      <div className="window-content">
        <div className="pane-group">
          <div className="pane-sm sidebar"><components.Menu /></div>
          <div className="pane padded"><AppRouter /></div>
        </div>
      </div>
      <components.Footer />
    </div>
  );
}

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={components.Example} />
      </div>
    </Router>
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
