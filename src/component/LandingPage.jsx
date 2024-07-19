import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <h1 className="title">Algorithm Visualizer</h1>
        </div>
        <button className="login-btn">Log in</button>
      </header>
      <main className="main">
        <div className="text-container">
          <h1 className="main-title">
            The best way to learn <span className="highlight">algorithms basics</span>
          </h1>
          <p className="main-subtitle">
            Build computer science skills in minutes a day with bite-sized, interactive problem solving.
          </p>
          <button className="main-get-started-btn">Get started</button>
        </div>
        <div className="gif-container">
          <video src="https://cdn.dribbble.com/userupload/11103279/file/original-eb5701f1fbe36ed839c4a531c747d45b.mp4" autoPlay loop muted />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
