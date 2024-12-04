'use client';
import { useState } from "react";
import Link from "next/link";
import { BiShuffle } from "react-icons/bi";
import tempImage1 from "../../public/assets/idek_sunset.png";
import tempImage2 from "../../public/assets/haunted_shadows.png";
import tempImage3 from "../../public/assets/happy_holidays.png";

export default function Page() {
  const [currentStep, setCurrenntStep] = useState(1);

  const [charName, setCharName] = useState("");
  const [charClass, setCharClass] = useState("");

  const [charAge, setCharAge] = useState("");
  const [charHeight, setCharHeight] = useState("");
  const [charWeight, setCharWeight] = useState("");
  
  const [charEyes, setCharEyes] = useState("");
  const [charSkin, setCharSkin] = useState("");
  const [charHair, setCharHair] = useState("");

  const [charPhoto, setCharPhoto] = useState(tempImage1);
  const [charDesc, setCharDesc] = useState("");

  const [charPersTraits, setCharPersTraits] = useState("");
  const [charIdeals, setCharIdeals] = useState("");
  const [charBonds, setCharBonds] = useState("");
  const [charFlaws, setCharFlaws] = useState("");

  const dndCharacterDesignData = {
    name: charName,
    class: charClass,
    age: charAge,
    height: charHeight,
    weight: charWeight,
    eyes: charEyes,
    skin: charSkin,
    hair: charHair,
    photo: charPhoto,
    desc: charDesc,
    persTraits: charPersTraits,
    ideals: charIdeals,
    bonds: charBonds,
    flaws: charFlaws,
  };

  const handleRandomCharName = () => {
    //this will use a random dnd name api
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
    setCharName(`${firstName} ${lastName}`);
  }
  const handleRandomCharClass = () => {
    //this will use a random dnd name api
    const dndClasses = [
      "Barbarian", "Bard", "Cleric", "Druid",
      "Fighter", "Monk", "Paladin", "Ranger",
      "Rogue", "Sorcerer", "Warlock", "Wizard",
    ];

    const charClass = dndClasses[Math.floor(Math.random() * dndClasses.length)];
    setCharClass(charClass);
    //change the photo to match the class
    handleRandomCharPhoto();
  }

  const handleRandomCharAge = () => {
    setCharAge(Math.floor(Math.random() * 100));
  }
  const handleRandomCharHeight = () => {
    setCharHeight(Math.floor(Math.random() * 24) + 48);
  }
  const handleRandomCharWeight = () => {
    setCharWeight(Math.floor(Math.random() * 100) + 100);
  }

  const handleRandomCharEyes = () => {
    const eyeColours = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White", "Grey", "Hazel", "Amber"];
    setCharEyes(eyeColours[Math.floor(Math.random() * eyeColours.length)]);
  }
  const handleRandomCharSkin = () => {
    const skinColours = ["Pale", "Fair", "Tan", "Olive", "Dark"];
    setCharSkin(skinColours[Math.floor(Math.random() * skinColours.length)]);
  }
  const handleRandomCharHair = () => {
    const hairColours = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Brown", "Black", "White", "Grey", "Blonde", "Brunette", "Auburn", "Chestnut", "Strawberry Blonde"];
    setCharHair(hairColours[Math.floor(Math.random() * hairColours.length)]);
  }

  const handleRandomCharPhoto = () => {
    const imageList = [tempImage1, tempImage2, tempImage3];
    const randomIndex = Math.floor(Math.random() * imageList.length);
    setCharPhoto(imageList[randomIndex]);
  };

  //save/next page button, this should take all the variables from this page and move on to the next page
  const handleSaveCharacter = () => {
    //save all the variables to the database
    //move on to the next page
  };

  return (
    <main className="flex flex-col items-center bg-slate-400 min-h-screen">
      <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">-- Character Design --</h1>
      
      {/* im changing how im setting up the pages, its gonna be component based */}



      <h2 className="text-black text-1xl italic text-center w-1/4">Begin making the design of your character. Make it truly yours, or randomize!</h2>
      {/* character attributes */}
      <div className="flex flex-row items-stretch">
        {/* character name, class */}
        <div className="flex flex-col items-stretch p-3 m-1 bg-slate-600 rounded">
          {/* character name */}
          <div className="flex flex-col items-stretch mb-1">
            <input className="text-black p-1 rounded border-4 border-stone-400" type="text" placeholder="e.g. Idek the Confused" value={charName} onChange={(e) => setCharName(e.target.value)}/>
            <div className="flex flex-row items-center justify-between pt-1 w-full">
            <h2 className="font-bold">Character Name</h2>
            <BiShuffle
              className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
              onClick={handleRandomCharName}
            />
            </div>
          </div>
          {/* class */}
          <div className="flex flex-col items-stretch mt-1">
            <select className="text-black p-1 rounded border-4 border-stone-400" id="char_class" value={charClass} onChange={(e) => setCharClass(e.target.value)}>
              <option value="Barbarian">Barbarian</option>
              <option value="Bard">Bard</option>
              <option value="Cleric">Cleric</option>
              <option value="Druid">Druid</option>
              <option value="Fighter">Fighter</option>
              <option value="Monk">Monk</option>
              <option value="Paladin">Paladin</option>
              <option value="Ranger">Ranger</option>
              <option value="Rogue">Rogue</option>
              <option value="Sorcerer">Sorcerer</option>
              <option value="Warlock">Warlock</option>
              <option value="Wizard">Wizard</option>
            </select>
            <div className="flex flex-row items-center justify-between pt-1 w-full">
            <h2 className="font-bold">Class</h2>
            <BiShuffle
              className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
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
              <input className="text-black p-1 rounded border-4 border-stone-400" type="number" placeholder="Human Year" value={charAge} onChange={(e) => setCharAge(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Age</h2>
                <BiShuffle
                  className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={handleRandomCharAge}
                />
              </div>
            </div>
            <div className="flex flex-col mb-1 mx-1">
              <input className="text-black p-1 rounded border-4 border-stone-400" type="number" id="char_height" placeholder="Feet" value={charHeight} onChange={(e) => setCharHeight(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Height (ft)</h2>
                <BiShuffle
                  className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={handleRandomCharHeight}
                />
                </div>
            </div>
            <div className="flex flex-col mb-1 ml-1">
              <input className="text-black p-1 rounded border-4 border-stone-400" type="number" id="char_weight" placeholder="Pounds" value={charWeight} onChange={(e) => setCharWeight(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Weight (lbs)</h2>
                <BiShuffle
                  className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={handleRandomCharWeight}
                />
              </div>
            </div>
          </div>
          {/* eyes, skin, hair */}
          <div className="flex flex-row items-start">
            <div className="flex flex-col mt-1 mr-1">
              <input className="text-black p-1 rounded border-4 border-stone-400" type="text" id="charEyes" placeholder="e.g. Blue" value={charEyes} onChange={(e) => setCharEyes(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Eyes</h2>
                <BiShuffle
                  className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={handleRandomCharEyes}
                />
              </div>
            </div>
            <div className="flex flex-col mt-1 mx-1">
              <input className="text-black p-1 rounded border-4 border-stone-400" type="text" id="charSkin" placeholder="e.g. White" value={charSkin} onChange={(e) => setCharSkin(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Skin</h2>
                <BiShuffle
                  className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={handleRandomCharSkin}
                />
              </div>
            </div>
            <div className="flex flex-col mt-1 ml-1">
              <input className="text-black p-1 rounded border-4 border-stone-400" type="text" id="charHair" placeholder="e.g. Blonde" value={charHair} onChange={(e) => setCharHair(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Hair</h2>
                <BiShuffle
                  className="ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={handleRandomCharHair}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* character appearance */}
      <div className="flex flex-row items-stretch">
        {/* photo and desc */}
        <div className="flex flex-col justify-between p-3 m-1 bg-slate-600 rounded">
          {/* photo */}
          <div className="flex flex-col items-stretch mb-1">
            <img className="p-1 rounded" src={charPhoto} alt={charClass + " Photo"} />
            <div className="flex flex-row items-center justify-between pt-1 w-full">
              <h2 className="font-bold">{charClass}</h2>
            </div>
          </div>
          {/* desc */}
          <div className="flex flex-col items-stretch mb-1">
            <textarea className="text-black p-1 rounded border-4 border-stone-400" type="text" id="char_name" placeholder="Description" value={charDesc} onChange={(e) => setCharDesc(e.target.value)}/>
            <div className="flex flex-row items-center justify-between pt-1 w-full">
              <h2 className="font-bold">Description</h2>
              <button
                className="font-bold italic ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                onClick={()=>{console.log("Lorum Ispum")}}
              >L</button>
            </div>
          </div>
        </div>
        {/* personality traits, ideals, bonds, flaws */}
        <div className="flex flex-col items-start p-3 m-1 bg-slate-600 rounded">
          {/* personality traits, ideals*/}
          <div className="flex flex-row items-start">
            {/* personality traits */}
            <div className="flex flex-col mb-1 mr-1">
              <textarea className="text-black p-1 rounded border-4 border-stone-400" placeholder="e.g. Curious, Loyal, etc." value={charPersTraits} onChange={(e) => setCharPersTraits(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Personality Traits</h2>
                <button
                  className="font-bold italic ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={()=>{console.log("Lorum Ispum")}}
                >L</button>
              </div>
            </div>
            {/* ideals */}
            <div className="flex flex-col mb-1 mx-1">
              <textarea className="text-black p-1 rounded border-4 border-stone-400" placeholder="e.g. Freedom, Knowledge, etc." value={charIdeals} onChange={(e) => setCharIdeals(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Ideals</h2>
                <button
                  className="font-bold italic ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={()=>{console.log("Lorum Ispum")}}
                >L</button>
              </div>
            </div>
          </div>
          {/* bonds, flaws */}
          <div className="flex flex-row items-start">
            {/* bonds */}
            <div className="flex flex-col mt-1 mr-1">
              <textarea className="text-black p-1 rounded border-4 border-stone-400" placeholder="e.g. Family Legacy, Artifact of Significance, etc." value={charBonds} onChange={(e) => setCharBonds(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Bonds</h2>
                <button
                  className="font-bold italic ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={()=>{console.log("Lorum Ispum")}}
                >L</button>
              </div>
            </div>
            {/* flaws */}
            <div className="flex flex-col mt-1 mx-1">
              <textarea className="text-black p-1 rounded border-4 border-stone-400" placeholder="e.g. Impulsive, Overconfident, etc." value={charFlaws} onChange={(e) => setCharFlaws(e.target.value)}/>
              <div className="flex flex-row items-center justify-between pt-1 w-full">
                <h2 className="font-bold">Flaws</h2>
                <button
                  className="font-bold italic ml-2 bg-blue-500 h-7 w-7 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
                  onClick={()=>{console.log("Lorum Ispum")}}
                >L</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* save/next page button */}
      <br/>
      <Link
        href="../character-data"
        className="flex items-center justify-center bg-blue-500 h-16 w-32 text-3xl font-bold rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
        onClick={handleSaveCharacter}>
          Next
      </Link>
    </main>
  );
}