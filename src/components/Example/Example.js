import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from 'electron-json-config';
import { Prompt } from 'react-router-dom';
import * as deepEqual from 'deep-equal';

import { TextInput, SelectBox, resetUID } from '../inputs.js';
import { actions } from './component.js';

const Example = () => {
  return (
    <div>
      <h1>Example Component</h1>
      <p>This demonstrates stateful react components utilizing redux, with hooks into electron-config to persist some options.</p>
      <Settings />
    </div>
  );
}

const Settings_mapStateToProps = (state) => { return {
  ...state.Example
} }
const Settings_mapDispatchToProps = (dispatch) => { return {
  saveSettings: (settings) => {
    config.set('Example.textInput', settings.textInput);
    config.set('Example.selectBox', settings.selectBox);
    dispatch( actions.saveSettings(settings) );
  }
} }
class Settings extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      textInput: props.textInput,
      selectBox: props.selectBox
    };
    this.originalState = this.state;
    resetUID();
  }
  reset = () => {
    this.setState( this.originalState );
  }
  save = () => {
    this.originalState = this.state;
    this.props.saveSettings( this.state );
  }
  render() {
    return (
      <div className="box">
        <Prompt
          when={ !deepEqual( this.state, this.originalState ) }
          message="You have unsaved changes in your form. Are you sure you wish to leave?"
        />

        <header className="toolbar toolbar-header">
          <h1 className="title">Settings Example</h1>
        </header>

        <div className="padded">
          <TextInput label="Text Input" placeholder="Default: Hello World" value={this.state.textInput} onChange={ (value) => { this.setState({textInput: value}); } } />
          <SelectBox label="Select Box" value={this.state.selectBox} onChange={ (value) => { this.setState({selectBox: value}); } } options={[
            {value: "1", label: "Option 1"},
            {value: "2", label: "Option 2"},
            {value: "3", label: "Option 3"}
          ]} />
        </div>

        <footer className="toolbar toolbar-footer">
          <div className="toolbar-actions">
            <button className="btn btn-default" onClick={this.reset}>Cancel</button>
            <button className="btn btn-primary pull-right" onClick={this.save}>Save</button>
          </div>
        </footer>
      </div>
    );
  }
}
Settings = connect(Settings_mapStateToProps, Settings_mapDispatchToProps)(Settings);

export default Example;
