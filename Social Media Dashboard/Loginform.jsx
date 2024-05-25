import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username' required/>
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required/>
        </div>
        <div className='remember-forget'>
          <label><input type='checkbox' />Remember me</label>
          <a href="-">Forgot Password</a>
        </div>
        <a href="http://127.0.0.1:5500/index.html">
          <button type='button'>Login</button>
        </a>
        <div className='registration-link'>
          <p>Don't have an account? <a href='-'>Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
