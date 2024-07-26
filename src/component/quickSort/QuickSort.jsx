import React from "react";
import "./quickSort.css"; // Import CSS file
import { Link } from "react-router-dom";

export const QuickSortButton = ({ onClick, isActive }) => (
  <button onClick={onClick} className={`quick-btn ${isActive ? 'active' : ''}`}>
    Quick Sort
  </button>
);

const QuickSort = () => {
  const QuickVideo = process.env.PUBLIC_URL + "./mp4/quicksort.mp4";

  return (
    <section className="section-container">
      <div className="quick-video-container">
        <video className="quick-vid" src={QuickVideo} autoPlay loop muted />
      </div>
      <p className="quick-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
        <Link to="/sorting" className="bubble-link"> Learn more</Link>
      </p>
    </section>
  );
};

export default QuickSort;
