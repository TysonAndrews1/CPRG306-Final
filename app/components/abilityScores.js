import React from "react";

const AbilityScoreInput = ({ ability, score, modifier, setScore }) => {
  // Calculate modifier automatically based on score (modifier = (score - 10) / 2)
  const calculatedModifier = Math.floor((score - 10) / 2);

  return (
    <div className="centered-flex-column">
      <h2 className="text-white text-1xl font-bold italic">{ability}</h2>
      
      <input
        className="text-black p-1 m-1 rounded text-end w-12 border-4 border-stone-400"
        type="number"
        value={score}
        onChange={(e) => {
          const newScore = parseInt(e.target.value);
          if (!isNaN(newScore)) {
            setScore(Math.max(1, Math.min(30, newScore))); // Ensure valid score (1-30)
          } else {
            setScore(0);  // Optionally reset to 0 or handle it differently
          }
        }}
        placeholder="Score"
      />
      
      {/* Show modifier based on the calculated value */}
      <input
        className="text-black text-xs p-1 rounded-full text-end w-10 border-4 border-stone-400"
        type="number"
        value={calculatedModifier}
        readOnly
        placeholder="Modifier"
      />
    </div>
  );
};

export default AbilityScoreInput;
