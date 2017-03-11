import React, { Component } from 'react';
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
class {{ComponentName}} extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div>{{ComponentName}} -- Stateful w/ Redux</div>
    );
  }
}

{{ComponentName}} = connect(mapStateToProps, mapDispatchToProps)({{ComponentName}});

export default {{ComponentName}};
