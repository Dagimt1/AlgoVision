import React from "react";
import LandingPage from "./component/landingpage/LandingPage";
import MiddleTitle from "./component/middletitle/MiddleTitle";
import BubbleSort from "./component/bubblesort/BubbleSort";
import InsertSort from "./component/insertsort/InsertSort";
// import BrowserRouter {Router, Routes, Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <MiddleTitle />
      <BubbleSort />
      <InsertSort />
    </div>
  );
}

export default App;
