//import * as Redux from 'redux';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// Define all components your app uses here
const allComponents = [
  'Core', 'Example', 'Footer', 'Menu'
];

// Grab the redux reducer function from the components's 'component' file
let reducers = {};
let components = {};
allComponents.forEach( function( name ) {
  let thisComponent = require('./'+ name +'/component.js');
  if ( thisComponent.redux ) {
    reducers[ name ] = thisComponent.redux.reducer;
  }
  components[ name ] = thisComponent.component;
} );

// Compile reducers
reducers = combineReducers( reducers );

// Start history
const history = createBrowserHistory();

// Merge middlewares
let middlewares = [
  routerMiddleware(history),
];

// Development adds logging, must be last
if ( process.env.NODE_ENV !== "production") {
  middlewares.push( require('redux-logger')({
    duration: true, collapsed: true
  }) );
}

// Generate store
const store = createStore(
  connectRouter(history)(reducers),
  applyMiddleware(
    ...middlewares
  )
);

// Build and return store
export {
  components,
  history,
  store
};
