import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/login.css';
import './css/general.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const ApiBaseURL = 'http://localhost:6688/api/user';

  useEffect(() => {
    //clear up error message and login success when input changes
    setEmailErr('');
    setPasswordErr('');
    setLoginSuccess(false);
  }, [email, password]);

  useEffect(() => {
    //redirect to main page for logged in users
    if (loginSuccess) {
      navigate('/');
    }
  }, [loginSuccess]);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(`${ApiBaseURL}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success) {
          setLoginSuccess(true);
        } else {
          setLoginSuccess(false);
          setPasswordErr('Invalid email or password');
        }
      })
      .catch((err) => {
        setLoginSuccess(false);
        console.log('err:', err);
      });
  };

  return (
    <div className='loginContainer'>
      <div className='loginHeader'>
        <img className='algoLogo' src='/images/algoLogo.png' alt='algoLogo' />
        <h1>Login</h1>
      </div>

      <div className='loginBody'>
        <form className='loginForm' onSubmit={(e) => handleLogin(e)}>
          <div className='inputGroup'>
            <input
              className='textField'
              placeholder='Email'
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr.length > 0 && <small className='helpText error'>{emailErr}</small>}
          </div>

          <div className='inputGroup'>
            <input
              className='textField'
              placeholder='Password'
              value={password || ''}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr.length > 0 && <small className='helpText error'>{passwordErr}</small>}
          </div>

          <button className='loginButton' type='submit'>
            Log in
          </button>
        </form>

        <div className='actionGroupContainer'>
          <div
            className='loginAction'
            onClick={() => {
              navigate('/resetpassword');
            }}
          >
            Reset Password
          </div>
          <div
            className='loginAction'
            onClick={() => {
              navigate('/signup');
            }}
          >
            Sign Up
          </div>
        </div>
      </div>

      <div className='loginFooter'>
        <small className='helpText'>Please follow website policies and user agreement</small>
      </div>
    </div>
  );
};

export default Login;
