'use client';

export default function CharacterSheet({ dndCharacterValues }) {

    const handleProficiency = (proficiency) => {
        if (proficiency === true) {
            return "✔";
        }
        else {
            return "✘";
        }
    }

    return (
        <main className="flex flex-col items-stretch">
            <div className="flex flex-col items-center">
                {/* character sheet stuff on the right*/}
                <div className="flex flex-row items-stretch">
                    <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">--</h1>
                    <h1 className="text-amber-200 text-6xl m-2 mt-5 font-bold italic">{dndCharacterValues.name}</h1>
                    <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">--</h1>
                </div>
                {/* image */}
                <img className="w-72 h-72 rounded" src={dndCharacterValues.photo} alt={dndCharacterValues.name + "'s Photo"} />
                {/* NAME | A RACE, of the class CLASS */}
                <div className="flex flex-row items-stretch p-3 m-4 bg-slate-600 rounded">
                    <h1 className="text-white text-4xl italic text-stretch">A&nbsp;</h1>
                    <h1 className="text-purple-400 text-4xl font-bold text-stretch">{dndCharacterValues.race}</h1>
                    <h1 className="text-white text-4xl italic text-stretch">, of the&nbsp;</h1>
                    <h1 className="text-red-400 text-4xl font-bold text-stretch">{dndCharacterValues.class}&nbsp;</h1>
                    <h1 className="text-white text-4xl italic text-stretch">class</h1>
                </div>
                <div className="flex flex-row items-stretch p-3 bg-slate-900 rounded">
                    <div className="flex flex-col justify-between p-3 m-1 bg-slate-600 rounded">
                    {/* desc */}
                        <div className="flex flex-col items-stretch mb-1">
                            <p className="text-black p-1 rounded border-4 bg-white border-stone-400">{dndCharacterValues.desc}</p>
                            <h2 className="font-bold text-white">Description</h2>
                        </div>
                    </div>
                    {/* personality traits, ideals, bonds, flaws */}
                    <div className="flex flex-col items-start p-3 m-1 bg-slate-600 rounded">
                        {/* personality traits, ideals*/}
                        <div className="flex flex-row items-stretch">
                            {/* personality traits */}
                            <div className="flex flex-col mb-1 mr-1">
                                <p className="text-black p-1 rounded border-4 bg-white border-stone-400">{dndCharacterValues.persTraits}</p>
                                <h2 className="font-bold text-white">Personality Traits</h2>
                            </div>
                            {/* ideals */}
                            <div className="flex flex-col mb-1 mx-1">
                                <p className="text-black p-1 rounded border-4 bg-white border-stone-400">{dndCharacterValues.ideals}</p>
                                <h2 className="font-bold text-white">Ideals</h2>
                            </div>
                        </div>
                        {/* bonds, flaws */}
                        <div className="flex flex-row items-stretch">
                            {/* bonds */}
                            <div className="flex flex-col mt-1 mr-1">
                                <p className="text-black p-1 rounded border-4 bg-white border-stone-400">{dndCharacterValues.bonds}</p>
                                <h2 className="font-bold text-white">Bonds</h2>
                            </div>
                            {/* flaws */}
                            <div className="flex flex-col mt-1 mx-1">
                                <p className="text-black p-1 rounded border-4 bg-white border-stone-400">{dndCharacterValues.flaws}</p>
                                <h2 className="font-bold text-white">Flaws</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-stretch p-3 m-1 bg-slate-900 rounded">
                    {/* design stuff on the left */}
                    <div className="flex flex-col items-stretch">
                        <div className="flex flex-col items-stretch p-3 m-1 bg-slate-600 rounded">
                            <div className="flex flex-col items-stretch">
                                <h2 className="font-bold text-white">Passive Wisdom</h2>
                                <p className="text-black p-1 rounded border-4 bg-white border-stone-400">{dndCharacterValues.passiveWisdom}</p>
                            </div>
                            <div className="flex flex-col items-stretch">
                                <h2 className="font-bold text-white">Proficiency Bonus</h2>
                                <p className="text-black p-1 rounded border-4 bg-white border-stone-400">{dndCharacterValues.proficiencyBonus}</p>
                            </div>
                        </div>
                        {/* combat */}
                        <div className="flex flex-row items-stretch justify-evenly bg-slate-600 rounded p-2 m-1">
                            <div className="flex flex-col items-stretch justify-between">
                                <div className="flex flex-col items-center m-1">
                                    <h2 className="text-white text-1xl font-bold italic">Armor Class</h2>
                                    <p className="text-black p-1 m-1 rounded text-end w-12 bg-white border-4 border-stone-400">{dndCharacterValues.armorClass}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-1xl font-bold italic">Speed</h2>
                                    <p className="text-black p-1 m-1 rounded text-end w-12 bg-white border-4 border-stone-400">{dndCharacterValues.speed}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch justify-between">
                                <div className="flex flex-col items-center m-1">
                                    <h2 className="text-white text-1xl font-bold italic">Initiative</h2>
                                    <p className="text-black p-1 m-1 rounded text-end w-12 bg-white border-4 border-stone-400">{dndCharacterValues.initiative}</p>
                                </div>
                                <div className="flex flex-col items-center m-1">
                                    <h2 className="text-white text-1xl font-bold italic">Hit Points</h2>
                                    <p className="text-black p-1 m-1 rounded text-end w-12 bg-white border-4 border-stone-400">{dndCharacterValues.hitPoints}</p>
                                </div>
                            </div>
                        </div>
                        {/* saving throws */}
                        <div className="flex flex-col items-stretch bg-slate-600 rounded p-2 m-1">
                            <div className="flex flex-row items-center justify-evenly">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-1xl font-bold italic">Strength</h2>
                                    <div className="flex flex-row items-center">
                                        <p className="text-white text-center">{handleProficiency(dndCharacterValues.strengthProfST)}</p>
                                        <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.strengthST}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-1xl font-bold italic">Dexterity</h2>
                                    <div className="flex flex-row items-center">
                                        <p className="text-white text-center">{handleProficiency(dndCharacterValues.dexterityProfST)}</p>
                                        <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.dexterityST}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-1xl font-bold italic">Constitution</h2>
                                    <div className="flex flex-row items-center">
                                        <p className="text-white text-center">{handleProficiency(dndCharacterValues.constitutionProfST)}</p>
                                        <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.constitutionST}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-1xl font-bold italic">Intelligence</h2>
                                    <div className="flex flex-row items-center">
                                        <p className="text-white text-center">{handleProficiency(dndCharacterValues.intelligenceProfST)}</p>
                                        <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.intelligenceST}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-evenly">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-1xl font-bold italic">Wisdom</h2>
                                    <div className="flex flex-row items-center">
                                        <p className="text-white text-center">{handleProficiency(dndCharacterValues.wisdomProfST)}</p>
                                        <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.wisdomST}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h2 className="text-white text-1xl font-bold italic">Charisma</h2>
                                    <div className="flex flex-row items-center">
                                        <p className="text-white text-center">{handleProficiency(dndCharacterValues.charismaProfST)}</p>
                                        <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.charismaST}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* character sheet stuff on the right*/}
                    <div className="flex flex-row items-stretch">
                        {/* ability scores */}
                        <div className="flex flex-col bg-slate-600 rounded p-2 m-1">
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-1xl font-bold italic">Strength</h2>
                                <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.strength}</p>
                                <p className="text-black text-xs p-1 rounded-full text-center w-10 border-4 bg-white border-stone-400">{dndCharacterValues.strengthMod}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-1xl font-bold italic">Dexterity</h2>
                                <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.dexterity}</p>
                                <p className="text-black text-xs p-1 rounded-full text-center w-10 border-4 bg-white border-stone-400">{dndCharacterValues.dexterityMod}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-1xl font-bold italic">Constitution</h2>
                                <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.constitution}</p>
                                <p className="text-black text-xs p-1 rounded-full text-center w-10 border-4 bg-white border-stone-400">{dndCharacterValues.constitutionMod}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-1xl font-bold italic">Intelligence</h2>
                                <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.intelligence}</p>
                                <p className="text-black text-xs p-1 rounded-full text-center w-10 border-4 bg-white border-stone-400">{dndCharacterValues.intelligenceMod}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-1xl font-bold italic">Wisdom</h2>
                                <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.wisdom}</p>
                                <p className="text-black text-xs p-1 rounded-full text-center w-10 border-4 bg-white border-stone-400">{dndCharacterValues.wisdomMod}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="text-white text-1xl font-bold italic">Charisma</h2>
                                <p className="text-black p-1 m-1 rounded text-center w-12 border-4 bg-white border-stone-400">{dndCharacterValues.charisma}</p>
                                <p className="text-black text-xs p-1 rounded-full text-center w-10 border-4 bg-white border-stone-400">{dndCharacterValues.charismaMod}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch">
                        <div className="flex flex-col items-stretch bg-slate-600 rounded p-2 m-1">
                            <h2 className="text-white text-1xl text-center font-bold italic">Skills</h2>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.acrobaticsProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.acrobatics}</p>
                                <h2 className="text-white text-sm italic">Acrobatics</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.animalHandlingProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.animalHandling}</p>
                                <h2 className="text-white text-sm italic">Animal Handling</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.arcanaProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.arcana}</p>
                                <h2 className="text-white text-sm italic">Arcana</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.athleticsProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.athletics}</p>
                                <h2 className="text-white text-sm italic">Athletics</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.deceptionProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.deception}</p>
                                <h2 className="text-white text-sm italic">Deception</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.historyProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.history}</p>
                                <h2 className="text-white text-sm italic">History</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.insightProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.insight}</p>
                                <h2 className="text-white text-sm italic">Insight</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.intimidationProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.intimidation}</p>
                                <h2 className="text-white text-sm italic">Intimidation</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.investigationProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.investigation}</p>
                                <h2 className="text-white text-sm italic">Investigation</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.medicineProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.medicine}</p>
                                <h2 className="text-white text-sm italic">Medicine</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.natureProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.nature}</p>
                                <h2 className="text-white text-sm italic">Nature</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.perceptionProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.perception}</p>
                                <h2 className="text-white text-sm italic">Perception</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.performanceProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.performance}</p>
                                <h2 className="text-white text-sm italic">Performance</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.persuasionProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.persuasion}</p>
                                <h2 className="text-white text-sm italic">Persuasion</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.religionProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.religion}</p>
                                <h2 className="text-white text-sm italic">Religion</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.sleightOfHandProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.sleightOfHand}</p>
                                <h2 className="text-white text-sm italic">Sleight of Hand</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.stealthProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.stealth}</p>
                                <h2 className="text-white text-sm italic">Stealth</h2>
                            </div>
                            <div className="flex flex-row items-center">
                                <p className="text-white text-center">{handleProficiency(dndCharacterValues.survivalProf)}</p>
                                <p className="text-black h-7 text-xs p-1 m-1 rounded text-center w-12 bg-white border-4 border-stone-400">{dndCharacterValues.survival}</p>
                                <h2 className="text-white text-sm italic">Survival</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}