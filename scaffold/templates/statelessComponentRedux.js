import React from 'react';
import { connect } from 'react-redux';

import { actions } from './component.js';

const mapStateToProps = (state) => { return {
  ...state.{{ComponentName}}
} }
const mapDispatchToProps = (dispatch) => { return {
  dummyAction: () => {
    dispatch( actions.dummyAction() );
  }
} }
const {{ComponentName}} = () => {
  return (
    <div>{{ComponentName}} -- Stateless w/ Redux</div>
  );
}

const connected_{{ComponentName}} = connect(mapStateToProps, mapDispatchToProps)({{ComponentName}});

export default connected_{{ComponentName}};
