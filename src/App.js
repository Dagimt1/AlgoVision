import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./component/landingpage/LandingPage.jsx";
import Login from "./component/Login/Login.jsx";
import SignUp from "./component/Login/SignUp.jsx";
import ResetPassword from "./component/Login/ResetPassword.jsx";
import SortContainer from "./component/sortContainer/SortContainer.jsx";
import MiddleTitle from "./component/middletitle/MiddleTitle.jsx";
import Sorting from "./component/Sorting/Sorting.jsx";
import AboutUs from "./component/footer/AboutUs.jsx";
import Testimonials from "./component/footer/Testimonials.jsx";
import Pathfinding from "./component/Pathfinding/Pathfinding.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/sortcontainer" element={<SortContainer />} />
        <Route path="/middletitle" element={<MiddleTitle />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/pathfinding" element={<Pathfinding />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
