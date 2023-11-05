import React, { useState, useEffect } from 'react';

function Search({ setSelectedMovie }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = '364e788680344b23cda8f9cade81e966'; // Replace with your TMDb API key

  useEffect(() => {
    if (searchQuery) {
      // Fetch movie data from TMDb API when the search query changes
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });
    }
  }, [searchQuery, apiKey]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <ul className="search-results">
        {searchResults.map((movie) => (
          <li
            key={movie.id}
            onClick={() => handleSelectMovie(movie)}
            className="search-item"
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
