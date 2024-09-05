import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import MiddleTitle from '../middletitle/MiddleTitle';
import SortContainer from '../sortContainer/SortContainer';
import NavBar from '../NavBar/NavBarMain';
import Footer from '../footer/Footer';
import PathfinderContainer from '../PathfinderContainer/PathfinderContainer';
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
            Master <span className='highlight'>Algorithms</span> with Interactive Visualizations
          </h1>
          <p className='main-subtitle'>
            Enhance your understanding of computer science with our engaging, interactive lessons.
            Start visualizing sorting and pathfinding algorithms today!
          </p>
          <button className='main-get-started-btn' onClick={() => navigate('/sorting')}>
            Explore Sorting Algorithms
          </button>
          <button className='main-get-started-btn2' onClick={() => navigate('/pathfinding')}>
            Discover Pathfinding Techniques
          </button>
          <button className='get-started-btn-new' onClick={() => navigate('/goal')}>
            Get Started
          </button>
        </div>
        <div className='gif-container'>
          <video src={videoComponent} autoPlay loop muted />
        </div>
      </main>
      <MiddleTitle />
      <SortContainer />
      <PathfinderContainer />
      <Footer />
    </div>
  );
};
export default LandingPage;