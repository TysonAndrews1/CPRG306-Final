'use client';
import { useState, useEffect } from "react";
import SkillCheckbox from "../components/Skill";
import AbilityScoreInput from "../components/abilityScores";
import RandomStats from "../components/RandomStats";
import SavingThrowInput from "../components/SavingThrow";
import HealthCalc from "../components/Health";
import { useFetchData } from "../components/FetchData";


export default function CharacterAttributes({ dndCharacterValues,updateCharacterValues  }) {
  const classPath = `classes/${dndCharacterValues.class.toLowerCase()}`;
  const racePath = `races/${dndCharacterValues.race.toLowerCase()}`;
  const { fetchData: classData, loading: classLoading, error: classError } = useFetchData(classPath);
  const { fetchData: raceData, loading: raceLoading, error: raceError } = useFetchData(racePath);
  const [combinedData, setCombinedData] = useState(null);
  const [hitDie, setHitDie] = useState(null);

  useEffect(() => {
    if (!classLoading && !raceLoading && classData && raceData) {
      // Only set combined data if both class and race data are fetched
      setCombinedData({
        class: classData,
        race: raceData,
      });
    }
  }, [classData, raceData, classLoading, raceLoading]);

  // Initialize Ability Scores from dndCharacterValues
  const [abilityScores, setAbilityScores] = useState({
    STR: { score: dndCharacterValues.strength, modifier: dndCharacterValues.strengthMod },
    DEX: { score: dndCharacterValues.dexterity, modifier: dndCharacterValues.dexterityMod },
    CON: { score: dndCharacterValues.constitution, modifier: dndCharacterValues.constitutionMod },
    INT: { score: dndCharacterValues.intelligence, modifier: dndCharacterValues.intelligenceMod },
    WIS: { score: dndCharacterValues.wisdom, modifier: dndCharacterValues.wisdomMod },
    CHA: { score: dndCharacterValues.charisma, modifier: dndCharacterValues.charismaMod },
  });

  // Initialize Skills (with proficiency flag) from dndCharacterValues (if applicable)
  const [skills, setSkills] = useState({
    STR: [{ name: "Athletics", proficiency: dndCharacterValues.athleticsProf }],
    DEX: [
      { name: "Acrobatics", proficiency: dndCharacterValues.acrobaticsProf },
      { name: "Sleight of Hand", proficiency: dndCharacterValues.sleightOfHandProf },
      { name: "Stealth", proficiency: dndCharacterValues.stealthProf },
    ],
    CON: [], // Add any CON-based skills if needed
    INT: [
      { name: "Arcana", proficiency: dndCharacterValues.arcanaProf },
      { name: "History", proficiency: dndCharacterValues.historyProf },
      { name: "Investigation", proficiency: dndCharacterValues.investigationProf },
      { name: "Nature", proficiency: dndCharacterValues.natureProf },
      { name: "Religion", proficiency: dndCharacterValues.religionProf },
    ],
    WIS: [
      { name: "Animal Handling", proficiency: dndCharacterValues.animalHandlingProf },
      { name: "Insight", proficiency: dndCharacterValues.insightProf },
      { name: "Medicine", proficiency: dndCharacterValues.medicineProf },
      { name: "Perception", proficiency: dndCharacterValues.perceptionProf },
      { name: "Survival", proficiency: dndCharacterValues.survivalProf },
    ],
    CHA: [
      { name: "Deception", proficiency: dndCharacterValues.deceptionProf },
      { name: "Intimidation", proficiency: dndCharacterValues.intimidationProf },
      { name: "Performance", proficiency: dndCharacterValues.performanceProf },
      { name: "Persuasion", proficiency: dndCharacterValues.persuasionProf },
    ],
  });

  // Initialize Saving Throws (with proficiency flag) from dndCharacterValues (if applicable)
  const [savingThrows, setSavingThrows] = useState({
    STR: { savingThrow: dndCharacterValues.strengthST, isProficient: dndCharacterValues.strengthSTProf },
    DEX: { savingThrow: dndCharacterValues.dexterityST, isProficient: dndCharacterValues.dexteritySTProf },
    CON: { savingThrow: dndCharacterValues.constitutionST, isProficient: dndCharacterValues.constitutionSTProf },
    INT: { savingThrow: dndCharacterValues.intelligenceST, isProficient: dndCharacterValues.intelligenceSTProf },
    WIS: { savingThrow: dndCharacterValues.wisdomST, isProficient: dndCharacterValues.wisdomSTProf },
    CHA: { savingThrow: dndCharacterValues.charismaST, isProficient: dndCharacterValues.charismaSTProf },
  });

  // Initialize Combat Stats from dndCharacterValues
  const [charArmorClass, setCharArmorClass] = useState(dndCharacterValues.armorClass);
  const [charInitiative, setCharInitiative] = useState(dndCharacterValues.initiative);
  const [charSpeed, setCharSpeed] = useState(dndCharacterValues.speed);
  const [charHitPoints, setCharHitPoints] = useState(dndCharacterValues.hitPoints);
  
  useEffect(() => {
    if (combinedData && combinedData.class) {
      const updatedSavingThrows = { ...savingThrows };
       // Loop through each saving throw in the class data
       combinedData.class.saving_throws.forEach((savingThrow) => {
        // Map the saving throw index (e.g., "int", "wis") to the correct ability key
        const abilityKey = savingThrow.index.toUpperCase(); 
        
        // Update proficiency
        updatedSavingThrows[abilityKey] = {
          isProficient: true,
          // Calculate the saving throw value
          savingThrow: abilityScores[abilityKey]?.modifier + charProficiencyBonus,
        };
      });

      // Set the saving throws state
      setSavingThrows(updatedSavingThrows);
    
      setHitDie(combinedData.class.hit_die);
      setCharSpeed(combinedData.race.speed)
    }
  }, [combinedData]);

  const [charProficiencyBonus, setCharProficiencyBonus] = useState(2);

  // Handle changes in ability score
  const handleScoreChange = (abilityKey, newScore) => {
    const updatedAbilityScores = { ...abilityScores };
    updatedAbilityScores[abilityKey].score = newScore;
    updatedAbilityScores[abilityKey].modifier = Math.floor((newScore - 10) / 2);
    setAbilityScores(updatedAbilityScores);
  };

  const handleProficiencyToggle = (ability, skillName) => {
    setSkills(prevSkills => {
      const updatedSkills = { ...prevSkills };
      updatedSkills[ability] = updatedSkills[ability].map(skill => {
        if (skill.name === skillName) {
          return { ...skill, proficiency: !skill.proficiency };  // Toggle proficiency
        }
        return skill;
      });
      return updatedSkills;
    });
  };

  // Handle changes in saving throw proficiency
  const handleProficiencyChange = (abilityKey, isProficient) => {
    const updatedSavingThrows = { ...savingThrows };
    updatedSavingThrows[abilityKey].isProficient = isProficient;
    updatedSavingThrows[abilityKey].savingThrow = calculateSavingThrow(abilityKey);
    setSavingThrows(updatedSavingThrows);
  };

  // Calculate saving throw based on stat modifier and proficiency
  const calculateSavingThrow = (abilityKey) => {
    const ability = abilityScores[abilityKey];
    const proficiencyBonus = charProficiencyBonus;

    let savingThrow = ability.modifier;

    if (savingThrows[abilityKey].isProficient) {
      savingThrow += proficiencyBonus;
    }

    return savingThrow;
  };

  // Calculate skill modifier based on stat and proficiency
  const calculateSkillModifier = (abilityKey, skillName) => {
    const abilityModifier = abilityScores[abilityKey].modifier;
    const skill = skills[abilityKey].find((s) => s.name === skillName);
    let skillModifier = abilityModifier;

    if (skill?.proficiency) {
      skillModifier += charProficiencyBonus;
    }

    return skillModifier;
  };

  // Update skills when proficiency is toggled
  useEffect(() => {
    const updatedSkills = { ...skills };
    Object.keys(updatedSkills).forEach((abilityKey) => {
      updatedSkills[abilityKey] = updatedSkills[abilityKey].map((skill) => ({
        ...skill,
        modifier: calculateSkillModifier(abilityKey, skill.name),
      }));
    });
    setSkills(updatedSkills);
  }, [abilityScores, charProficiencyBonus]);

  const handleStatsRandomized = (newStats) => {
    // Create a copy of the existing abilityScores state
    const updatedAbilityScores = { ...abilityScores };
  
    // Loop through each ability key in the newStats object
    Object.keys(newStats).forEach((abilityKey) => {
      const newScore = newStats[abilityKey];
  
      // Update the score and modifier for each ability
      updatedAbilityScores[abilityKey] = {
        score: newScore,
        modifier: Math.floor((newScore - 10) / 2),
      };
    });
  
    // Update the state with the new ability scores
    setAbilityScores(updatedAbilityScores);
    console.log(abilityScores);
  };


  const [Level, setLevel] = useState(dndCharacterValues.level)
  const LevelCap =20
  let LevelElements = [];
  for (let index = 1; index <= LevelCap; index++) {
    LevelElements.push(
      <option key={index} value={index}>
        {index}
      </option>
    );
  }
  const handleLevelChange = (event) => {
    setLevel(parseInt(event.target.value)); // Update the level based on the selected value
  }
  const ProfTable =[0,2,3,4,5,6];
  useEffect(() => {
    const health = HealthCalc({ ConBonus: abilityScores.CON.modifier, Level:Level, HitDie: hitDie });
    setCharHitPoints(health);

    setCharProficiencyBonus(ProfTable[Math.ceil(Level/4)])
  }, [abilityScores.CON.modifier, Level,hitDie]); // Dependency array ensures it recalculates when Constitution or Level changes

useEffect(()=>{
setCharInitiative(abilityScores.DEX.modifier)
setCharArmorClass(10+abilityScores.DEX.modifier)

},[abilityScores])

useEffect(()=>{
  sendUpdatesToParent()
},[abilityScores,skills,savingThrows,Level])


const getSkillProficiency = (category, skillName) => {
  const skill = skills[category]?.find(skill => skill.name === skillName);
  return skill ? skill.proficiency : false;
};

const sendUpdatesToParent = () => {
  updateCharacterValues ({
    strength: abilityScores.STR.score,
    strengthMod: abilityScores.STR.modifier,
    dexterity: abilityScores.DEX.score,
    dexterityMod: abilityScores.DEX.modifier,
    constitution: abilityScores.CON.score,
    constitutionMod: abilityScores.CON.modifier,
    intelligence: abilityScores.INT.score,
    intelligenceMod: abilityScores.INT.modifier,
    wisdom: abilityScores.WIS.score,
    wisdomMod: abilityScores.WIS.modifier,
    charisma: abilityScores.CHA.score,
    charismaMod: abilityScores.CHA.modifier,


    // skills (I know this is a stupid way to do it but I couldnt be bothered to type them all properly and the AI was giving stupid answers )
    acrobatics: abilityScores.DEX.modifier + (getSkillProficiency('DEX', 'Acrobatics') ? charProficiencyBonus : 0),
    acrobaticsProf: getSkillProficiency('DEX', 'Acrobatics'),

    animalHandling: abilityScores.WIS.modifier + (getSkillProficiency('WIS', 'Animal Handling') ? charProficiencyBonus : 0),
    animalHandlingProf: getSkillProficiency('WIS', 'Animal Handling'),

    arcana: abilityScores.INT.modifier + (getSkillProficiency('INT', 'Arcana') ? charProficiencyBonus : 0),
    arcanaProf: getSkillProficiency('INT', 'Arcana'),

    athletics: abilityScores.STR.modifier + (getSkillProficiency('STR', 'Athletics') ? charProficiencyBonus : 0),
    athleticsProf: getSkillProficiency('STR', 'Athletics'),

    deception: abilityScores.CHA.modifier + (getSkillProficiency('CHA', 'Deception')?charProficiencyBonus:0),
    deceptionProf: getSkillProficiency('CHA', 'Deception'),

    history: abilityScores.INT.modifier + (getSkillProficiency('INT', 'History') ? charProficiencyBonus : 0),
    historyProf: getSkillProficiency('INT', 'History'),

    insight: abilityScores.WIS.modifier + (getSkillProficiency('WIS', 'Insight') ? charProficiencyBonus : 0),
    insightProf: getSkillProficiency('WIS', 'Insight'),

    intimidation: abilityScores.CHA.modifier + (getSkillProficiency('CHA', 'Intimidation') ? charProficiencyBonus : 0),
    intimidationProf: getSkillProficiency('CHA', 'Intimidation'),

    investigation: abilityScores.INT.modifier + (getSkillProficiency('INT', 'Investigation') ? charProficiencyBonus : 0),
    investigationProf: getSkillProficiency('INT', 'Investigation'),

    medicine: abilityScores.WIS.modifier + (getSkillProficiency('WIS', 'Medicine') ? charProficiencyBonus : 0),
    medicineProf: getSkillProficiency('WIS', 'Medicine'),

    nature: abilityScores.INT.modifier + (getSkillProficiency('INT', 'Nature') ? charProficiencyBonus : 0),
    natureProf: getSkillProficiency('INT', 'Nature'),

    perception: abilityScores.WIS.modifier + (getSkillProficiency('WIS', 'Perception') ? charProficiencyBonus : 0),
    perceptionProf: getSkillProficiency('WIS', 'Perception'),

    performance: abilityScores.CHA.modifier + (getSkillProficiency('CHA', 'Performance') ? charProficiencyBonus : 0),
    performanceProf: getSkillProficiency('CHA', 'Performance'),

    persuasion: abilityScores.CHA.modifier + (getSkillProficiency('CHA', 'Persuasion') ? charProficiencyBonus : 0),
    persuasionProf: getSkillProficiency('CHA', 'Persuasion'),

    religion: abilityScores.INT.modifier + (getSkillProficiency('INT', 'Religion') ? charProficiencyBonus : 0),
    religionProf: getSkillProficiency('INT', 'Religion'),

    sleightOfHand: abilityScores.DEX.modifier + (getSkillProficiency('DEX', 'Sleight of Hand') ? charProficiencyBonus : 0),
    sleightOfHandProf: getSkillProficiency('DEX', 'Sleight of Hand'),

    stealth: abilityScores.DEX.modifier + (getSkillProficiency('DEX', 'Stealth') ? charProficiencyBonus : 0),
    stealthProf: getSkillProficiency('DEX', 'Stealth'),

    survival: abilityScores.WIS.modifier + (getSkillProficiency('WIS', 'Survival') ? charProficiencyBonus : 0),
    survivalProf: getSkillProficiency('WIS', 'Survival'),
    

    //saving Throws
    strengthST: savingThrows.STR.savingThrow,
    strengthSTProf: savingThrows.STR.isProficient,
    dexterityST: savingThrows.DEX.savingThrow,
    dexteritySTProf:    savingThrows.DEX.isProficient,
    constitutionST: savingThrows.CON.savingThrow,
    constitutionSTProf:      savingThrows.CON.isProficient,
    intelligenceST: savingThrows.INT.savingThrow,
    intelligenceSTProf:      savingThrows.INT.isProficient,
    wisdomST: savingThrows.WIS.savingThrow,
    wisdomSTProf: savingThrows.WIS.isProficient,
    charismaST: savingThrows.CHA.savingThrow,
    charismaSTProf:    savingThrows.CHA.isProficient,
    //other
    armorClass: charArmorClass,
    initiative: charInitiative,
    speed: charSpeed,
    hitPoints: charHitPoints,
    passiveWisdom: abilityScores.WIS.score,
    proficiencyBonus: charProficiencyBonus,
    level: Level
  });
}


  return (
    <main className="centered-flex-column bg-slate-400 min-h-screen">
      <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">-- Character Attributes --</h1>
      <h2 className="text-black text-1xl italic text-center w-1/2">
        Begin making the design of your character. Make it truly yours, or randomize!
      </h2>

      <div className="centered-flex-column bg-slate-900 rounded p-3 m-1">
        <div className="flex flex-row bg-slate-600 rounded p-3 m-1 space-x-2">
          <p className="text-amber-200 text-3xl font-bold italic">{dndCharacterValues.name} </p>
          <p className="text-white text-3xl font-bold italic ">
           A {dndCharacterValues.race} of the {dndCharacterValues.class} class
          </p>
        </div>
        <div className="flex flex-row rounded p-3 m-1">
          {/* Ability Scores */}
          <div className="flex flex-col container items-center">
            {Object.keys(abilityScores).map((abilityKey) => {
              const ability = abilityScores[abilityKey];
              return (
                <AbilityScoreInput
                  key={abilityKey}
                  ability={abilityKey}
                  score={ability.score}
                  modifier={ability.modifier}
                  setScore={(newScore) => handleScoreChange(abilityKey, newScore)}
                />
              );
            })}
            <div className="flex flex-col justify-between bg-slate-600 rounded p-3 m-1 items-center ">
              <p className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400 bg-white">{abilityScores.WIS.score}</p>
              <h2 className="text-white text-1xl font-bold italic">Passive Wisdom</h2>
            </div>
          </div>

          {/* Skills */}
          <div className="container">
            <h2 className="text-white text-1xl text-center font-bold italic">Skills</h2>
            {Object.keys(skills).map((ability) => (
              <div key={ability}>
                {skills[ability].map((skill) => (
                  <SkillCheckbox
                    key={skill.name}
                    skillName={skill.name}
                    abilityModifier={abilityScores[ability].modifier}
                    proficiency={skill.proficiency}
                    proficiencyValue={charProficiencyBonus}
                    onChange={() => handleProficiencyToggle(ability, skill.name)}  // Toggle proficiency on checkbox change
                  />
                ))}
              </div>
            ))}
              <div className="flex flex-col justify-between items-center">
                <RandomStats onStatsRandomized={handleStatsRandomized} />
              </div>
            </div>
          {/* Other Stuff and Saving Throws */}
          <div className="flex flex-col items-stretch">
            <div className="flex flex-row  bg-slate-600 rounded p-3 m-1 items-center">
            <select value={Level} onChange={handleLevelChange} className="select-styles">
        {/* Placeholder option */}
        <option value="" disabled>
          -- Select a Level --
        </option>
        {LevelElements}
      </select>
                <h2 className="text-white text-1xl font-bold italic">Level</h2>
              </div>
              <div className="flex flex-row justify-between bg-slate-600 rounded p-3 m-1 items-center">
                <p className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400 bg-white" >+{charProficiencyBonus}</p>
                <h2 className="text-white text-1xl font-bold italic">Proficiency Bonus</h2>
            </div>
          {/* Saving Throws */}
          <div className="container">
            <h2 className="text-white text-1xl text-center font-bold italic">Saving Throws</h2>
            {Object.keys(savingThrows).map((abilityKey) => (
            <SavingThrowInput
              key={abilityKey}
              ability={abilityKey.toUpperCase()}
              isProficient={savingThrows[abilityKey].isProficient}
              savingThrowValue={calculateSavingThrow(abilityKey)}
            />
          ))}
                      {/* Combat */}
                      <div className="flex flex-col items-stretch justify-between">
              <div className="centered-flex-column m-1">
                <h2 className="text-white text-1xl font-bold italic">Armor Class</h2>
                <input
                  className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400 bg-white"
                  type="number"
                  value={charArmorClass}
                  onChange={(e) => setCharArmorClass(e.target.value)}
                />
              </div>
              <div className="centered-flex-column">
                <h2 className="text-white text-1xl font-bold italic">Speed</h2>
                <p className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400 bg-white">{charSpeed}ft</p>
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between">
              <div className="centered-flex-column m-1">
                <h2 className="text-white text-1xl font-bold italic">Initiative</h2>
                <p
                  className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400 bg-white">{charInitiative}</p>
              </div>
              <div className="centered-flex-column">
                <h2 className="text-white text-1xl font-bold italic">Hit Points</h2>
                <p className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400 bg-white">{charHitPoints}</p>
          </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
