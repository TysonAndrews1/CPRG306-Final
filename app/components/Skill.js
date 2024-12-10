import React from 'react';

const SkillCheckbox = ({ skillName, abilityModifier, proficiency,proficiencyValue, onChange }) => {
  // Calculate the skill modifier with proficiency if the skill is proficient
  const modifier = abilityModifier + (proficiency ? proficiencyValue : 0);  // Assuming proficiency bonus is +2
  return (
    <div className="centered-flex-row">
      <input
        className="checkbox-styles"
        type="checkbox"
        checked={proficiency}
        onChange={onChange} // Handle checkbox toggle
      />
      <p className="input-styles">{modifier}</p> {/* Display the skill modifier */}
      <label className="label-styles">{skillName}</label>
    </div>
  );
};

export default SkillCheckbox;
