import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const Calendar = ({ availableTimeslots }) => {
  useEffect(() => {
    console.log('availableTimeslots: ', availableTimeslots);
  }, [availableTimeslots]);
  return (
    <div className='calendarContainer'>
      {availableTimeslots.length > 0 && (
        <div className='matchNowContainer'>
          <div className='sectionHeader'> Select from Existing Spots for a Quick Pair</div>

          <div className='timeslotContainer'>
            {availableTimeslots.map((timeslot) => (
              <div className='timeslot'>
                {timeslot.algo_level}
                {timeslot.time}
                {timeslot.target_role}
                {timeslot.notes}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='enterNewAvails'>New Avails!!!</div>
    </div>
  );
};

export default Calendar;
