"use client";

import { useState, useEffect } from "react";

// Function to fetch data from the API
async function fetchAPIData(DndClass) {
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${DndClass}`);
  const classData = await response.json();
  console.log(`Fetched data for path: ${DndClass}`, classData);
  return classData.results || classData; // API returns results in an array of objects, or the whole data in some cases
}

export default function ClassBased({ DndClass }) {
  const [ClassData, setClassData] = useState(null); // State to store class data
  const [options, setOptions] = useState([]);
  const [Level, setLevel] = useState(""); // The level selected by the user
  const [HitDice, setHitDice] = useState(""); // The hit dice calculated based on the level and class

// Stat Consts 
    const [Str, setStr] = useState("")

  const LevelCap = 20;

  let LevelElements = [];
  for (let index = 1; index <= LevelCap; index++) {
    LevelElements.push(
      <option key={index} value={index}>
        {index}
      </option>
    );
  }

  // Load data from API when the component mounts or path changes
  useEffect(() => {
    async function loadAPI() {
      try {
        const Data = await fetchAPIData(DndClass);
        setClassData(Data); // Update the state with the fetched data
        if (Data && Data.length > 0) {
          setLevel(1); // Set a default level
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadAPI();
  }, [DndClass]); // Dependency array includes `DndClass`, so it re-fetches when `DndClass` changes

  // Effect hook to wait for Level to change before calling HandleHitDice
  useEffect(() => {
    if (Level && ClassData) {
      HandleHitDice();
    }
  }, [Level, ClassData]); // Runs when either Level or ClassData changes

  // Handle hit die calculation
  function HandleHitDice() {
    if (ClassData && ClassData.hit_die) {
      setHitDice(`${Level}d${ClassData.hit_die}`);
      console.log(`${Level}d${ClassData.hit_die}`);
    } else {
      setHitDice("N/A");
    }
  }

  // Handle the selection change
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div>
      <h2>Select a {DndClass}</h2>
      <select value={Level} onChange={handleLevelChange}>
        {/* Placeholder option */}
        <option value="" disabled>
          -- Select a {DndClass} --
        </option>

        {/* Map through the options */}
        {LevelElements}
      </select>

      <p>You selected level: {Level}</p>
      <p>Hit die: {HitDice}</p>
    </div>
  );
}
