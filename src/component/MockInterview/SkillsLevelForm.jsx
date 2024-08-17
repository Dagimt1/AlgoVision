import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import NavBar from '../NavBar/NavBarMain';
import { TextField, Grid, Box, MenuItem } from '@mui/material';

const SkillsLevelForm = () => {
  const { userData } = useContext(UserContext);
  const [targetRole, setTargetRole] = useState('');
  const [algoLevel, setAlgoLevel] = useState('');

  const algoLevelOptions = ['Beginner', 'Intermediate', 'Advanced'];
  const targetRoleOptions = [
    'Software Engineer',
    'Project Manager',
    'Data Scientist',
    'Data Analyst',
    'IOS Developer',
    'UI/UX',
  ];

  return (
    <div>
      <div className='InterviewIntroduction'>
        Schedule a 1-on-1 session with a candidate at your algorithm level.
      </div>

      <div className='MockInterviewContainer'>
        <TextField
          fullWidth
          select
          variant='outlined'
          label='Target Role'
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
        >
          {targetRoleOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          select
          variant='outlined'
          label='Algorithm Level'
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
        >
          {algoLevelOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default SkillsLevelForm;
