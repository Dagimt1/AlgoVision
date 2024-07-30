import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import MiddleTitle from '../middletitle/MiddleTitle';
import SortContainer from '../sortContainer/SortContainer';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

const LandingPage = () => {
  const videoComponent =
    process.env.PUBLIC_URL +
    './mp4/0yEX6dfG1L8t8Nv9a2UX9k1DfI9lTOMX_9c5a0990aaa1b93e60a271db06dfbac9f2ad25e10bef32cd5cd54e19d46eabf5.mp4';

  const navigate = useNavigate();

  return (
    <div className='landing-page'>
      <NavBar />
      <main className='main'>
        <div className='text-container'>
          <h1 className='main-title'>
            The best way to learn <span className='highlight'>algorithms basics</span>
          </h1>
          <p className="main-subtitle">
            Build computer science skills in minutes a day with bite-sized, <br/> interactive lessons you'll love.</p>
          <button className="main-get-started-btn" onClick={() => navigate("/sorting")}>
            Sorting visualizer
          </button>
          <button className='main-get-started-btn2' onClick={() => navigate('/pathfinding')}>
            Pathfinder visualizer
          </button>
        </div>
        <div className='gif-container'>
          <video src={videoComponent} autoPlay loop muted />
        </div>
      </main>
      <MiddleTitle />
      <SortContainer />
      <Footer />
    </div>
  );
};

export default LandingPage;
