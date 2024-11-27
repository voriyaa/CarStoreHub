import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    phone_number: '',
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/register/`, {
        phone_number: formData.phone_number,
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.username,
        password: formData.password,
      });
      setError(null);
      navigate('/login'); // Перенаправляем на страницу логина
    } catch (err) {
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Create your account</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Phone number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <div className="name-inputs">
          <input
            type="text"
            placeholder="First name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Last name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button className="signup-button" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
