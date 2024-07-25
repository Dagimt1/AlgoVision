import React from "react";
import "./selectionSort.css"; // Import CSS file
import { Link } from "react-router-dom";

export const SelectionSortButton = ({ onClick, isActive }) => (
  <button onClick={onClick} className={`selection-btn ${isActive ? 'active' : ''}`}>
    Selection Sort
  </button>
);

const SelectionSort = () => {
  const SelectionVideo = process.env.PUBLIC_URL + "/selectionsort.mp4";

  return (
    <section className="section-container">
      <div className="selection-video-container">
        <video className="selection-vid" src={SelectionVideo} autoPlay loop muted />
      </div>
      <p className="selection-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit.
        <Link to="/sorting" className="bubble-link"> Learn more</Link>
      </p>
    </section>
  );
};

export default SelectionSort;
