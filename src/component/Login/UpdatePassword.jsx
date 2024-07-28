import { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';
import './css/updateInfo.css';

const UpdatePassword = () => {
  const ApiBaseURL = 'http://localhost:6688/api/user';

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 3, width: '40%', backgroundColor: '#ffffff' },
      }}
      noValidate
    >
      <h2>Update Password</h2>
      <div className='inputRow'>
        <TextField required label='Current Password' />
      </div>
      <div className='inputRow'>
        <TextField required label='New Password' />
      </div>
      <div className='inputRow'>
        <TextField required label='Confirm New Password' />
      </div>

      <div className='submitContainer'>
        <button className='loginButton halfWidth'>Change Password</button>
      </div>
    </Box>
  );
};

export default UpdatePassword;
