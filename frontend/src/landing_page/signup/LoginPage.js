import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3002/auth/login', { email, password });
      console.log('SignUp successful:', response.data);
      // The cookie is automatically saved in the browser
      window.location.href = 'http://localhost:5000/dashboard';
    } catch (err) {
      console.error('SignUp failed:', err.response.data);
      setError(err.response.data.message || 'Something went wrong');
    }
    // Handle login API call here
    console.log('Logging in with', { email, password });

    // Clear error after submit
    setError('');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Login</button>
      </form>

      <div className="toggle-form">
        <Link to="/signup">Create a new account</Link>
      </div>
    </div>
  );
};

export default LoginPage;
