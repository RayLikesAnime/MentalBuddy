import React, { useState } from 'react';
import App from './App';
function Song() {
  const [mood, setMood] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mood }),
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendations(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Music Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mood" className="label">Mood:</label>
        <input
          type="text"
          id="mood"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Get Recommendations</button>
      </form>
      <div className="recommendations">
        <h2 className="subtitle">Recommendations:</h2>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: recommendation }} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Song;
