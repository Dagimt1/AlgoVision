import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className='signUpContainer'>
      <div className='signUpImageContainer'>
        <img className='signUpImage' src='/images/signUpImage.jpg' alt='signup image' />
      </div>
      <div className='signUpBody'>
        <div className='signUpTitle'>
          Create a free account to discover your personalized learning path
        </div>

        <div className='signUpForm'>
          <div className='inputGroup'>
            <input className='textField' type='email' placeholder='Email' required />
          </div>

          <div className='inputGroup'>
            <input className='textField' placeholder='Password' required />
          </div>

          <button className='loginButton'>Sign Up</button>
          <small className='helpText'>
            By clicking above, I agree to the website's Terms and Privacy Policy
          </small>
        </div>

        <div className='signUpActionContainer'>
          <div>Existing user?</div>
          <div
            className='loginAction'
            onClick={() => {
              navigate('/login');
            }}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
