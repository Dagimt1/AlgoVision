import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import NavBar from '../NavBar/NavBarMain';
import { Box, Stepper, Step, StepLabel, Button, Typography } from '@mui/material';
import './MockInterview.css';
import SkillsLevelForm from './SkillsLevelForm';
import Calendar from './Calendar';
import ConfirmationPage from './ConfirmationPage';

const MockInterview = () => {
  const { userData } = useContext(UserContext);
  const [activeStep, setActiveStep] = useState(0);
  const [targetRole, setTargetRole] = useState('');
  const [algoLevel, setAlgoLevel] = useState('');
  const [notes, setNotes] = useState('');

  const steps = [
    'Fill out your skills level',
    'Select time slots',
    'Submit your interview request',
  ];

  useEffect(() => {
    console.log('activeStep: ', activeStep);
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
            {activeStep === 1 && <Calendar />}
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

              <Button onClick={handleNext}>
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
