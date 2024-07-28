import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Account = () => {
  const navigate = useNavigate();
  const ApiBaseURL = 'http://localhost:6688/api/user';

  return <h1>This is personal info!</h1>;
};

export default Account;
