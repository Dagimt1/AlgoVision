import React from "react";
import './PathfinderContainer.css'; // Ensure you have this file with the above CSS

const PathfinderContainer = () => {
  return (
    <div className="page-container">
      <div className="title-container">
        <h2 className="title-font">Why do people love Pathfinder Sort?</h2>
      </div>
      <div className="content-container">
        <div className="features">
          <div className="feature">
            <img src="/images/DoingPic.jpg" alt="Learn by doing" />
            <h3>Learn by doing</h3>
            <p>Visual, interactive lessons make concepts feel intuitive — so even complex ideas just click.</p>
            <a href="#">Link</a>
          </div>
          <div className="feature">
            <img src="/images/LessonsPic.jpg" alt="Bite Sized Lessons" />
            <h3>Bite-sized lessons</h3>
            <p>Form a real learning habit with game-like progress tracking and friendly reminders.</p>
            <a href="#">Link</a>
          </div>
          <div className="feature">
            <img src="/images/PencilPic.jpg" alt="Sharpen Your Thinking" />
            <h3>Sharpen your thinking</h3>
            <p>Build powerful problem-solving skills that will give you an edge no matter where your path leads.</p>
            <a href="#">Link</a>
          </div>
        </div>
        <div className="bottom-container">
          <div className="bottom-container-video">
            <video className="bottom-container-video-size" src="/mp4/DijykstrasGrab.mp4" controls>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bottom-container-text">
            <div className="bottom-container-text-content">
              <h2>Learn algorithms anytime, anywhere</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, accusantium porro. Molestiae, quis reiciendis vero architecto labore asperiores accusamus voluptatem aperiam quas molestias odit, accusantium quia adipisci alias libero! Sequi!</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default PathfinderContainer;
