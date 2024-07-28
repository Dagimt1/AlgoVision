import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Box, TextField } from '@mui/material';
import './css/updateInfo.css';

const UpdatePersonalInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [school, setSchool] = useState('');

  const { userData, setUserData } = useContext(UserContext);
  const ApiBaseURL = 'http://localhost:6688/api/user';

  useEffect(() => {
    console.log('userData: ', userData);
    // fill out fields with current user data
    if (Object.keys(userData).length > 0) {
      setFirstName(userData.firstname);
      setLastName(userData.lastname);
      setAddress(userData.address);
      setAddressLine2(userData.addressline2);
      setCity(userData.city);
      setState(userData.state);
      setZipCode(userData.zipcode);
      setSchool(userData.currentschool);
    }
  }, [userData]);

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 3, width: '40%', backgroundColor: '#ffffff' },
      }}
      noValidate
    >
      <h2>Update Personal Info</h2>
      <div className='inputRow'>
        <TextField
          required
          label='First Name'
          value={firstName || ''}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          required
          label='Last Name'
          value={lastName || ''}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='inputRow'>
        <TextField
          label='Address'
          value={address || ''}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label='Address Line 2'
          value={addressLine2 || ''}
          onChange={(e) => setAddressLine2(e.target.value)}
        />
      </div>
      <div className='inputRow'>
        <TextField label='City' value={city || ''} onChange={(e) => setCity(e.target.value)} />
        <TextField label='State' value={state || ''} onChange={(e) => setState(e.target.value)} />
      </div>
      <div className='inputRow'>
        <TextField
          label='Zip code'
          value={zipCode || ''}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <TextField
          label='Name of your current school'
          value={school || ''}
          onChange={(e) => setSchool(e.target.value)}
        />
      </div>

      <div className='submitContainer'>
        <button className='loginButton halfWidth'>Update Personsal Info</button>
      </div>
    </Box>
  );
};

export default UpdatePersonalInfo;
