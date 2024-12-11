'use client';
import { useState } from "react";
import Link from "next/link";
import { BiShuffle } from "react-icons/bi";
import SelectApi from "../components/selectComponent";
import CharacterAttributes from "./character-attributes";
import CharacterSheet from "./character-sheet";

export default function Page() {

  const imagePaths = [
    "/assets/happy_holidays.png",
    "/assets/haunted_shadows.png",
    "/assets/idek_sunset.png",
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const [charPhoto, setCharPhoto] = useState(imagePaths[0]);

  const [errorTxt,setErrorTxt] = useState("")
  //theres a lot of values
  const [dndCharacterValues,setDndCharacterValues] = useState({
    //design values
    name:"" ,
    class: "" ,
    age: "" ,
    level:1,
    height: "" ,
    weight: "" ,
    eyes: "" ,
    skin: "" ,
    hair: "" ,
    race: "" ,
    photo: charPhoto,
    desc: "" ,
    persTraits: "" ,
    ideals: "" ,
    bonds: "" ,
    flaws: "" ,
    //ability scores
    strength: 10,
    strengthMod: 0,
    dexterity: 10,
    dexterityMod: 0,
    constitution: 10,
    constitutionMod: 0,
    intelligence: 10,
    intelligenceMod: 0,
    wisdom: 10,
    wisdomMod: 0,
    charisma: 10,
    charismaMod: 0,
    //saving throws
    strengthST: 0,
    strengthSTProf: false,
    dexterityST: 0,
    dexteritySTProf: false,
    constitutionST: 0,
    constitutionSTProf: false,
    intelligenceST: 0,
    intelligenceSTProf: false,
    wisdomST: 0,
    wisdomSTProf: false,
    charismaST: 0,
    charismaSTProf: false,
    //skills
    acrobatics: 0,
    acrobaticsProf: false,
    animalHandling: 0,
    animalHandlingProf: false,
    arcana: 0,
    arcanaProf: false,
    athletics: 0,
    athleticsProf: false,
    deception: 0,
    deceptionProf: false,
    history: 0,
    historyProf: false,
    insight: 0,
    insightProf: false,
    intimidation: 0,
    intimidationProf: false,
    investigation: 0,
    investigationProf: false,
    medicine: 0,
    medicineProf: false,
    nature: 0,
    natureProf: false,
    perception: 0,
    perceptionProf: false,
    performance: 0,
    performanceProf: false,
    persuasion: 0,
    persuasionProf: false,
    religion: 0,
    religionProf: false,
    sleightOfHand: 0,
    sleightOfHandProf: false,
    stealth: 0,
    stealthProf: false,
    survival: 0,
    survivalProf: false,
    //combat values
    armorClass: 0,
    initiative: 0,
    speed: 0,
    hitPoints: 0,
    //other values
    passiveWisdom: 0,
    proficiencyBonus: 0,
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const updateCharacterValues  = (update) => {
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      ...update
    }));
  };

  const handleRandomCharName = () => {
    const firstNames = [
      "Benjamin", "David", "Joel", "Eli",
      "Matthew", "Samuel", "William", "Austin", "Josiah",
      "Emma", "Anastasia", "Esther",
      "Skye", "Shaela", "Madison",
    ];
    const lastNames = [
      "Simms", "Numrich", "Wagner", "Wiebe",
      "Georget", "Greb", "Helder", "Dixon",
    ];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      name:`${firstName} ${lastName}`,
    }));
    
  }
  const handleRandomCharClass = () => {
    //this will use a random dnd name api
    const dndClasses = [
      "Barbarian", "Bard", "Cleric", "Druid",
      "Fighter", "Monk", "Paladin", "Ranger",
      "Rogue", "Sorcerer", "Warlock", "Wizard",
    ];

    const charClass = dndClasses[Math.floor(Math.random() * dndClasses.length)];
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      class:charClass,
    }));
    handleRandomCharPhoto();
  }
  const handleClassChange = (selected)=>{
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      class: selected,
    }));
  }
  const handleRaceChange = (selected) =>{
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      race:selected,
    }));
  }
  const handleRandomCharAge = () => {
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      age:Math.floor(Math.random() * 100),
    }));
  }
  const handleRandomCharHeight = () => {
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      height:Math.floor(Math.random() * 24) + 48,
    }));
    
  }
  const handleRandomCharWeight = () => {
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      weight:Math.floor(Math.random() * 100) + 100,
    }));
  }

  const handleRandomCharEyes = () => {
    const eyeColours = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White", "Grey", "Hazel", "Amber"];
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      eyes:eyeColours[Math.floor(Math.random() * eyeColours.length)],
    }));
  }
  const handleRandomCharSkin = () => {
    const skinColours = ["Pale", "Fair", "Tan", "Olive", "Dark"];
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      skin:skinColours[Math.floor(Math.random() * skinColours.length)],
    }));
    
  }
  const handleRandomCharHair = () => {
    const hairColours = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White", "Grey", "Blonde", "Brunette", "Auburn", "Chestnut", "Strawberry Blonde"];
    setDndCharacterValues((prevValues) => ({
      ...prevValues,
      hair:hairColours[Math.floor(Math.random() * hairColours.length)],
    }));
  }


  const handleRandomCharPhoto = () => {

    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    console.log(randomIndex);
    
    setCharPhoto(imagePaths[randomIndex]);
  };

  //what this will do is send over the character data to the next page, aka the step 2 component named "character-data"
  const handleNextStep = () => {
    console.log(currentStep);
      if (currentStep === 1) {
        if (!dndCharacterValues.class || !dndCharacterValues.race) {
          // Show a warning message (you could also use alert or modal)
          setErrorTxt("Please select both a class and a race before proceeding.");
      
          // Optionally, return early to prevent further action
          return;
        }
        setErrorTxt("")
        setCurrentStep(2);
        console.log(currentStep);
      }
      else if (currentStep === 2) {
        setCurrentStep(3);
        console.log(currentStep);
      }
      else if (currentStep === 3) {
        setCurrentStep(4);
        console.log(currentStep);
      }
  };
  const handlePrevStep = () => {
    console.log(currentStep);
      if (currentStep === 4) {
        setCurrentStep(3);
        console.log(currentStep);
      }
      else if (currentStep === 3) {
        setCurrentStep(2);
        console.log(currentStep);
      }
      else if (currentStep === 2) {
        setCurrentStep(1);
        console.log(currentStep);
      }
  };

  //step 1: character design
  if (currentStep === 1) {
    return (
      <main className="centered-flex-column bg-slate-400 min-h-screen">
        <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">-- Character Design --</h1>
        <h2 className="text-black text-1xl italic text-center w-1/4">Begin making the design of your character. Make it truly yours, or randomize!</h2>
        {/* character attributes */}
        <div className="flex flex-row items-stretch">
          {/* character name, class */}
          <div className="flex flex-col items-stretch p-3 m-1 bg-slate-600 rounded">
            {/* character name */}
            <div className="flex flex-col items-stretch mb-1">
              <input className="select-styles" type="text" placeholder="e.g. Idek the Confused" name="name" value={dndCharacterValues.name} onChange={handleChange}/>
              <div className="centered-flex-row justify-between pt-1 w-full">
              <h2 className="font-bold text-white">Character Name</h2>
              <BiShuffle
                className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                onClick={handleRandomCharName}
              />
              </div>
            </div>
            {/* class */}
            <div className="flex flex-col items-stretch mt-1">
              <SelectApi path={"classes"} onSelectOption={handleClassChange}/>
              <div className="centered-flex-row justify-between pt-1 w-full">
              <h2 className="font-bold text-white">Class</h2>
              <BiShuffle
                className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                onClick={handleRandomCharClass}
              />
              </div>
            </div>
          </div>
          {/* age, height, weight, eyes, skin, hair */}
          <div className="flex flex-col items-start p-3 m-1 bg-slate-600 rounded">
            {/* age, height, weight */}
            <div className="flex flex-row items-start">
              <div className="flex flex-col mb-1 mr-1">
                <input className="select-styles" type="number" placeholder="Human Year" name="age" value={dndCharacterValues.age} onChange={handleChange}/>
                <div className="centered-flex-row justify-between pt-1 w-full">
                  <h2 className="font-bold text-white">Age</h2>
                  <BiShuffle
                    className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                    onClick={handleRandomCharAge}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-1 mx-1">
                <input className="select-styles" type="number" id="char_height" placeholder="Feet" name="height" value={dndCharacterValues.height} onChange={handleChange}/>
                <div className="centered-flex-row justify-between pt-1 w-full">
                  <h2 className="font-bold text-white">Height (ft)</h2>
                  <BiShuffle
                    className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                    onClick={handleRandomCharHeight}
                  />
                  </div>
              </div>
              <div className="flex flex-col mb-1 ml-1">
                <input className="select-styles" type="number" id="char_weight" placeholder="Pounds" name="weight" value={dndCharacterValues.weight} onChange={handleChange}/>
                <div className="centered-flex-row justify-between pt-1 w-full">
                  <h2 className="font-bold  text-white">Weight (lbs)</h2>
                  <BiShuffle
                    className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                    onClick={handleRandomCharWeight}
                  />
                </div>
              </div>
            </div>
            {/* eyes, skin, hair */}
            <div className="flex flex-row items-start">
              <div className="flex flex-col mt-1 mr-1">
                <input className="select-styles" type="text" id="charEyes" placeholder="e.g. Blue" name="eyes" value={dndCharacterValues.eyes} onChange={handleChange}/>
                <div className="centered-flex-row justify-between pt-1 w-full">
                  <h2 className="font-bold text-white">Eyes</h2>
                  <BiShuffle
                    className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                    onClick={handleRandomCharEyes}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-1 mx-1">
                <input className="select-styles" type="text" id="charSkin" placeholder="e.g. White" name="skin" value={dndCharacterValues.skin} onChange={handleChange}/>
                <div className="centered-flex-row justify-between pt-1 w-full">
                  <h2 className="font-bold text-white">Skin</h2>
                  <BiShuffle
                    className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                    onClick={handleRandomCharSkin}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-1 ml-1">
                <input className="select-styles" type="text" id="charHair" placeholder="e.g. Blonde" name="hair" value={dndCharacterValues.hair} onChange={handleChange}/>
                <div className="centered-flex-row justify-between pt-1 w-full">
                  <h2 className="font-bold text-white">Hair</h2>
                  <BiShuffle
                    className="ml-2 text-white bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                    onClick={handleRandomCharHair}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* character appearance */}
        <div className="flex flex-row items-stretch">
          {/* photo and race */}
          <div className="flex flex-col justify-between p-3 m-1 bg-slate-600 rounded">
            {/* photo */}
            <div className="flex flex-col items-stretch mb-1">
              <img className="p-1 rounded-3xl h-32" src={charPhoto} alt={dndCharacterValues.race + " Photo"} />
              <div className="centered-flex-row justify-between pt-1 w-full">
              </div>
            </div>
            {/* desc */}
            <div className="flex flex-col items-stretch mb-1">
              <SelectApi path={"races"} onSelectOption={handleRaceChange}/>         
              <h2 className="font-bold text-white">Race</h2>
            </div>
          </div>
          <div className="flex flex-col justify-between p-3 m-1 bg-slate-600 rounded">
            {/* desc */}
            <div className="flex flex-col items-stretch mb-1">
              <textarea className="select-styles" type="text" placeholder="Description" name="desc" value={dndCharacterValues.desc} onChange={handleChange}/>
              <h2 className="font-bold text-white">Description</h2>
            </div>
          </div>
          {/* personality traits, ideals, bonds, flaws */}
          <div className="flex flex-col items-start p-3 m-1 bg-slate-600 rounded">
            {/* personality traits, ideals*/}
            <div className="flex flex-row items-start">
              {/* personality traits */}
              <div className="flex flex-col mb-1 mr-1">
                <textarea className="select-styles" placeholder="e.g. Curious, Loyal, etc." name="persTraits" value={dndCharacterValues.persTraits} onChange={handleChange}/>
                <h2 className="font-bold text-white">Personality Traits</h2>
              </div>
              {/* ideals */}
              <div className="flex flex-col mb-1 mx-1">
                <textarea className="select-styles" placeholder="e.g. Freedom, Knowledge, etc." name="ideals" value={dndCharacterValues.ideals} onChange={handleChange}/>
                <h2 className="font-bold text-white">Ideals</h2>
              </div>
            </div>
            {/* bonds, flaws */}
            <div className="flex flex-row items-start">
              {/* bonds */}
              <div className="flex flex-col mt-1 mr-1">
                <textarea className="select-styles" placeholder="e.g. Family Legacy, Artifact of Significance, etc." name="bonds" value={dndCharacterValues.bonds} onChange={handleChange}/>
                <h2 className="font-bold text-white">Bonds</h2>
              </div>
              {/* flaws */}
              <div className="flex flex-col mt-1 mx-1">
                <textarea className="select-styles" placeholder="e.g. Impulsive, Overconfident, etc." name="flaws" value={dndCharacterValues.flaws} onChange={handleChange}/>
                <h2 className="font-bold text-white">Flaws</h2>
              </div>
            </div>
          </div>
        </div>
        {/* next page button */}
        <br/>
        <p className="text-red-600">{errorTxt}</p>
        <button
          className="flex items-center justify-center text-white bg-blue-500 h-16 w-32 text-3xl font-bold rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
          onClick={handleNextStep}>
            Next
        </button>
      </main>
    );
  }
  else if (currentStep === 2) {
    return (
      <main className="centered-flex-column justify-start bg-slate-400 min-h-screen">
        <CharacterAttributes dndCharacterValues={dndCharacterValues} updateCharacterValues={updateCharacterValues }/>
        <div className="centered-flex-row">
          <button
            className="flex items-center justify-center m-3 text-white bg-blue-500 h-16 w-48 text-3xl font-bold rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
            onClick={handlePrevStep}>
              Previous
          </button>
          <button
            className="flex items-center justify-center m-3 text-white bg-blue-500 h-16 w-32 text-3xl font-bold rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
            onClick={handleNextStep}>
              Next
          </button>
        </div>
      </main>  
    );
  }
  else if (currentStep === 3) {
    return (
      <main className="centered-flex-column justify-start bg-slate-400 min-h-screen">
        <CharacterSheet dndCharacterValues={dndCharacterValues} />
        <div className="centered-flex-row">
          <button
            className="flex items-center justify-center m-3 text-white bg-blue-500 h-16 w-48 text-3xl font-bold rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
            onClick={handlePrevStep}>
              Previous
          </button>
          <button
            className="flex items-center justify-center m-3 text-white bg-blue-500 h-16 w-32 text-3xl font-bold rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
            onClick={handleNextStep}>
              Save
          </button>
        </div>
      </main>
    );
  }
}