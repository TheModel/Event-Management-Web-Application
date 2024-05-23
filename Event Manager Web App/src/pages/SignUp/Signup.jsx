import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;