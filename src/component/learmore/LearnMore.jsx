import React from "react";
import "./learmore.css";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="learMoreContainter">
      <h1 onClick={navigateHome}>A Complete Guide to Algorithm Visualizer</h1>
      <details className="summarySort">
        <summary>Bubble Sort</summary>
        <p>
          Bubble sort is a sorting algorithm that works by repeatedly comparing
          adjacent elements in an array and swapping them if they are not in the
          desired order. The desired order can be either ascending or
          descending. To illustrate how Bubble Sort works, let's consider the
          array <code>arr = [1, 4, 2, 5, -2, 3]</code>. The goal is to sort this
          array in ascending order using Bubble Sort.
        </p>
        <ol>
          <li>
            Compare the element at index 0 with the element at index 1. If the
            element at index 0 is greater than the element at index 1, swap
            them. If it is not greater, do nothing.
          </li>
          <li>
            Move to the next pair: compare the element at index 1 with the
            element at index 2. Swap them if necessary.
          </li>
          <li>
            Continue this process for the entire array, comparing each adjacent
            pair of elements and swapping them if needed.
          </li>
        </ol>

        <p>
          This process is repeated for each element, progressively ensuring that
          the largest unsorted elements "bubble" up to their correct positions
          in the array. The algorithm continues to pass through the array until
          no more swaps are needed, indicating that the array is sorted.
        </p>
        <p>
          <ul>
            Properties
            <li>Stable</li>
            <li>O(1) extra space</li>
            <li>O(n2) comparisons and swaps</li>
            <li>Adaptive: O(n) when nearly sorted</li>
          </ul>
        </p>
        <img
          className="learnMoreSortImages"
          src="./images/BubbleSort.png"
          alt="Bubble Sort"
        />
      </details>
      <details className="summarySort">
        <summary>Insert Sort</summary>
        <p>
          Insertion sort processes the array one element at a time, shifting
          elements as necessary to maintain sorted order. It is particularly
          efficient for small or nearly sorted datasets, but it has a time
          complexity of \(O(n^2)\) in the average and worst cases, making it
          less suitable for large, unsorted arrays. Despite its \(O(n^2)\)
          worst-case time complexity, insertion sort is often preferred for
          nearly sorted data due to its adaptive nature or for small problem
          sizes because of its low overhead. Additionally, insertion sort is
          stable, which makes it a common choice as the base case in recursive
          divide-and-conquer sorting algorithms, such as merge sort or quick
          sort.
        </p>

        <p>
          <ul>
            Properties
            <li>Stable</li>
            <li>O(1) extra space</li>
            <li>O(n2) comparisons and swaps</li>
            <li>Adaptive: O(n) when nearly sorted</li>
            <li>Very low overhead</li>
          </ul>
        </p>
        <img
          className="learnMoreBubbleSortImage"
          src="./images/InsertionSort.png"
          alt="Bubble Sort"
        />
      </details>
      <details className="summarySort">
        <summary>Selection Sort</summary>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          voluptas, exercitationem, quam similique perferendis dolorum neque
          excepturi non distinctio voluptate, debitis sit inventore nisi
          explicabo deserunt totam corrupti. Recusandae, eius?
        </p>
        <img
          className="learnMoreBubbleSortImage"
          src="./images/BubbleSort.png"
          alt="Bubble Sort"
        />
      </details>
      <details className="summarySort">
        <summary>Merge Sort</summary>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          harum. Ipsum quaerat dolor quam ab aliquam ipsam deserunt, possimus
          eos voluptatem facilis explicabo dolorum fugit iusto. Quo non fugiat
          sunt?
        </p>
        <img
          className="learnMoreBubbleSortImage"
          src="./images/BubbleSort.png"
          alt="Bubble Sort"
        />
      </details>
      <details className="summarySort">
        <summary>Quick Sort</summary>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quidem
          iure ex repellat fugiat fugit repudiandae blanditiis nostrum optio
          labore! Perspiciatis, sunt sequi? Expedita eveniet id officiis tempore
          eum omnis.
        </p>
        <img
          className="learnMoreBubbleSortImage"
          src="./images/BubbleSort.png"
          alt="Bubble Sort"
        />
      </details>
    </div>
  );
};

export default LearnMore;
