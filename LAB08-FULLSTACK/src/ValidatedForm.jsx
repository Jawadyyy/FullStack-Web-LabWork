import React, { Component } from 'react';

class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", errors: {} };
  }

  validate() {
    const errors = {};
    if (!this.state.name) errors.name = "Name is required";
    if (!this.state.email.includes("@")) errors.email = "Invalid email";
    if (this.state.message.length < 10)
      errors.message = "Message must be at least 10 characters";

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => this.validate());
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h3>Validated Form</h3>

        <input name="name" placeholder="Name" onChange={this.handleChange} />
        {errors.name && <p>{errors.name}</p>}

        <input name="email" placeholder="Email" onChange={this.handleChange} />
        {errors.email && <p>{errors.email}</p>}

        <textarea name="message" placeholder="Message" onChange={this.handleChange} />
        {errors.message && <p>{errors.message}</p>}

        <button disabled={Object.keys(errors).length > 0}>Submit</button>
      </div>
    );
  }
}

export default ValidatedForm;
