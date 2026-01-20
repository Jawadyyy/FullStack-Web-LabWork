import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder=""
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder=""
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder=""
            required
            value={formData.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <div className="input-box">
          <input
            type="password"
            name="confirmPassword"
            placeholder=""
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
