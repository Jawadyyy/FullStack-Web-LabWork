import React, { Component } from 'react';

class ControlledInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Controlled Input</h3>
        <input value={this.state.value} onChange={this.handleChange} />
        <p>You typed: {this.state.value}</p>
      </div>
    );
  }
}

export default ControlledInput;
