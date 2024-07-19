import React from "react";
import "./bubblesort.css"; // Import CSS file

const BubbleSort = () => {
  const BubbleVideo = process.env.PUBLIC_URL + "/bubblesort.mp4";

  return (
    <div className="bubble-container">
      <h1 className="bubble-title">Bubble Sort</h1>
      <div className="bubble-video-container">
        <video className="bubble-vid" src={BubbleVideo} autoPlay loop muted />
      </div>
      <p className="bubble-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.
        </p>
    </div>
  );
};

export default BubbleSort;
