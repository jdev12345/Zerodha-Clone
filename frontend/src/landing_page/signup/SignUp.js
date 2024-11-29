import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    console.log('Creating user with', { name, email, password });
    try {
      const response = await axios.post('http://localhost:3002/auth/signup', { email, password });
      console.log('SignUp successful:', response.data);
      window.location.href = 'http://localhost:5000/dashboard';
    } catch (err) {
      console.error('SignUp failed:', err.response.data);
      setError(err.response.data.message || 'Something went wrong');
    }
    setError('');
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>

      <div className="toggle-form">
        <Link to="/login">Already have an account? Login here</Link>
      </div>
    </div>
  );
};

export default SignUp;