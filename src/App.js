import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage.jsx';
import Login from './component/Login/Login.jsx';
import SignUp from './component/Login/SignUp.jsx';
import ResetPassword from './component/Login/ResetPassword.jsx';
import Sorting from "./component/Sorting/Sorting";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <div className='App'>
              <LandingPage />
            </div>
          }
        />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path="/sorting" element={<Sorting />} />
      </Routes>
    </Router>

        )

}

export default App;
