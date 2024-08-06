/* import React, { useState } from "react";
import "./learmore.css";
import { useNavigate } from "react-router-dom";
import MSModal from '../mergeSortModal/MSModal'; // Adjust the import path as necessary

const LearnMore = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="learnMoreContainer">
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
          alt="Selection Sort"
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
        <button onClick={handleOpenModal}>Learn More</button>
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

      <MSModal show={showModal} onClose={handleCloseModal}>
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
      </MSModal>
    </div>
  );
};

export default LearnMore;
 */

/* import React, { useState } from "react";
import "./learmore.css";
import { useNavigate } from "react-router-dom";
import MSModal from '../mergeSortModal/MSModal'; // Adjust the import path as necessary
import MergeSortCard from './MergeSortCard.jsx';

const LearnMore = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: null });

  const handleOpenModal = (title, content) => {
    setModalContent({ title, content });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="learnMoreContainer">
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
        <img className="learnMoreSortImages" src="./images/BubbleSort.png" alt="Bubble Sort" />
        <button onClick={() => handleOpenModal('Bubble Sort', <BubbleSortContent />)}>Learn More</button>
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
        <img className="learnMoreSortImages" src="./images/InsertionSort.png" alt="Insert Sort" />
        <button onClick={() => handleOpenModal('Insert Sort', <InsertSortContent />)}>Learn More</button>
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
        <img className="learnMoreSortImages" src="./images/SelectionSort.png" alt="Selection Sort" />
        <button onClick={() => handleOpenModal('Selection Sort', <SelectionSortContent />)}>Learn More</button>
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
        <img className="learnMoreSortImages" src="./images/MergeSort.png" alt="Merge Sort" />
        <button onClick={() => handleOpenModal('Merge Sort', <MergeSortContent />)}>Learn More</button>
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
        <img className="learnMoreSortImages" src="./images/QuickSort.png" alt="Quick Sort" />
        <button onClick={() => handleOpenModal('Quick Sort', <QuickSortContent />)}>Learn More</button>
      </details>

      <MSModal show={showModal} onClose={handleCloseModal} title={modalContent.title}>
        {modalContent.content}
      </MSModal>
    </div>
  );
};

const BubbleSortContent = () => (
  <div>
    <p>
      Bubble sort is a sorting algorithm that works by repeatedly comparing adjacent elements in an array and swapping them if they are not in the desired order. The desired order can be either ascending or descending. To illustrate how Bubble Sort works, let's consider the array <code>arr = [1, 4, 2, 5, -2, 3]</code>. The goal is to sort this array in ascending order using Bubble Sort.
    </p>
    <ol>
      <li>Compare the element at index 0 with the element at index 1. If the element at index 0 is greater than the element at index 1, swap them. If it is not greater, do nothing.</li>
      <li>Move to the next pair: compare the element at index 1 with the element at index 2. Swap them if necessary.</li>
      <li>Continue this process for the entire array, comparing each adjacent pair of elements and swapping them if needed.</li>
    </ol>
    <p>This process is repeated for each element, progressively ensuring that the largest unsorted elements "bubble" up to their correct positions in the array. The algorithm continues to pass through the array until no more swaps are needed, indicating that the array is sorted.</p>
    <ul>
      <li>Stable</li>
      <li>O(1) extra space</li>
      <li>O(n2) comparisons and swaps</li>
      <li>Adaptive: O(n) when nearly sorted</li>
    </ul>
    <img className="learnMoreSortImages" src="./images/BubbleSort.png" alt="Bubble Sort" />
  </div>
);

const InsertSortContent = () => (
  <div>
    <p>
      Insertion sort processes the array one element at a time, shifting elements as necessary to maintain sorted order. It is particularly efficient for small or nearly sorted datasets, but it has a time complexity of \(O(n^2)\) in the average and worst cases, making it less suitable for large, unsorted arrays.
    </p>
    <p>Despite its \(O(n^2)\) worst-case time complexity, insertion sort is often preferred for nearly sorted data due to its adaptive nature or for small problem sizes because of its low overhead. Additionally, insertion sort is stable, which makes it a common choice as the base case in recursive divide-and-conquer sorting algorithms, such as merge sort or quick sort.</p>
    <ul>
      <li>Stable</li>
      <li>O(1) extra space</li>
      <li>O(n2) comparisons and swaps</li>
      <li>Adaptive: O(n) when nearly sorted</li>
      <li>Very low overhead</li>
    </ul>
    <img className="learnMoreSortImages" src="./images/InsertionSort.png" alt="Insert Sort" />
  </div>
);

const SelectionSortContent = () => (
  <div>
    <p>
      Selection Sort is a straightforward sorting algorithm celebrated for its simplicity and ease of implementation, though it’s not ideal for large datasets. The algorithm works by iteratively selecting the smallest element from the unsorted portion of the array and swapping it with the first unsorted element.
    </p>
    <p>For example, given an array [64, 25, 12, 22, 11], Selection Sort identifies the smallest element (11) and swaps it with the first element (64), resulting in [11, 25, 12, 22, 64]. This process continues, narrowing the unsorted portion until the array is fully sorted. Despite its clarity, Selection Sort has a time complexity of 𝑂 ( 𝑛 2 ) O(n 2 ) in all cases, which can make it inefficient for large arrays. It operates in-place with a space complexity of 𝑂 ( 1 ) O(1), but it is not stable, meaning it does not maintain the relative order of equal elements.</p>
    <ul>
      <li>Not stable</li>
      <li>O(1) extra space</li>
      <li>Θ(n2) comparisons</li>
      <li>Θ(n) swaps</li>
      <li>Not adaptive</li>
    </ul>
    <img className="learnMoreSortImages" src="./images/SelectionSort.png" alt="Selection Sort" />
  </div>
);

const MergeSortContent = () => (
  <div>
    <p>
      Merge sort is very predictable. It makes between 0.5lg(n) and lg(n) comparisons per element, and between lg(n) and 1.5lg(n) swaps per element. The minima are achieved for already sorted data; the maxima are achieved, on average, for random data. If using Θ(n) extra space is of no concern, then merge sort is an excellent choice: It is simple to implement, and it is the only stable O(n·lg(n)) sorting algorithm. Note that when sorting linked lists, merge sort requires only Θ(lg(n)) extra space (for recursion).
    </p>
    <p>Merge sort is the algorithm of choice for a variety of situations: when stability is required, when sorting linked lists, and when random access is much more expensive than sequential access (for example, external sorting on tape). There do exist linear time in-place merge algorithms for the last step of the algorithm, but they are both expensive and complex. The complexity is justified for applications such as external sorting when Θ(n) extra space is not available.</p>
    <ul>
      <li>Stable</li>
      <li>Θ(n) extra space for arrays (as shown)</li>
      <li>Θ(lg(n)) extra space for linked lists</li>
      <li>Θ(n·lg(n)) time</li>
      <li>Not adaptive</li>
      <li>Does not require random access to data</li>
    </ul>
    <img className="learnMoreSortImages" src="./images/MergeSort.png" alt="Merge Sort" />
  </div>
);

const QuickSortContent = () => (
  <div>
    <p>
      When carefully implemented, quicksort is a robust algorithm with low overhead. It is an excellent general-purpose sort when stability is not required, especially when using the 3-way partitioning version. The 2-way partitioning approach, while clear, is less efficient due to poor locality and can exhibit O(n²) time complexity when there are few unique keys. A more efficient and robust 2-way partitioning method is described in "Quicksort is Optimal" by Robert Sedgewick and Jon Bentley.
    </p>
    <p>This method ensures balanced recursion even with many values equal to the pivot, providing probabilistic guarantees of O(n·lg(n)) time complexity and O(lg(n)) space complexity for all inputs. When both sub-sorts are performed recursively, quicksort requires O(n) extra space for the recursion stack in the worst case if recursion is not balanced. This is highly unlikely but can be mitigated by recursively sorting the smaller sub-array first. The sort of the larger sub-array can then be done using iteration instead of recursion. With this optimization, the algorithm uses O(lg(n)) extra space in the worst case.</p>
    <ul>
      <li>Stable</li>
      <li>O(1) extra space</li>
      <li>O(n2) comparisons and swaps</li>
      <li>Adaptive: O(n) when nearly sorted</li>
      <li>Very low overhead</li>
    </ul>
    <img className="learnMoreSortImages" src="./images/QuickSort.png" alt="Quick Sort" />
  </div>
);

export default LearnMore;
 */

/* import React from 'react';
import MergeSortCard from '../LearnMoreV2/MergeSortCard.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Algorithm Visualizer</h1>
      <MergeSortCard />
    </div>
  );
};

export default App; */

import React from 'react';
import './learmore.css';

const algorithms = [
  {
    name: 'Insertion Sort',
    className: 'left', // Left-side styling class
    algorithm: (
      <div>
        <h3>ALGORITHM</h3>
        <pre>
          <code>
            {`for i = 2:n,
    for (k = i; k > 1 and a[k] < a[k-1]; k--)
        swap a[k,k-1]
    → invariant: a[1..i] is sorted`}
          </code>
        </pre>
      </div>
    ),
    discussion: (
      <div>
        <h3>DISCUSSION</h3>
        <p>
          Although it is one of the elementary sorting algorithms with O(n<sup>2</sup>) worst-case time, insertion sort is the algorithm of choice either when the data is nearly sorted (because it is adaptive) or when the problem size is small (because it has low overhead).
        </p>
        <p>
          For these reasons, and because it is also stable, insertion sort is often used as the recursive base case (when the problem size is small) for higher overhead divide-and-conquer sorting algorithms, such as merge sort or quick sort.
        </p>
      </div>
    ),
    properties: (
      <div>
        <h3>PROPERTIES</h3>
        <ul>
          <li>Stable</li>
          <li>O(1) extra space</li>
          <li>O(n<sup>2</sup>) comparisons and swaps</li>
          <li>Adaptive: O(n) time when nearly sorted</li>
          <li>Very low overhead</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Selection Sort',
    className: 'right', // Right-side styling class
    algorithm: (
      <div>
        <h3>ALGORITHM</h3>
        <pre>
          <code>
            {`for i = 1:n,
    k = i
    for j = i+1:n, if a[j] < a[k], k = j
    → invariant: a[k] smallest of a[i..n]
    swap a[i,k]
    → invariant: a[1..i] in final position`}
          </code>
        </pre>
      </div>
    ),
    discussion: (
      <div>
        <h3>DISCUSSION</h3>
        <p>
          From the comparisons presented here, one might conclude that selection sort should never be used. It does not adapt to the data in any way (notice that the four animations above run in lock step), so its runtime is always quadratic.
        </p>
        <p>
          However, selection sort has the property of minimizing the number of swaps. In applications where the cost of swapping items is high, selection sort very well may be the algorithm of choice.
        </p>
      </div>
    ),
    properties: (
      <div>
        <h3>PROPERTIES</h3>
        <ul>
          <li>Not stable</li>
          <li>O(1) extra space</li>
          <li>Θ(n<sup>2</sup>) comparisons</li>
          <li>Θ(n) swaps</li>
          <li>Not adaptive</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Bubble Sort',
    className: 'left',
    algorithm: (
      <div>
        <h3>ALGORITHM</h3>
        <pre>
          <code>
            {`for i = 1:n,
    swapped = false
    for j = n:i+1,
        if a[j] < a[j-1],
            swap a[j,j-1]
            swapped = true
    → invariant: a[1..i] in final position
    break if not swapped`}
          </code>
        </pre>
      </div>
    ),
    discussion: (
      <div>
        <h3>DISCUSSION</h3>
        <p>
          Bubble sort has many of the same properties as insertion sort but has slightly higher overhead. In the case of nearly sorted data, bubble sort takes O(n) time, but requires at least 2 passes through the data (whereas insertion sort requires something more like 1 pass).
        </p>
      </div>
    ),
    properties: (
      <div>
        <h3>PROPERTIES</h3>
        <ul>
          <li>Stable</li>
          <li>O(1) extra space</li>
          <li>O(n<sup>2</sup>) comparisons and swaps</li>
          <li>Adaptive: O(n) when nearly sorted</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Merge Sort',
    className: 'right',
    algorithm: (
      <div>
        <h3>ALGORITHM</h3>
        <pre>
          <code>
            {`# split in half
m = n / 2

# recursive sorts
sort a[1..m]
sort a[m+1..n]

# merge sorted sub-arrays using temp array
b = copy of a[1..m]
i = 1, j = m+1, k = 1
while i <= m and j <= n,
    a[k++] = (a[j] < b[i]) ? a[j++] : b[i++]
    → invariant: a[1..k] in final position
while i <= m,
    a[k++] = b[i++]
    → invariant: a[1..k] in final position`}
          </code>
        </pre>
      </div>
    ),
    discussion: (
      <div>
        <h3>DISCUSSION</h3>
        <p>
          Merge sort is very predictable. It makes between 0.5lg(n) and lg(n) comparisons per element, and between lg(n) and 1.5lg(n) swaps per element. The minima are achieved for already sorted data; the maxima are achieved, on average, for random data. If using Θ(n) extra space is of no concern, then merge sort is an excellent choice: It is simple to implement, and it is the only stable O(n·lg(n)) sorting algorithm. Note that when sorting linked lists, merge sort requires only Θ(lg(n)) extra space (for recursion).
        </p>
        <p>
          Merge sort is the algorithm of choice for a variety of situations: when stability is required, when sorting linked lists, and when random access is much more expensive than sequential access (for example, external sorting on tape).
        </p>
      </div>
    ),
    properties: (
      <div>
        <h3>PROPERTIES</h3>
        <ul>
          <li>Stable</li>
          <li>Θ(n) extra space for arrays (as shown)</li>
          <li>Θ(lg(n)) extra space for linked lists</li>
          <li>Θ(n·lg(n)) time</li>
          <li>Not adaptive</li>
          <li>Does not require random access to data</li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Quick Sort',
    className: 'left',
    algorithm: (
      <div>
        <h3>ALGORITHM</h3>
        <pre>
          <code>
            {`# choose pivot
swap a[1,rand(1,n)]

# 2-way partition
k = 1
for i = 2:n, if a[i] < a[1], swap a[++k,i]
swap a[1,k]
→ invariant: a[1..k-1] < a[k] <= a[k+1..n]

# recursive sorts
sort a[1..k-1]
sort a[k+1,n]`}
          </code>
        </pre>
      </div>
    ),
    discussion: (
      <div>
        <h3>DISCUSSION</h3>
        <p>
          When carefully implemented, quick sort is robust and has low overhead. When a stable sort is not needed, quick sort is an excellent general-purpose sort – although the 3-way partitioning version should always be used instead.
        </p>
        <p>
          The 2-way partitioning code shown above is written for clarity rather than optimal performance; it exhibits poor locality, and, critically, exhibits O(n<sup>2</sup>) time when there are few unique keys. A more efficient and robust 2-way partitioning method is given in "Quicksort is Optimal" by Robert Sedgewick and Jon Bentley. The robust partitioning produces balanced recursion when there are many values equal to the pivot, yielding probabilistic guarantees of O(n·lg(n)) time and O(lg(n)) space for all inputs.
        </p>
        <p>
          With both sub-sorts performed recursively, quick sort requires O(n) extra space for the recursion stack in the worst case when recursion is not balanced. This is exceedingly unlikely to occur, but it can be avoided by sorting the smaller sub-array recursively first; the second sub-array sort is a tail recursive call, which may be done with iteration instead. With this optimization, the algorithm uses O(lg(n)) extra space in the worst case.
        </p>
      </div>
    ),
    properties: (
      <div>
        <h3>PROPERTIES</h3>
        <ul>
          <li>Not stable</li>
          <li>O(lg(n)) extra space (see discussion)</li>
          <li>O(n<sup>2</sup>) time, but typically O(n·lg(n)) time</li>
          <li>Not adaptive</li>
        </ul>
      </div>
    ),
  },
];

const FlexboxProperties = () => {
  return (
    <div className="flexbox-container">
      <header className="header">
        <div className="breadcrumb">HOME</div>
        <h1>A Complete Guide to Sorting Algorithms</h1>
        
        <p>
          Our comprehensive guide to sorting algorithms. This guide explains
          everything about different sorting techniques, focusing on their
          implementations and properties. It also includes discussions,
          patterns, and complexity analysis.
        </p>
      </header>

      <div className="flexbox-section">
        {algorithms.map((algorithm) => (
          <div key={algorithm.name} className={`algorithm-container ${algorithm.className}`}>
            <h2>{algorithm.name}</h2>
            {algorithm.algorithm}
            {algorithm.discussion}
            {algorithm.properties}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexboxProperties;
