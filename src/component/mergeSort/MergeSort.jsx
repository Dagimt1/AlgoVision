import React from "react";
import "./mergeSort.css"; // Import CSS file
import { Link } from "react-router-dom";

export const MergeSortButton = ({ onClick, isActive }) => (
  <button onClick={onClick} className={`merge-btn ${isActive ? 'active' : ''}`}>
    Merge Sort
  </button>
);

const MergeSort = () => {
  const MergeVideo = process.env.PUBLIC_URL + "./mp4/mergesort.mp4";

  return (
    <section className="section-container">
      <div className="merge-video-container">
        <video className="merge-vid" src={MergeVideo} autoPlay loop muted />
      </div>
      <p className="merge-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
        <Link to="/sorting" className="bubble-link"> Learn more</Link>
      </p>
    </section>
  );
};

export default MergeSort;
