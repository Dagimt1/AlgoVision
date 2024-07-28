import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <div className='container'>
        <h1 className='title'>Algorithm Visualizer</h1>
      </div>
      <button className='login-btn' onClick={() => navigate('/login')}>
        Log in
      </button>
    </header>
  );
};

export default NavBar;
