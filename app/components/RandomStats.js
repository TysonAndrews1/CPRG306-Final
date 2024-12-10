import React from 'react';
import { BiShuffle } from 'react-icons/bi';

function RandomStat() {
  // Function to roll stats (4d6 drop the lowest)
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => a - b);
  const total = rolls.slice(1).reduce((sum, roll) => sum + roll, 0);
  return total;
}

const RandomStats = ({ onStatsRandomized }) => {
  const randomizeStats = () => {
    // Generate random stats for each core stat
    const newStats = {
      STR: RandomStat(),
      DEX: RandomStat(),
      CON: RandomStat(),
      INT: RandomStat(),
      WIS: RandomStat(),
      CHA: RandomStat(),
    };

    // Call the parent function to update the stats with new values
    onStatsRandomized(newStats);
  };

  return (
    <div>
      <BiShuffle
        className="mt-2 text-white bg-blue-500 h-10 w-10 rounded border-4 border-blue-500 hover:bg-blue-300 hover:border-blue-300"
        onClick={randomizeStats}
      />
    </div>
  );
};

export default RandomStats;
