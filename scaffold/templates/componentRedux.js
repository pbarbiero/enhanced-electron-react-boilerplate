// Init reduxHelper
import reduxHelper from '../../utils/reduxHelper.js';
const reduxUtil = reduxHelper('{{ComponentName}}');

// Include component
import component from './{{ComponentName}}.js';

// Action Definitions
const DUMMY_ACTION = reduxUtil.defineAction('DUMMY_ACTION');

// Initial State
const initialState = {
  dummyState: false
};

// Make Actions
const actions = {
  dummyAction: reduxUtil.createAction(DUMMY_ACTION)
};

// Make reducer
const reducer = reduxUtil.createReducer({
  [DUMMY_ACTION]: function(state, action) {
    let newState = { ...state, ...action.payload };
    newState.dummyState = true;
    return newState;
  }
}, initialState);

// Export
export {
  component,
  actions,
  reducer
};
