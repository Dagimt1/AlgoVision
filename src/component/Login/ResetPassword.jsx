import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/resetpassword.css';

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className='header'>
        <div className='container'>
          <h1 className='title'>Algorithm Visualizer</h1>
        </div>
        <button className='login-btn' onClick={() => navigate('/login')}>
          Log in
        </button>
      </header>

      <div className='resetContainer'>
        <div className='resetBody'>
          <div className='resetTitle'>Forgot your password?</div>

          <form className='resetForm'>
            <div className='inputGroup'>
              <input className='textField' placeholder='Email address' />
              <small className='helpText error'>Email invalid!</small>
            </div>

            <button className='loginButton'>Send Reset Link</button>
          </form>

          <div className='resetContactContainer'>
            <small className='helpText'>
              If you have any questions while resetting your password, feel free to contact us at
              support@algorithmvisualization.org
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
