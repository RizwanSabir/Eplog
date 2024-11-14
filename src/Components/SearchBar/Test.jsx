import React, { useState, useEffect } from 'react';
import './index.css';

const Test = () => {
  const [query, setQuery] = useState('');
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(null); // Store the AbortController
  const [error, setError] = useState(''); // Error message state
  const [noResults, setNoResults] = useState(false); // State to handle "No results found" after delay

  const handleSearch = async () => {
    if (query.length < 3) return; // Do not search if query is less than 3 characters

    // Cancel the previous request if it exists
    if (controller) {
      controller.abort();
    }

    // Create a new AbortController for the current request
    const newController = new AbortController();
    setController(newController);

    setLoading(true);
    setNoResults(false); // Reset "No results" message while loading
    try {
      const response = await fetch(`https://dataapi.pixxicrm.ae/pixxiapi/v1/search/${query}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-', // Replace with your actual token
        },
        body: JSON.stringify({
          page: 1,
          size: 10,
        }),
        signal: newController.signal, // Attach the abort signal
      });
      const data = await response.json();
      if (data.statusCode === 200) {
        setLocations(data.data);
      } else {
        console.error("Failed to fetch locations:", data.message);
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error("Error fetching locations:", error);
      }
    } finally {
      setLoading(false);

      // After loading finishes, wait 2 seconds before checking for no results
      setTimeout(() => {
        if (locations.length === 0) {
          setNoResults(true); // Show "No results found" if no locations are found
        }
      }, 2000);
    }
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery.length < 3) {
      setError('Please enter at least 3 characters to search.');
      setLocations([]); // Clear locations when input is too short
      setNoResults(false); // Reset "No results" state
    } else {
      setError(''); // Clear error when query length is valid
      handleSearch();
    }
  };

  // Cleanup on component unmount or re-render to cancel any ongoing requests
  useEffect(() => {
    return () => {
      if (controller) {
        controller.abort();
      }
    };
  }, [controller]);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full">
        <label htmlFor="location-input" className="block mb-2 text-sm font-medium text-gray-700">
          Search Location
        </label>

        <input
          id="location-input"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Type a city or region..."
        />
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

        {loading && <p className="text-sm text-gray-500 mt-2">Loading...</p>}

        {noResults && query.length >= 3 && locations.length === 0 && (
          <li className="px-4 py-2 text-sm text-gray-500">No results found</li>
        )}

        {!noResults && locations.length > 0 && (
          <div className="mt-2 w-[200px] text-black bg-white absolute border overflow-y-scroll rounded scrollbar text-left h-[200px] flex flex-col z-[150]">
            {locations.map((dev, index) => (
              <div
                key={index}
                className="w-full cursor-pointer hover:bg-gray-200 pl-2 flex gap-y-2 items-center"
              >
                <p>{dev.fullName}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
