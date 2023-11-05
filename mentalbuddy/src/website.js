import React, { useState } from 'react';

function RandomWebsiteGenerator() {
  const [randomWebsite, setRandomWebsite] = useState('');
  const apiUrl = 'https://Useless-Sites.glique.repl.co/api/random';

  const generateRandomWebsite = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setRandomWebsite(data.url);
      } else {
        console.error('Failed to fetch random website.');
      }
    } catch (error) {
      console.error('Error fetching random website:', error);
    }
  };

  const openRandomWebsite = () => {
    if (randomWebsite) {
      window.open(randomWebsite, '_blank');
    }
  };

  return (
    <div>
      <h1>Random Website Generator</h1>
      <button onClick={generateRandomWebsite}>Generate Random Website</button>
      {randomWebsite && (
        <div>
          <p>Random Website:</p>
          <a href={randomWebsite} target="_blank" rel="noopener noreferrer">
            {randomWebsite}
          </a>
          <button onClick={openRandomWebsite}>Open Website</button>
        </div>
      )}
    </div>
  );
}

export default RandomWebsiteGenerator;
