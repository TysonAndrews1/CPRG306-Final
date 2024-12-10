"use client";

import { useState, useEffect } from "react";

// Function to fetch data from the API
async function fetchAPIData(path) {
  const response = await fetch(`https://www.dnd5eapi.co/api/${path}`);
  const data = await response.json();
  return data.results || data; // API returns results in an array of objects, or the whole data in some cases
}

export function useFetchData(path) {
  const [fetchData, setFetchData] = useState(null); // Initially null until data is fetched
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    // Only fetch if path is defined
    if (!path) return;

    async function loadAPI() {
      try {
        setLoading(true); // Start loading
        const data = await fetchAPIData(path); // Fetch data
        setFetchData(data); // Update the state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError(err); // Handle error if the fetch fails
        setLoading(false); // Set loading to false
      }
    }

    loadAPI();
  }, [path]); // Re-fetch when `path` changes

  return { fetchData, loading, error };
}
