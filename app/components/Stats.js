"use client";

import { useState, useEffect,useRef } from "react";
const names = ["STR","DEX","CON","INT","WIS","CHA"] //just in case 



  
export default function Stats({ DndRace }) {
  const [raceData, setRaceData] = useState(null); // State to store class data

    const [hasRaceBonusesApplied, setHasRaceBonusesApplied] = useState(false); // Flag to track if race bonuses have been applied
    const [IsStatsReady, setIsStatsReady] = useState(false); // Flag to track if stats are updated
    const raceDataRef = useRef(null); // Reference to store race data
    

    useEffect(() => {
    if (IsStatsReady && raceData&& !hasRaceBonusesApplied) {
      
      RaceBonus(raceData);
      setHasRaceBonusesApplied(true); // Set the flag to ensure race bonuses are applied only once
    }
  }, [IsStatsReady, raceData,hasRaceBonusesApplied]); // Only run when `isStatsReady` and `raceData` are available

  function RaceBonus(raceData) {
    // Loop through the ability bonuses in the raceData
    raceData.ability_bonuses.forEach(({ ability_score, bonus }) => {
      console.log("working");
      switch (ability_score.name) {
        case "STR":
          setSTR(prevSTR => prevSTR + bonus);  // Use functional updates for state
          break;
        case "DEX":
          console.log("working");
          
          setDEX(prevDEX => prevDEX + bonus);
          break;
        case "CON":
          setCON(prevCON => prevCON + bonus);
          break;
        case "INT":
          setINT(prevINT => prevINT + bonus);
          break;
        case "WIS":
          setWIS(prevWIS => prevWIS + bonus);
          break;
        case "CHA":
          setCHA(prevCHA => prevCHA + bonus);
          break;
        default:
          break;
      }
    });
  }
  



}