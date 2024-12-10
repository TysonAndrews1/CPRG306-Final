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
  const [HitDice, setHitDice] = useState(""); // The hit dice calculated based on the level and class
  const [profBonus, setProfBonus] =useState("")




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
      HandleProfBonus(Level)
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
  function HandleProfBonus(Level){
    const ProfTable =[0,2,3,4,5,6];
    setProfBonus(ProfTable[Math.ceil(Level/4)])
  }

  // Handle the selection change

  return (
    <div>
      <h2>Select a {DndClass}</h2>


      <p>You selected level: {Level}</p>
      <p>Hit die: {HitDice}</p>
      <p>Prof Bonus : +{profBonus}</p>
    </div>
  );
}
