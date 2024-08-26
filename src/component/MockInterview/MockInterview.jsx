import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import axios from 'axios';
import NavBar from '../NavBar/NavBarMain';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import './MockInterview.css';
import SkillsLevelForm from './SkillsLevelForm';
import Calendar from './Calendar';
import ConfirmationPage from './ConfirmationPage';

const MockInterview = () => {
  const { userData, authToken } = useContext(UserContext);
  const [nextAllowed, setNextAllowed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [targetRole, setTargetRole] = useState('');
  const [algoLevel, setAlgoLevel] = useState('');
  const [notes, setNotes] = useState('');
  const [availableTimeslots, setAvailableTimeslots] = useState([]);

  // variables for calendar
  const [selectedOption, setSelectedOption] = useState(''); //existing, new
  const [selectedTimeslotId, setSelectedTimeslotId] = useState(0);
  const [timeOne, setTimeOne] = useState('');

  const ApiBaseURL = 'http://localhost:6688/api/interview';
  const steps = [
    'Fill out your skills level',
    'Select time slots',
    'Submit your interview request',
  ];

  useEffect(() => {
    let allowed = false;
    if (activeStep === 0) {
      allowed = targetRole && algoLevel;
    }

    setNextAllowed(allowed);
  }, [activeStep, targetRole, algoLevel]);

  const handleNext = () => {
    if (activeStep === 0) {
      // when entering step 2, getMatchedLevelTimeSlots
      axios
        .post(`${ApiBaseURL}/getMatchedLevelTimeSlots`, {
          algoLevel: algoLevel,
          authToken: authToken,
        })
        .then((res) => {
          setAvailableTimeslots(res.data.timeSlots);
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch((err) => console.error(err));
    } else if (activeStep === 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 2) {
      // on finish, submit new interview request OR submit match interview
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <NavBar />

      <Box className='stepContainer'>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            {activeStep === 0 && (
              <SkillsLevelForm
                targetRole={targetRole}
                setTargetRole={setTargetRole}
                algoLevel={algoLevel}
                setAlgoLevel={setAlgoLevel}
                notes={notes}
                setNotes={setNotes}
              />
            )}
            {activeStep === 1 && (
              <Calendar
                availableTimeslots={availableTimeslots}
                setNextAllowed={setNextAllowed}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                selectedTimeslotId={selectedTimeslotId}
                setSelectedTimeslotId={setSelectedTimeslotId}
                timeOne={timeOne}
                setTimeOne={setTimeOne}
              />
            )}
            {activeStep === 2 && <ConfirmationPage />}

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color='inherit'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />

              <Button disabled={!nextAllowed} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default MockInterview;
