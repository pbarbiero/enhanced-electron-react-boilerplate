import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.id = getUID();
  }
  onChange = (e) => {
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.id}>{this.props.label}</label>
        <input type="text" className="form-control"
          id={this.id}
          value={this.props.value}
          onChange={this.onChange}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
TextInput.defaultProps = {
  placeholder: false
}

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.id = getUID();
  }
  onChange = (e) => {
    this.props.onChange(e.target.value);
  }
  render() {
    let options = [];
    for ( let option of this.props.options ) {
      options.push(<option value={option.value} key={option.value}>{option.label}</option>);
    }
    return (
      <div className="form-group">
        <label htmlFor={this.id}>{this.props.label}</label>
        <select className="form-control" value={this.props.value}
          id={this.id}
          onChange={this.onChange}
        >
          {options}
        </select>
      </div>
    );
  }
}

let idCounter = 0;
const getUID = () => {
  idCounter += 1;
  return "input-id-" + idCounter;
}
const resetUID = () => {
  idCounter = 0;
}

export {
  TextInput, SelectBox,
  resetUID
};
