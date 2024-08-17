import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import NavBar from '../NavBar/NavBar';

const MockInterview = () => {
  const { userData } = useContext(UserContext);
  return <>Mock Interview Page</>;
};

export default MockInterview;
