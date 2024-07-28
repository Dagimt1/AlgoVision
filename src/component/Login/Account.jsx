import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material';
import NavBar from '../navBar/NavBar';
import UpdatePersonalInfo from './UpdatePersonalInfo';
import UpdatePassword from './UpdatePassword';

const Account = () => {
  const [tabValue, setTabValue] = useState(0);
  const ApiBaseURL = 'http://localhost:6688/api/user';

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <NavBar />
      <Box sx={{ width: '90%', padding: '2% 5%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleChange} aria-label='basic tabs example'>
            <Tab label='Personal Info' {...a11yProps(0)} />
            <Tab label='Password' {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabValue} index={0}>
          <UpdatePersonalInfo />
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <UpdatePassword />
        </CustomTabPanel>
      </Box>
    </>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default Account;
