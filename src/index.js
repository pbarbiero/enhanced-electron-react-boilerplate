// Modules
import React from 'react';
import { render } from 'react-dom';

// Global CSS
import './assets/photon/css/photon.css';

// Grab all components dynamically
import { components, store } from './components/components.js';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

// Now we can render our application into it. Main entry point is always the 'Core' component
render( <components.Core />, document.getElementById('root') );
