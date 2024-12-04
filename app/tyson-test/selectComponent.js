"use client";

import { useState, useEffect } from "react";

// Function to fetch data from the API
async function fetchAPIData(path) {
  const response = await fetch(`https://www.dnd5eapi.co/api/${path}`);
  const data = await response.json();
  console.log(`Fetched data for path: ${path}`, data);
  return data.results || data; // API returns results in an array of objects, or the whole data in some cases
}

export default function SelectApi({ path }) {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  // Load data from API when the component mounts or path changes
  useEffect(() => {
    async function loadAPI() {
      try {
        const data = await fetchAPIData(path);
        setOptions(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    loadAPI();
  }, [path]); // Dependency array includes `path`, so it re-fetches when `path` changes

  // Handle the selection change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Select a {path}</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        {/* Placeholder option */}
        <option value="" disabled>
          -- Select a {path} --
        </option>

        {/* Map through the options */}
        {options.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      <p>You selected: {selectedOption}</p>
    </div>
  );
}
