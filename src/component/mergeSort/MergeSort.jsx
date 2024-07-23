import React from "react";
import "./mergeSort.css"; // Import CSS file

export const MergeSortButton = ({ onClick, isActive }) => (
  <button onClick={onClick} className={`merge-btn ${isActive ? 'active' : ''}`}>
    Merge Sort
  </button>
);

const MergeSort = () => {
  const MergeVideo = process.env.PUBLIC_URL + "/mergesort.mp4";

  return (
    <section className="section-container">
      <div className="merge-video-container">
        <video className="merge-vid" src={MergeVideo} autoPlay loop muted />
      </div>
      <p className="merge-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
      </p>
    </section>
  );
};

export default MergeSort;
