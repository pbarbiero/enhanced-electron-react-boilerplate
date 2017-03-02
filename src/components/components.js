import * as Redux from 'redux';

// Define all components your app uses here
const allComponents = [
  'Core', 'Example', 'Footer', 'Menu'
];

// Grab the redux reducer function from the components's 'component' file
let reducers = {};
let components = {};
allComponents.forEach( function( name ) {
  let thisComponent = require('./'+ name +'/component.js');
  reducers[ name ] = thisComponent.redux.reducer;
  components[ name ] = thisComponent.component;
} );

// Compile reducers
reducers = Redux.combineReducers( reducers );

// Generate store
let store = {};
if ( process.env.NODE_ENV === "development") {
  // Development adds logging
  store = Redux.createStore(
    reducers,
    Redux.applyMiddleware(
       // redux-logger must be last
      require('redux-logger')({
        duration: true,
        collapsed: true
      })
    )
  );
} else {
  store = Redux.createStore( reducers );
}

// Build and return store
export {
  components,
  store
};
