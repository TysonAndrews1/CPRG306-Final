import React from 'react';

const SavingThrowInput = ({ ability, isProficient, savingThrowValue }) => {
  return (
    <div className="centered-flex-row">
      <input
        className="checkbox-styles"
        type="checkbox"
        checked={isProficient}
        disabled // Checkbox is now disabled (cannot be toggled by the user)
      />
      <span className="saving-throw text-center w-20 p-1 m-1 rounded border-4 border-stone-400 bg-white">
        {savingThrowValue}
      </span>
      <h2 className="text-white text-1xl font-bold italic">{ability}</h2>
    </div>
  );
};

export default SavingThrowInput;
