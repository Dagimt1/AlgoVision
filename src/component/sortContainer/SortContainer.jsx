import React, { useState } from "react";
import BubbleSort, { BubbleSortButton } from "../bubbleSort/BubbleSort";
import InsertSort, { InsertSortButton } from "../insertSort/InsertSort";
import SelectionSort, { SelectionSortButton } from "../selectionSort/SelectionSort";
import QuickSort, { QuickSortButton } from "../quickSort/QuickSort";
import MergeSort, { MergeSortButton } from "../mergeSort/MergeSort";
import "./sortContainer.css";

const SortContainer = () => {
  const [activeComponent, setActiveComponent] = useState('BubbleSort');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'InsertSort':
        return <InsertSort />;
      case 'SelectionSort':
        return <SelectionSort />;
      case 'QuickSort':
        return <QuickSort />;
      case 'MergeSort':
        return <MergeSort />;
      default:
        return <BubbleSort />;
    }
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="button-group">
          <BubbleSortButton onClick={() => setActiveComponent('BubbleSort')} isActive={activeComponent === 'BubbleSort'} />  
          <InsertSortButton onClick={() => setActiveComponent('InsertSort')} isActive={activeComponent === 'InsertSort'} />
          <SelectionSortButton onClick={() => setActiveComponent('SelectionSort')} isActive={activeComponent === 'SelectionSort'} />
          <QuickSortButton onClick={() => setActiveComponent('QuickSort')} isActive={activeComponent === 'QuickSort'} />
          <MergeSortButton onClick={() => setActiveComponent('MergeSort')} isActive={activeComponent === 'MergeSort'} />
        </div>
        <div className="video-display">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default SortContainer;
