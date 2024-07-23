import React from "react";
import "./bubbleSort.css"; // Import CSS file

export const BubbleSortButton = ({ onClick, isActive }) => (
  <button onClick={onClick} className={`bubble-btn ${isActive ? 'active' : ''}`}>
    Bubble Sort
  </button>
);

const BubbleSort = () => {
  const BubbleVideo = process.env.PUBLIC_URL + "/bubblesort.mp4";

  return (
    <section className="section-container">
      <div className="bubble-video-container">
        <video className="bubble-vid" src={BubbleVideo} autoPlay loop muted />
      </div>
      <p className="bubble-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
      </p>
    </section>
  );
};

export default BubbleSort;


      /* <div className="bubble-video-container">
        <video className="bubble-vid" src={BubbleVideo} autoPlay loop muted />
      </div>
      <p className="bubble-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
      </p> */