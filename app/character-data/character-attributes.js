'use client';
<<<<<<< Updated upstream
=======
import { useState } from "react";
>>>>>>> Stashed changes

export default function CharacterAttributes({dndCharacterValues}) {

  //ability scores
  const [charStrength, setCharStrength] = useState(0);
  const [charStrengthMod, setCharStrengthMod] = useState(0);
  const [charDexterity, setCharDexterity] = useState(0);
  const [charDexterityMod, setCharDexterityMod] = useState(0);
  const [charConstitution, setCharConstitution] = useState(0);
  const [charConstitutionMod, setCharConstitutionMod] = useState(0);
  const [charIntelligence, setCharIntelligence] = useState(0);
  const [charIntelligenceMod, setCharIntelligenceMod] = useState(0);
  const [charWisdom, setCharWisdom] = useState(0);
  const [charWisdomMod, setCharWisdomMod] = useState(0);
  const [charCharisma, setCharCharisma] = useState(0);
  const [charCharismaMod, setCharCharismaMod] = useState(0);

  //saving throws
  const [charStrengthST, setCharStrengthST] = useState(0);
  const [charStrenghtSTProf, setCharStrengthSTProf] = useState(false);
  const [charDexterityST, setCharDexterityST] = useState(0);
  const [charDexteritySTProf, setCharDexteritySTProf] = useState(false);
  const [charConstitutionST, setCharConstitutionST] = useState(0);
  const [charConstitutionSTProf, setCharConstitutionSTProf] = useState(false);
  const [charIntelligenceST, setCharIntelligenceST] = useState(0);
  const [charIntelligenceSTProf, setCharIntelligenceSTProf] = useState(false);
  const [charWisdomST, setCharWisdomST] = useState(0);
  const [charWisdomSTProf, setCharWisdomSTProf] = useState(false);
  const [charCharismaST, setCharCharismaST] = useState(0);
  const [charCharismaSTProf, setCharCharismaSTProf] = useState(false);
  
  //skills
  const [charAcrobatics, setCharAcrobatics] = useState(0);
  const [charAcrobaticsProf, setCharAcrobaticsProf] = useState(false);
  const [charAnimalHandling, setCharAnimalHandling] = useState(0);
  const [charAnimalHandlingProf, setCharAnimalHandlingProf] = useState(false);
  const [charArcana, setCharArcana] = useState(0);
  const [charArcanaProf, setCharArcanaProf] = useState(false);
  const [charAthletics, setCharAthletics] = useState(0);
  const [charAthleticsProf, setCharAthleticsProf] = useState(false);
  const [charDeception, setCharDeception] = useState(0);
  const [charDeceptionProf, setCharDeceptionProf] = useState(false);
  const [charHistory, setCharHistory] = useState(0);
  const [charHistoryProf, setCharHistoryProf] = useState(false);
  const [charInsight, setCharInsight] = useState(0);
  const [charInsightProf, setCharInsightProf] = useState(false);
  const [charIntimidation, setCharIntimidation] = useState(0);
  const [charIntimidationProf, setCharIntimidationProf] = useState(false);
  const [charInvestigation, setCharInvestigation] = useState(0);
  const [charInvestigationProf, setCharInvestigationProf] = useState(false);
  const [charMedicine, setCharMedicine] = useState(0);
  const [charMedicineProf, setCharMedicineProf] = useState(false);
  const [charNature, setCharNature] = useState(0);
  const [charNatureProf, setCharNatureProf] = useState(false);
  const [charPerception, setCharPerception] = useState(0);
  const [charPerceptionProf, setCharPerceptionProf] = useState(false);
  const [charPerformance, setCharPerformance] = useState(0);
  const [charPerformanceProf, setCharPerformanceProf] = useState(false);
  const [charPersuasion, setCharPersuasion] = useState(0);
  const [charPersuasionProf, setCharPersuasionProf] = useState(false);
  const [charReligion, setCharReligion] = useState(0);
  const [charReligionProf, setCharReligionProf] = useState(false);
  const [charSleightOfHand, setCharSleightOfHand] = useState(0);
  const [charSleightOfHandProf, setCharSleightOfHandProf] = useState(false);
  const [charStealth, setCharStealth] = useState(0);
  const [charStealthProf, setCharStealthProf] = useState(false);
  const [charSurvival, setCharSurvival] = useState(0);
  const [charSurvivalProf, setCharSurvivalProf] = useState(false);
  const [passiveWisdom, setPassiveWisdom] = useState(0);

  //combat
  const [charArmorClass, setCharArmorClass] = useState(0);
  const [charInitiative, setCharInitiative] = useState(0);
  const [charSpeed, setCharSpeed] = useState(0);
  const [charHitPoints, setCharHitPoints] = useState(0);

  //other
  const [charInspiration, setCharInspiration] = useState(0);
  const [charProficiencyBonus, setCharProficiencyBonus] = useState(0);

  return (
    <main className="flex flex-col items-center bg-slate-400 min-h-screen">
      <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">-- Character Attributes --</h1>
      <h2 className="text-black text-1xl italic text-center w-1/2">Begin making the design of your character. Make it truly yours, or randomize!</h2>

<<<<<<< Updated upstream
      <div className="flex flex-row items-stretch">
        {/* <p>
          ¯\_(ツ)_/¯
        </p> */}
=======
      <div className="flex flex-row bg-slate-600 rounded p-3 m-1">
        <p className="text-amber-200 text-3xl font-bold italic">{dndCharacterValues.name}</p>
        <p className="text-white text-3xl font-bold italic">, of the {dndCharacterValues.class} class</p>
      </div>
      <div className="flex flex-row rounded p-3 m-1">
        {/* ability scores */}
        <div className="flex flex-col bg-slate-600 rounded p-2 m-1">
          <div className="flex flex-col items-center">
            <h2 className="text-white text-1xl font-bold italic">Strength</h2>
            <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charStrength} onChange={(e) => setCharStrength(e.target.value)} />
            <input className="text-black text-xs p-1 rounded-full text-end w-10 border-4 border-stone-400" type="number" value={charStrengthMod} onChange={(e) => setCharStrengthMod(e.target.value)} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-1xl font-bold italic">Dexterity</h2>
            <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charDexterity} onChange={(e) => setCharDexterity(e.target.value)} />
            <input className="text-black text-xs p-1 rounded-full text-end w-10 border-4 border-stone-400" type="number" value={charDexterityMod} onChange={(e) => setCharDexterityMod(e.target.value)} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-1xl font-bold italic">Constitution</h2>
            <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charConstitution} onChange={(e) => setCharConstitution(e.target.value)} />
            <input className="text-black text-xs p-1 rounded-full text-end w-10 border-4 border-stone-400" type="number" value={charConstitutionMod} onChange={(e) => setCharConstitutionMod(e.target.value)} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-1xl font-bold italic">Intelligence</h2>
            <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charIntelligence} onChange={(e) => setCharIntelligence(e.target.value)} />
            <input className="text-black text-xs p-1 rounded-full text-end w-10 border-4 border-stone-400" type="number" value={charIntelligenceMod} onChange={(e) => setCharIntelligenceMod(e.target.value)} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-1xl font-bold italic">Wisdom</h2>
            <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charWisdom} onChange={(e) => setCharWisdom(e.target.value)} />
            <input className="text-black text-xs p-1 rounded-full text-end w-10 border-4 border-stone-400" type="number" value={charWisdomMod} onChange={(e) => setCharWisdomMod(e.target.value)} />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-1xl font-bold italic">Charisma</h2>
            <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charCharisma} onChange={(e) => setCharCharisma(e.target.value)} />
            <input className="text-black text-xs p-1 rounded-full text-end w-10 border-4 border-stone-400" type="number" value={charCharismaMod} onChange={(e) => setCharCharismaMod(e.target.value)} />
          </div>
          {/* passive wisdom */}
          <div className="flex flex-row items-center">
            <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={passiveWisdom} onChange={(e) => setPassiveWisdom(e.target.value)} />
            <div className="flex flex-col items-center">
              <h2 className="text-white text-1xl font-bold italic whitespace-pre-wrap">Passive</h2>
              <h2 className="text-white text-1xl font-bold italic whitespace-pre-wrap">Wisdom</h2>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="flex flex-col items-stretch">
          <div className="flex flex-col items-stretch bg-slate-600 rounded p-2 m-1">
            <h2 className="text-white text-1xl text-center font-bold italic">Skills</h2>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charAcrobaticsProf} onChange={(e) => setCharAcrobaticsProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charAcrobatics} onChange={(e) => setCharAcrobatics(e.target.value)} />
              <h2 className="text-white text-sm italic">Acrobatics</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charAnimalHandlingProf} onChange={(e) => setCharAnimalHandlingProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charAnimalHandling} onChange={(e) => setCharAnimalHandling(e.target.value)} />
              <h2 className="text-white text-sm italic">Animal Handling</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charArcanaProf} onChange={(e) => setCharArcanaProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charArcana} onChange={(e) => setCharArcana(e.target.value)} />
              <h2 className="text-white text-sm italic">Arcana</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charAthleticsProf} onChange={(e) => setCharAthleticsProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charAthletics} onChange={(e) => setCharAthletics(e.target.value)} />
              <h2 className="text-white text-sm italic">Athletics</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charDeceptionProf} onChange={(e) => setCharDeceptionProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charDeception} onChange={(e) => setCharDeception(e.target.value)} />
              <h2 className="text-white text-sm italic">Deception</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charHistoryProf} onChange={(e) => setCharHistoryProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charHistory} onChange={(e) => setCharHistory(e.target.value)} />
              <h2 className="text-white text-sm italic">History</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charInsightProf} onChange={(e) => setCharInsightProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charInsight} onChange={(e) => setCharInsight(e.target.value)} />
              <h2 className="text-white text-sm italic">Insight</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charIntimidationProf} onChange={(e) => setCharIntimidationProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charIntimidation} onChange={(e) => setCharIntimidation(e.target.value)} />
              <h2 className="text-white text-sm italic">Intimidation</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charInvestigationProf} onChange={(e) => setCharInvestigationProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charInvestigation} onChange={(e) => setCharInvestigation(e.target.value)} />
              <h2 className="text-white text-sm italic">Investigation</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charMedicineProf} onChange={(e) => setCharMedicineProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charMedicine} onChange={(e) => setCharMedicine(e.target.value)} />
              <h2 className="text-white text-sm italic">Medicine</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charNatureProf} onChange={(e) => setCharNatureProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charNature} onChange={(e) => setCharNature(e.target.value)} />
              <h2 className="text-white text-sm italic">Nature</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charPerceptionProf} onChange={(e) => setCharPerceptionProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charPerception} onChange={(e) => setCharPerception(e.target.value)} />
              <h2 className="text-white text-sm italic">Perception</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charPerformanceProf} onChange={(e) => setCharPerformanceProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charPerformance} onChange={(e) => setCharPerformance(e.target.value)} />
              <h2 className="text-white text-sm italic">Performance</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charPersuasionProf} onChange={(e) => setCharPersuasionProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charPersuasion} onChange={(e) => setCharPersuasion(e.target.value)} />
              <h2 className="text-white text-sm italic">Persuasion</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charReligionProf} onChange={(e) => setCharReligionProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charReligion} onChange={(e) => setCharReligion(e.target.value)} />
              <h2 className="text-white text-sm italic">Religion</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charSleightOfHandProf} onChange={(e) => setCharSleightOfHandProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charSleightOfHand} onChange={(e) => setCharSleightOfHand(e.target.value)} />
              <h2 className="text-white text-sm italic">Sleight of Hand</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charStealthProf} onChange={(e) => setCharStealthProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charStealth} onChange={(e) => setCharStealth(e.target.value)} />
              <h2 className="text-white text-sm italic">Stealth</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-4 rounded-full text-end w-4 p-1" type="checkbox" value={charSurvivalProf} onChange={(e) => setCharSurvivalProf(e.target.checked)} />
              <input className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 border-4 border-stone-400" type="number" value={charSurvival} onChange={(e) => setCharSurvival(e.target.value)} />
              <h2 className="text-white text-sm italic">Survival</h2>
            </div>
          </div>
        </div>
        {/* other stuff and saving throws */}
        <div className="flex flex-col items-stretch">
          {/* other stuff */}
          <div className="flex flex-col items-stretch">
            <div className="flex flex-rol justify-between bg-slate-600 rounded p-3 m-1 items-center">
              <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charInspiration} onChange={(e) => setCharInspiration(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Inspiration</h2>
            </div>
            <div className="flex flex-rol justify-between bg-slate-600 rounded p-3 m-1 items-center">
              <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charProficiencyBonus} onChange={(e) => setCharProficiencyBonus(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Proficiency Bonus</h2>
            </div>
          </div>
          {/* saving throws */}
          <div className="flex flex-col items-stretch bg-slate-600 rounded p-2 m-1">
            <h2 className="text-white text-1xl text-center font-bold italic">Saving Throws</h2>
            <div className="flex flex-row items-center">
              <input className="text-black h-5 rounded-full text-end w-10" type="checkbox" value={charStrenghtSTProf} onChange={(e) => setCharStrengthSTProf(e.target.checked)} />
              <input className="text-black text-sm p-1 m-1 rounded text-end w-10 border-4 border-stone-400" type="number" value={charStrengthST} onChange={(e) => setCharStrengthST(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Strength</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-5 rounded-full text-end w-10" type="checkbox" value={charDexteritySTProf} onChange={(e) => setCharDexteritySTProf(e.target.checked)} />
              <input className="text-black text-sm p-1 m-1 rounded text-end w-10 border-4 border-stone-400" type="number" value={charDexterityST} onChange={(e) => setCharDexterityST(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Dexterity</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-5 rounded-full text-end w-10" type="checkbox" value={charConstitutionSTProf} onChange={(e) => setCharConstitutionSTProf(e.target.checked)} />
              <input className="text-black text-sm p-1 m-1 rounded text-end w-10 border-4 border-stone-400" type="number" value={charConstitutionST} onChange={(e) => setCharConstitutionST(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Constitution</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-5 rounded-full text-end w-10" type="checkbox" value={charIntelligenceSTProf} onChange={(e) => setCharIntelligenceSTProf(e.target.checked)} />
              <input className="text-black text-sm p-1 m-1 rounded text-end w-10 border-4 border-stone-400" type="number" value={charIntelligenceST} onChange={(e) => setCharIntelligenceST(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Intelligence</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-5 rounded-full text-end w-10" type="checkbox" value={charWisdomSTProf} onChange={(e) => setCharWisdomSTProf(e.target.checked)} />
              <input className="text-black text-sm p-1 m-1 rounded text-end w-10 border-4 border-stone-400" type="number" value={charWisdomST} onChange={(e) => setCharWisdomST(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Wisdom</h2>
            </div>
            <div className="flex flex-row items-center">
              <input className="text-black h-5 rounded-full text-end w-10" type="checkbox" value={charCharismaSTProf} onChange={(e) => setCharCharismaSTProf(e.target.checked)} />
              <input className="text-black text-sm p-1 m-1 rounded text-end w-10 border-4 border-stone-400" type="number" value={charCharismaST} onChange={(e) => setCharCharismaST(e.target.value)} />
              <h2 className="text-white text-1xl font-bold italic">Charisma</h2>
            </div>
          </div>
          {/* combat */}
          <div className="flex flex-row items-stretch justify-evenly bg-slate-600 rounded p-2 m-1">
            <div className="flex flex-col items-stretch justify-between">
              <div className="flex flex-col items-center m-1">
                <h2 className="text-white text-1xl font-bold italic">Armor Class</h2>
                <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charArmorClass} onChange={(e) => setCharArmorClass(e.target.value)} />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white text-1xl font-bold italic">Speed</h2>
                <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charSpeed} onChange={(e) => setCharSpeed(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col items-stretch justify-between">
              <div className="flex flex-col items-center m-1">
                <h2 className="text-white text-1xl font-bold italic">Initiative</h2>
                <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charInitiative} onChange={(e) => setCharInitiative(e.target.value)} />
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white text-1xl font-bold italic">Hit Points</h2>
                <input className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400" type="number" value={charHitPoints} onChange={(e) => setCharHitPoints(e.target.value)} />
              </div>
            </div>
          </div>              
        </div>
>>>>>>> Stashed changes
      </div>
    </main>
  );
}