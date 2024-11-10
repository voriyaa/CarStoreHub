import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login or sign up</h2>
        <label>Username</label>
        <input type="text" placeholder="Username" />
        <label>Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit" className="login-button">Log in</button>
        <button type="button" className="signup-button" onClick={handleSignupClick}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
