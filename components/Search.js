'use client'
// import Image from 'next/image'
// import styles from './SideBar.css'
import { useState } from 'react';
import React from 'react'



export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Perform the search using an API or any other method specific to your program.
    // For this example, we'll use a dummy search function that returns mock results.
    const results = await searchPlaces(searchQuery);

    // Update the search results state
    setSearchResults(results);
  };

  const searchPlaces = async (query) => {

    return places.filter((place) =>
      place.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div>
    <input id='inputmain'
      type="text"
      placeholder="Search for places"
      // value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button id='buttons' onClick={handleSearch}>s</button>
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => <p key={result}>{result}</p>)
      ) : (
        <p></p>
      )}
    </div>
  </div>

    
  )
}
 
