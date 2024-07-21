import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login.css';

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='loginHeader'>
        <img className='algoLogo' src='/images/algoLogo.png' alt='algoLogo' />
        <h1>Login</h1>
      </div>

      <div className='loginBody'>
        <form className='loginForm'>
          <div className='inputGroup'>
            <input className='textField' placeholder='Email' />
            <small className='helpText error'>Enter your username</small>
          </div>

          <div className='inputGroup'>
            <input className='textField' placeholder='Password' />
            <small className='helpText error'>Enter your password</small>
          </div>

          <button className='loginButton'>Log in</button>
        </form>

        <div className='actionGroupContainer'>
          <div className='loginAction'>Reset Password</div>
          <div className='loginAction'>Sign Up</div>
        </div>
      </div>

      <div className='loginFooter'>
        <small className='helpText'>Please follow our policies and user agreement</small>
      </div>
    </div>
  );
};

export default Login;
