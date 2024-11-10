import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create your account</h2>
        <input type="text" placeholder="Phone number" />
        <div className="name-inputs">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Signup;
