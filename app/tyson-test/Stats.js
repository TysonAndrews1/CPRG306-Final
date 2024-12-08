"use client";

import { useState, useEffect,useRef } from "react";
const names = ["STR","DEX","CON","INT","WIS","CHA"] //just in case 
let AbilityScores = {
    STR: [
      {
        name: "Athletics",
        modifier: ""
      }
    ],
    DEX: [
      {
        name: "Acrobatics",
        modifier: ""
      },
      {
        name: "Sleight of Hand",
        modifier: ""
      },
      {
        name: "Stealth",
        modifier: ""
      }
    ],
    CON: [],
    INT: [
      {
        name: "Arcana",
        modifier: ""
      },
      {
        name: "History",
        modifier: ""
      },
      {
        name: "Investigation",
        modifier: ""
      },
      {
        name: "Nature",
        modifier: ""
      },
      {
        name: "Religion",
        modifier: ""
      }
    ],
    WIS: [
      {
        name: "Animal Handling",
        modifier: ""
      },
      {
        name: "Insight",
        modifier: ""
      },
      {
        name: "Medicine",
        modifier: ""
      },
      {
        name: "Perception",
        modifier: ""
      },
      {
        name: "Survival",
        modifier: ""
      }
    ],
    CHA: [
      {
        name: "Deception",
        modifier: ""
      },
      {
        name: "Intimidation",
        modifier: ""
      },
      {
        name: "Performance",
        modifier: ""
      },
      {
        name: "Persuasion",
        modifier: ""
      }
    ]
  };
  
  


// Function to fetch data from the API
// async function fetchAPIData(DndRace) {
//   const response = await fetch(`https://www.dnd5eapi.co/api/races/${DndRace}`);
//   const raceData = await response.json();
//   console.log(`Fetched data for path: ${DndRace}`, raceData);
//   return raceData.results || raceData; // API returns results in an array of objects, or the whole data in some cases
// }
async function setAbilityScores(STR,DEX,CON,INT,WIS,CHA) {
    let currentBonus;
    for (const ability in AbilityScores) {
            currentBonus = `${ability}`
        // console.log(`Ability: ${ability}`);
        for (const skill of AbilityScores[ability]) {
          // console.log(`  Skill: ${skill.name}, Modifier: ${skill.modifier}`);
          switch (currentBonus){
            case"STR":
            skill.modifier = STR
            break;
            case"DEX":
            skill.modifier = DEX
            break;
            case"CON":
            skill.modifier = CON
            break;
            case"INT":
            skill.modifier = INT
            break;
            case"WIS":
            skill.modifier = WIS
            break;
            case"CHA":
            skill.modifier = CHA
            break;    
        }
        }
      }
}

  
export default function Stats({ DndRace }) {
  const [raceData, setRaceData] = useState(null); // State to store class data
    const [STR, setSTR] = useState(10)
    const [DEX, setDEX] = useState(10)
    const [CON, setCON] = useState(10)
    const [INT, setINT] = useState(10)
    const [WIS, setWIS] = useState(10)
    const [CHA, setCHA] = useState(10)

    const [STRBonus, setSTRBonus] = useState("")
    const [DEXBonus, setDEXBonus] = useState("")
    const [CONBonus, setCONBonus] = useState("")
    const [INTBonus, setINTBonus] = useState("")
    const [WISBonus, setWISBonus] = useState("")
    const [CHABonus, setCHABonus] = useState("")

    const [hasRaceBonusesApplied, setHasRaceBonusesApplied] = useState(false); // Flag to track if race bonuses have been applied
    const [IsStatsReady, setIsStatsReady] = useState(false); // Flag to track if stats are updated
    const raceDataRef = useRef(null); // Reference to store race data
    function BaseModifier(stat) {
      return Math.floor((stat-10)/2)
    }

    function RandomStat(){
      const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
      rolls.sort((a, b) => a - b);
      const total = rolls.slice(1).reduce((sum, roll) => sum + roll, 0);
      return total;
    }
  
  async function randomizeStats(){
    setSTR(RandomStat())
    setDEX(RandomStat())
    setCON(RandomStat())
    setINT(RandomStat())
    setWIS(RandomStat())
    setCHA(RandomStat())
    setHasRaceBonusesApplied(false)
    
  }
    useEffect(() => {
    if (IsStatsReady && raceData&& !hasRaceBonusesApplied) {
      console.log(DEX);
      
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
  
  useEffect(() => {
    // Ensure this runs after the stats are updated
    setSTRBonus(BaseModifier(STR));
    setDEXBonus(BaseModifier(DEX));
    setCONBonus(BaseModifier(CON));
    setINTBonus(BaseModifier(INT));
    setWISBonus(BaseModifier(WIS));
    setCHABonus(BaseModifier(CHA));
    

    setIsStatsReady(true); // This marks the completion of the first useEffect
  }, [STR, DEX, CON, INT, WIS, CHA,raceData]); // Dependencies: whenever any stat changes, rerun this effect
  // Load data from API when the component mounts or path changes

  useEffect(() => {
    if (IsStatsReady) {
      // Run this effect only when stats are updated
      setAbilityScores(
        STRBonus,
        DEXBonus,
        CONBonus,
        INTBonus,
        WISBonus,
        CHABonus
      );
    }
  }, [IsStatsReady, STRBonus, DEXBonus, CONBonus, INTBonus, WISBonus, CHABonus]);

  useEffect(() => {
    async function fetchRaceData() {
      const response = await fetch(`https://www.dnd5eapi.co/api/races/${DndRace}`);
      const data = await response.json();
      console.log("Fetched");
      
      setRaceData(data);
      raceDataRef.current = data; // Store the data in a ref
    }
    fetchRaceData()
  }, [DndRace]); // Dependency array includes `DndClass`, so it re-fetches when `DndClass` changes

  return (
    <div>
            <button onClick={randomizeStats}>Randomize Stats</button>
        <p>STR= {STR} Modifier= {STRBonus}</p>
        <p>DEX= {DEX} Modifier= {DEXBonus}</p>
        <p>CON= {CON} Modifier= {CONBonus}</p>
        <p>INT= {INT} Modifier= {INTBonus}</p>
        <p>WIS= {WIS} Modifier= {WISBonus}</p>
        <p>CHA= {CHA} Modifier= {CHABonus}</p>

        <h3>Skills:</h3>
  {Object.keys(AbilityScores).map((ability) => {
    return AbilityScores[ability].map((skill, index) => {
      // Get the correct modifier for each skill
      let modifier = "";
      switch (ability) {
        case "STR":
          modifier = STRBonus;
          break;
        case "DEX":
          modifier = DEXBonus;
          break;
        case "CON":
          modifier = CONBonus;
          break;
        case "INT":
          modifier = INTBonus;
          break;
        case "WIS":
          modifier = WISBonus;
          break;
        case "CHA":
          modifier = CHABonus;
          break;
        default:
          break;
      }

      return (
        <p key={index}>
          {skill.name} = {modifier} 
        </p>
      );
    });
  })}


    </div>
  );
}
