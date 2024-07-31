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
        <ul>
          Properties
          <li>Stable</li>
          <li>O(1) extra space</li>
          <li>O(n2) comparisons and swaps</li>
          <li>Adaptive: O(n) when nearly sorted</li>
        </ul>
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
          less suitable for large, unsorted arrays.
        </p>
        <p>
          Despite its \(O(n^2)\) worst-case time complexity, insertion sort is
          often preferred for nearly sorted data due to its adaptive nature or
          for small problem sizes because of its low overhead. Additionally,
          insertion sort is stable, which makes it a common choice as the base
          case in recursive divide-and-conquer sorting algorithms, such as merge
          sort or quick sort.
        </p>
        <ul>
          Properties
          <li>Stable</li>
          <li>O(1) extra space</li>
          <li>O(n2) comparisons and swaps</li>
          <li>Adaptive: O(n) when nearly sorted</li>
          <li>Very low overhead</li>
        </ul>
        <img
          className="learnMoreSortImages"
          src="./images/InsertionSort.png"
          alt="Insert Sort"
        />
      </details>
      <details className="summarySort">
        <summary>Selection Sort</summary>
        <p>
          Selection Sort is a straightforward sorting algorithm celebrated for
          its simplicity and ease of implementation, though it’s not ideal for
          large datasets. The algorithm works by iteratively selecting the
          smallest element from the unsorted portion of the array and swapping
          it with the first unsorted element.
        </p>
        <p>
          For example, given an array [64, 25, 12, 22, 11], Selection Sort
          identifies the smallest element (11) and swaps it with the first
          element (64), resulting in [11, 25, 12, 22, 64]. This process
          continues, narrowing the unsorted portion until the array is fully
          sorted. Despite its clarity, Selection Sort has a time complexity of 𝑂
          ( 𝑛 2 ) O(n 2 ) in all cases, which can make it inefficient for large
          arrays. It operates in-place with a space complexity of 𝑂 ( 1 ) O(1),
          but it is not stable, meaning it does not maintain the relative order
          of equal elements.
        </p>
        <ul>
          Properties
          <li>Not stable</li>
          <li>O(1) extra space</li>
          <li>Θ(n2) comparisons</li>
          <li>Θ(n) swaps</li>
          <li>Not adaptive</li>
        </ul>
        <img
          className="learnMoreSortImages"
          src="./images/SelectionSort.png"
          alt="Bubble Sort"
        />
      </details>
      <details className="summarySort">
        <summary>Merge Sort</summary>
        <p>
          Merge sort is very predictable. It makes between 0.5lg(n) and lg(n)
          comparisons per element, and between lg(n) and 1.5lg(n) swaps per
          element. The minima are achieved for already sorted data; the maxima
          are achieved, on average, for random data. If using Θ(n) extra space
          is of no concern, then merge sort is an excellent choice: It is simple
          to implement, and it is the only stable O(n·lg(n)) sorting algorithm.
          Note that when sorting linked lists, merge sort requires only Θ(lg(n))
          extra space (for recursion).
        </p>
        <p>
          Merge sort is the algorithm of choice for a variety of situations:
          when stability is required, when sorting linked lists, and when random
          access is much more expensive than sequential access (for example,
          external sorting on tape). There do exist linear time in-place merge
          algorithms for the last step of the algorithm, but they are both
          expensive and complex. The complexity is justified for applications
          such as external sorting when Θ(n) extra space is not available.
        </p>
        <ul>
          Properties
          <li>Stable</li>
          <li>Θ(n) extra space for arrays (as shown)</li>
          <li>Θ(lg(n)) extra space for linked lists</li>
          <li>Θ(n·lg(n)) time</li>
          <li>Not adaptive</li>
          <li>Does not require random access to data</li>
        </ul>
        <img
          className="learnMoreSortImages"
          src="./images/MergeSort.png"
          alt="Merge Sort"
        />
      </details>
      <details className="summarySort">
        <summary>Quick Sort</summary>
        <p>
          When carefully implemented, quicksort is a robust algorithm with low
          overhead. It is an excellent general-purpose sort when stability is
          not required, especially when using the 3-way partitioning version.
          The 2-way partitioning approach, while clear, is less efficient due to
          poor locality and can exhibit O(n²) time complexity when there are few
          unique keys. A more efficient and robust 2-way partitioning method is
          described in "Quicksort is Optimal" by Robert Sedgewick and Jon
          Bentley.
        </p>
        <p>
          This method ensures balanced recursion even with many values equal to
          the pivot, providing probabilistic guarantees of O(n·lg(n)) time
          complexity and O(lg(n)) space complexity for all inputs. When both
          sub-sorts are performed recursively, quicksort requires O(n) extra
          space for the recursion stack in the worst case if recursion is not
          balanced. This is highly unlikely but can be mitigated by recursively
          sorting the smaller sub-array first. The sort of the larger sub-array
          can then be done using iteration instead of recursion. With this
          optimization, the algorithm uses O(lg(n)) extra space in the worst
          case.
        </p>
        <ul>
          Properties
          <li>Stable</li>
          <li>O(1) extra space</li>
          <li>O(n2) comparisons and swaps</li>
          <li>Adaptive: O(n) when nearly sorted</li>
          <li>Very low overhead</li>
        </ul>

        <img
          className="learnMoreSortImages"
          src="./images/QuickSort.png"
          alt="Quick Sort"
        />
      </details>
    </div>
  );
};

export default LearnMore;
