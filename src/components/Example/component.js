// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js';
const reduxUtil = reduxHelper('example');

// Include component
import component from './example.js';

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
