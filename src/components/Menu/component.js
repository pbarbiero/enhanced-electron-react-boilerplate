// Init reduxHelper
import { createUtil } from '../../utils/redux.js';
const reduxUtil = createUtil('menu');

// Include component
import component from './menu.js';

// Action Definitions

// Initial State
const initialState = {};

// Combine
const redux = {
  actions: {},
  reducer: reduxUtil.createReducer({}, initialState)
};

// Export
export {
  component,
  redux
};
