import React, { Component } from 'react';

class BasicForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", submitted: null };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: this.state });
  }

  render() {
    return (
      <div>
        <h3>Basic Form</h3>

        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="Name" onChange={this.handleChange} />
          <input name="email" placeholder="Email" onChange={this.handleChange} />
          <textarea name="message" placeholder="Message" onChange={this.handleChange} />
          <button>Submit</button>
        </form>

        {this.state.submitted && (
          <pre>{JSON.stringify(this.state.submitted, null, 2)}</pre>
        )}
      </div>
    );
  }
}

export default BasicForm;
