import React from "react";
import "./LandingPage.css";

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
            The best way to learn{" "}
            <span className="highlight">algorithms basics</span>
          </h1>
          <p className="main-subtitle">
            Build computer science skills in minutes a day with bite-sized,
          </p>
          <p className="main-subtitle2"> interactive lessons you'll love.</p>
          <button className="main-get-started-btn">Get started</button>
        </div>
        <div className="gif-container">
          <video
            src={
              process.env.PUBLIC_URL +
              "/0yEX6dfG1L8t8Nv9a2UX9k1DfI9lTOMX_9c5a0990aaa1b93e60a271db06dfbac9f2ad25e10bef32cd5cd54e19d46eabf5.mp4"
            }
            autoPlay
            loop
            muted
            className="gif"
          />
        </div>
      </main>
    </div>
    
  );
};

export default LandingPage;
