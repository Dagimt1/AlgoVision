import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Sorting from "./component/Sorting/Sorting";

function App() {
  return (
    
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sorting" element={<Sorting />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
