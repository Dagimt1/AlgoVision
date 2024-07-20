import React, { useState, useEffect, useRef } from "react";
import '../../styles/Sorting.css';
import { motion } from "framer-motion";
import selectionSort from "./algorithms/SelectionSort";
import mergeSort from "./algorithms/MergeSort";
import quickSort from "./algorithms/QuickSort";
import { NavLink } from "react-router-dom";

const springAnim = {
    type: "spring",
    damping: 20,
    stiffness: 300
};

const Sorting = () => {
    const [arr, setArr] = useState([]);
    const [method, setMethod] = useState("Algorithms");
    const [length, setLength] = useState(0);
    const [compare, setCompare] = useState({ i: null, j: null });
    const [sorted, setSorted] = useState([]);
    const [speed, setSpeed] = useState(100);
    const [isAlgorithmDropdownOpen, setIsAlgorithmDropdownOpen] = useState(false);
    const [isControlsDropdownOpen, setIsControlsDropdownOpen] = useState(false);

    const createArray = (e = Math.floor(window.innerWidth / 50) / 2) => {
        let newArr = [];
        for (let i = 0; i < e; i++) {
            newArr.push({
                value: Math.floor(Math.random() * ((window.innerHeight / 4) - 30 + 1)) + 30,
                id: "id-" + i
            });
        }
        setArr(newArr);
        setLength(e);
        setSorted([]);
        setCompare({});
    };

    const changeArray = (e) => {
        createArray(e.target.value);
    };

    useEffect(() => {
        createArray();
        const handleResize = () => {
            createArray();
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const randomize = () => {
        createArray(length);
    };

    const sortFunc = (e) => {
        e.preventDefault();
        let newArr = arr;
        let results = [];
        document.getElementById('error').style.display = "none";
        if (method === "Algorithms") {
            document.getElementById('error').style.display = "block";
        } else {
            if (method === "Selection Sort")
                results = selectionSort(newArr, newArr.length);
            else if (method === "Merge Sort")
                results = mergeSort(newArr, newArr.length);
            else if (method === "Quick Sort")
                results = quickSort(newArr, newArr.length);
            for (let i = 0; i < results.length; i++) {
                setTimeout(() => {
                    setArr(results[i]);
                }, speed * i);
            }
        }
    };

    const changeSpeed = (e) => {
        setSpeed(1100 - e.target.value);
    };

    const toggleAlgorithmDropdown = () => {
        setIsAlgorithmDropdownOpen(!isAlgorithmDropdownOpen);
        setIsControlsDropdownOpen(false);
    };

    const toggleControlsDropdown = () => {
        setIsControlsDropdownOpen(!isControlsDropdownOpen);
        setIsAlgorithmDropdownOpen(false);
    };

    const selectAlgorithm = (algorithm) => {
        setMethod(algorithm);
        setIsAlgorithmDropdownOpen(false);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">Sorting</div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={randomize}>Randomize</a>
                        </li>
                        <li className="nav-item dropdown" onClick={toggleAlgorithmDropdown}>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isAlgorithmDropdownOpen}>
                                {method}
                            </a>
                            <div className={`dropdown-menu ${isAlgorithmDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#" onClick={() => selectAlgorithm("Selection Sort")}>Selection Sort</a>
                                <a className="dropdown-item" href="#" onClick={() => selectAlgorithm("Merge Sort")}>Merge Sort</a>
                                <a className="dropdown-item" href="#" onClick={() => selectAlgorithm("Quick Sort")}>Quick Sort</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown" onClick={toggleControlsDropdown}>
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded={isControlsDropdownOpen}>
                                Controls
                            </a>
                            <div className={`dropdown-menu ${isControlsDropdownOpen ? 'show' : ''} controls-dropdown`} aria-labelledby="navbarDropdown">
                                <div className="dropdown-item">
                                    <input onChange={changeArray} type="range" min="2" max={Math.floor(window.screen.width / 50)} defaultValue={Math.floor((window.screen.width / 50) / 2)} />
                                    <span>Increase Array Size</span>
                                </div>
                                <div className="dropdown-item">
                                    <input onChange={changeSpeed} type="range" min="100" max={1000} defaultValue={500} />
                                    <span>Increase Speed</span>
                                </div>
                            </div>
                        </li>
                        <div id="error" className="alert" style={{ marginLeft: "10px", display: "none" }} role="alert">
                            Select an algorithm first!
                        </div>
                    </ul>
                    <form className="form-inline">
                        <button className="btn sort-btn" type="submit" onClick={sortFunc}>Sort</button>
                    </form>
                </div>
            </nav>
            <div className="bars">
                {arr.map((element, index) =>
                    <motion.div
                        key={element.id}
                        layout transition={springAnim}
                        className={`bar ${element.style}`}
                        id={element.id}
                        style={{ height: element.value * 3, order: index }}
                    >
                        {element.value}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Sorting;
